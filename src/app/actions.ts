'use server'

import { PrismaClient } from '@prisma/client'
import { calculatePriority } from '@/lib/ai'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function submitReport(formData: FormData) {
    const fullName = formData.get('fullName') as string
    const phoneNumber = formData.get('phoneNumber') as string
    const area = formData.get('area') as string
    const street = formData.get('street') as string
    const wasteType = formData.get('wasteType') as string
    const urgency = formData.get('urgency') as string
    const notes = formData.get('notes') as string

    // Simple validation
    if (!fullName || !area || !street || !wasteType || !urgency) {
        return { success: false, error: 'Missing required fields' }
    }

    try {
        // 1. Compute how many missed pickups exist for this area recently
        const recentMissed = await prisma.report.count({
            where: {
                area,
                wasteType: 'Missed pickup',
                status: { in: ['New', 'Assigned', 'In progress'] }
            }
        })

        // 2. Draft the report object
        const reportData = {
            fullName,
            phoneNumber: phoneNumber || null,
            area,
            street,
            wasteType,
            urgency,
            notes: notes || null,
            status: 'New',
            createdAt: new Date(),
        }

        // 3. AI scoring
        const aiResult = calculatePriority(reportData, recentMissed)

        // 4. Save report
        const newReport = await prisma.report.create({
            data: {
                ...reportData,
                priorityScore: aiResult.riskScore
            }
        })

        // 5. Upsert AreaStat
        await prisma.areaStat.upsert({
            where: { area },
            update: {
                riskScore: aiResult.riskScore,
                riskLevel: aiResult.label,
                insight: aiResult.insight
            },
            create: {
                area,
                riskScore: aiResult.riskScore,
                riskLevel: aiResult.label,
                insight: aiResult.insight
            }
        })

        revalidatePath('/dashboard')
        revalidatePath('/data')

        return {
            success: true,
            reportId: newReport.id,
            priorityLabel: aiResult.label
        }
    } catch (error) {
        console.error('Submission error:', error)
        return { success: false, error: 'Failed to submit report' }
    }
}
