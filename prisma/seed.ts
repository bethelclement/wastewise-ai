import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Real Abuja AEPB contextual data based on deep research
const locations = [
    { area: 'Wuse', street: 'Addis Ababa Crescent', context: 'Liquid waste spilling into walkways and drainage.' },
    { area: 'Wuse', street: 'Aminu Kano Crescent', context: 'Commercial waste from night traders piling up.' },
    { area: 'Jabi', street: 'Jabi Motor Park', context: 'Open defecation and massive refuse dumps near traffic lights.' },
    { area: 'Gwarimpa', street: '3rd Avenue', context: 'Contractor failed to evacuate waste for weeks.' },
    { area: 'Garki', street: 'Area 1 Market', context: 'Market waste spilling onto the main road, blocking traffic.' },
    { area: 'Garki', street: 'Ahmadu Bello Way', context: 'Indiscriminate dumping by illegal night-time operators.' },
    { area: 'Kubwa', street: 'Phase 4', context: 'Overflowing bins creating mosquito breeding grounds.' },
    { area: 'Lugbe', street: 'FHA Estate', context: 'Heaps of uncollected garbage emitting pungent odors.' },
    { area: 'Nyanya', street: 'Nyanya Market Axis', context: 'Solid waste mismanaged, mixing with floodwater.' }
]

const wasteTypes = [
    'Mixed household waste',
    'Organic waste',
    'Plastic waste',
    'Illegal dumping',
    'Missed pickup',
    'Bin overflow',
    'Liquid waste / Sewage'
]

// Generates random Date within the last 14 days
const randomDate = () => {
    const d = new Date()
    d.setDate(d.getDate() - Math.floor(Math.random() * 14))
    d.setHours(Math.floor(Math.random() * 24))
    d.setMinutes(Math.floor(Math.random() * 60))
    return d
}

// Generate an individual report
const generateReport = (index: number) => {
    const loc = locations[index % locations.length]

    // Realism logic:
    let urgency = 'Medium'
    let wasteType = 'Mixed household waste'
    let notes = loc.context

    if (loc.context.includes('Liquid waste') || loc.context.includes('Open defecation')) {
        urgency = 'Critical'
        wasteType = 'Liquid waste / Sewage'
    } else if (loc.context.includes('mosquito breeding') || loc.context.includes('pungent odors')) {
        urgency = 'High'
        wasteType = 'Bin overflow'
    } else if (loc.context.includes('night traders') || loc.context.includes('indiscriminate')) {
        urgency = 'High'
        wasteType = 'Illegal dumping'
    } else if (loc.context.includes('Contractor failed')) {
        urgency = 'High'
        wasteType = 'Missed pickup'
    }

    const date = randomDate()
    const daysOld = Math.floor((Date.now() - date.getTime()) / (1000 * 60 * 60 * 24))

    let status = 'New'
    if (daysOld > 10) status = 'Resolved'
    else if (daysOld > 5) status = 'In progress'
    else if (daysOld > 2) status = 'Assigned'

    // Generate authentic sounding Nigerian names
    const firstNames = ['Chidi', 'Ngozi', 'Aisha', 'Fatima', 'Oluwaseun', 'Ade', 'Hassan', 'Binta', 'Emeka', 'Yusuf']
    const lastNames = ['Okafor', 'Abubakar', 'Adeyemi', 'Ibrahim', 'Nwosu', 'Bello', 'Eze', 'Musa', 'Okoro', 'Sanusi']

    return {
        fullName: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
        phoneNumber: `080${Math.floor(10000000 + Math.random() * 90000000)}`,
        area: loc.area,
        street: loc.street,
        wasteType,
        urgency,
        notes,
        status,
        priorityScore: 0,
        createdAt: date,
    }
}

async function main() {
    console.log('Seeding Database with Realistic AEPB Data...')
    await prisma.report.deleteMany({})
    await prisma.areaStat.deleteMany({})

    const reports = Array.from({ length: 85 }).map((_, i) => generateReport(i))

    for (const r of reports) {
        await prisma.report.create({ data: r })
    }

    console.log(`Successfully seeded ${reports.length} realistic reports!`)
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
