import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const areas = ['Wuse', 'Garki', 'Jabi', 'Kubwa', 'Lugbe', 'Maitama', 'Nyanya']
const wasteTypes = ['Mixed household waste', 'Organic waste', 'Plastic waste', 'Recyclables', 'Illegal dumping', 'Missed pickup', 'Bin overflow']
const urgencies = ['Low', 'Medium', 'High', 'Critical']
const statuses = ['New', 'Assigned', 'In progress', 'Resolved']

// Helper to get random item
const randomItem = (arr: any[]) => arr[Math.floor(Math.random() * arr.length)]

// Generates random Date within the last 7 days
const randomDate = () => {
    const d = new Date()
    d.setDate(d.getDate() - Math.floor(Math.random() * 7))
    d.setHours(Math.floor(Math.random() * 24))
    d.setMinutes(Math.floor(Math.random() * 60))
    return d
}

// Generate an individual report
const generateReport = () => {
    // Let's create some logical correlation for realistic demo data:
    // e.g. Wuse and Lugbe have more "Missed pickup" and "Critical" issues
    const area = Math.random() > 0.6 ? randomItem(['Wuse', 'Lugbe']) : randomItem(areas)

    // If Wuse or Lugbe, slightly higher chance of Critical/High
    let urgency = randomItem(urgencies)
    if ((area === 'Wuse' || area === 'Lugbe') && Math.random() > 0.5) urgency = 'Critical'

    let wasteType = randomItem(wasteTypes)
    if (urgency === 'Critical') wasteType = randomItem(['Missed pickup', 'Bin overflow', 'Illegal dumping'])

    // More recent ones are 'New', older ones might be 'Resolved'
    const date = randomDate()
    const daysOld = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))

    let status = 'New'
    if (daysOld > 5) status = 'Resolved'
    else if (daysOld > 2) status = randomItem(['Assigned', 'In progress'])
    else if (daysOld > 1) status = randomItem(['New', 'Assigned'])

    return {
        fullName: `Resident ${Math.floor(Math.random() * 1000)}`,
        phoneNumber: `080${Math.floor(Math.random() * 100000000)}`,
        area,
        street: `Street ${Math.floor(Math.random() * 100)}`,
        wasteType,
        urgency,
        notes: `Mock notes for a ${urgency.toLowerCase()} incident involving ${wasteType.toLowerCase()}.`,
        status,
        priorityScore: 0, // We'll compute this dynamically in app, or set dummy here
        createdAt: date,
    }
}

async function main() {
    console.log('Seeding Database...')
    // Clean up existing data to be safe
    await prisma.report.deleteMany({})
    await prisma.areaStat.deleteMany({})

    const reports = Array.from({ length: 60 }).map(generateReport)

    for (const r of reports) {
        await prisma.report.create({ data: r })
    }

    console.log(`Successfully seeded ${reports.length} reports!`)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
