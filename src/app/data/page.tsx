import { PrismaClient, Report } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Search, Database } from 'lucide-react'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

const FALLBACK_DEMO_DATA = [
    { id: 'wsw-5fa-43k', area: 'Lugbe FHA', urgency: 'Critical', priorityScore: 88, wasteType: 'Liquid waste / Sewage', status: 'New', createdAt: new Date() },
    { id: 'wsw-2bc-81m', area: 'Jabi Motor Park', urgency: 'High', priorityScore: 76, wasteType: 'Organic/Food Waste', status: 'Assigned', createdAt: new Date(Date.now() - 3600000) },
    { id: 'wsw-9zx-12r', area: 'Wuse Zone 4', urgency: 'High', priorityScore: 65, wasteType: 'Plastic/Recyclable', status: 'Resolved', createdAt: new Date(Date.now() - 7200000) },
    { id: 'wsw-3lp-98o', area: 'Kubwa', urgency: 'Medium', priorityScore: 42, wasteType: 'General Solid Waste', status: 'New', createdAt: new Date(Date.now() - 86400000) },
    { id: 'wsw-7qw-55y', area: 'Maitama', urgency: 'Low', priorityScore: 24, wasteType: 'Plastic/Recyclable', status: 'Assigned', createdAt: new Date(Date.now() - 172800000) },
    { id: 'wsw-1ty-00k', area: 'Gwarinpa Estate', urgency: 'Critical', priorityScore: 92, wasteType: 'Medical / Hazardous', status: 'New', createdAt: new Date(Date.now() - 212800000) },
] as unknown as Report[];

export default async function DemoDataPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const resolvedParams = await searchParams;
    const filterArea = typeof resolvedParams?.area === 'string' ? resolvedParams.area : undefined

    let items = FALLBACK_DEMO_DATA;

    try {
        const where = filterArea ? { area: filterArea } : {}
        const dbItems = await prisma.report.findMany({
            where,
            orderBy: { createdAt: 'desc' },
            take: 50
        })
        if (dbItems.length > 0) items = dbItems;
    } catch (e) {
        console.warn("Falling back to static demo arrays for stateless environment rendering.");
    }

    return (
        <div className="container mx-auto py-12 px-4 md:px-6 max-w-6xl">
            <div className="mb-10 text-center">
                <div className="flex justify-center mb-4">
                    <div className="bg-emerald-100 p-3 rounded-md border border-emerald-200">
                        <Database className="w-10 h-10 text-emerald-700" />
                    </div>
                </div>
                <h1 className="text-4xl font-black tracking-tighter text-emerald-950 uppercase">Global Data Explorer</h1>
                <p className="text-muted-foreground mt-3 font-medium max-w-2xl mx-auto">
                    Inspect the synthetic reporting dataset mapping driving the core intelligence dashboard algorithms.
                </p>
            </div>

            <Card className="border border-emerald-200 shadow-sm rounded-md overflow-hidden">
                <CardHeader className="bg-emerald-950 border-b border-emerald-800 p-6">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <CardTitle className="text-white font-bold tracking-widest uppercase text-center sm:text-left text-lg">
                            Local SQLite Data Buffer (Showing {items.length} records)
                        </CardTitle>
                        <Badge variant="secondary" className="bg-lime-400 text-emerald-950 hover:bg-lime-500 font-black px-4 py-1.5 shadow-lg shadow-lime-400/20">
                            <Search className="w-4 h-4 mr-2" /> Live Connection Active
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-0 bg-white">
                    <div className="w-full overflow-x-auto">
                        <table className="w-full text-sm">
                            <thead className="bg-emerald-50/80 border-b border-emerald-100">
                                <tr className="text-emerald-800 font-bold uppercase tracking-wider text-[11px]">
                                    <th className="px-6 py-5 text-center whitespace-nowrap">Report Trace URI</th>
                                    <th className="px-6 py-5 text-center whitespace-nowrap">Geographic Zone</th>
                                    <th className="px-6 py-5 text-center whitespace-nowrap">Material Composition</th>
                                    <th className="px-6 py-5 text-center whitespace-nowrap">Flagged Urgency</th>
                                    <th className="px-6 py-5 text-center whitespace-nowrap">Neural Prediction Matrix</th>
                                    <th className="px-6 py-5 text-center whitespace-nowrap">Timestamp</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-50">
                                {items.map((item: Report) => (
                                    <tr key={item.id} className="hover:bg-emerald-50/40 transition-colors group">
                                        <td className="px-6 py-4 font-mono text-[11px] font-bold text-emerald-400/70 text-center whitespace-nowrap group-hover:text-emerald-600 transition-colors">
                                            {item.id.split('-')[0].toUpperCase()}-SYS
                                        </td>
                                        <td className="px-6 py-4 font-bold text-emerald-950 text-center whitespace-nowrap">
                                            {item.area}
                                        </td>
                                        <td className="px-6 py-4 font-medium text-emerald-800 text-center whitespace-nowrap">
                                            {item.wasteType}
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <Badge variant="outline" className={`justify-center font-bold px-3 py-1 ${item.urgency === 'Critical' ? 'border-red-600 bg-red-50 text-red-700' :
                                                item.urgency === 'High' ? 'border-orange-500 bg-orange-50 text-orange-700' :
                                                    'border-emerald-500 bg-emerald-50 text-emerald-700'
                                                }`}>
                                                {item.urgency}
                                            </Badge>
                                        </td>
                                        <td className="px-6 py-4 text-center font-black">
                                            <span className={`${(item as any).priorityScore > 75 ? 'text-red-600' : (item as any).priorityScore > 50 ? 'text-orange-600' : 'text-emerald-600'}`}>
                                                {((item as any).priorityScore || 0).toFixed(0)} <span className="text-muted-foreground/50 font-medium text-xs">/100</span>
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-emerald-700/60 text-xs font-semibold text-center whitespace-nowrap">
                                            {format(new Date(item.createdAt), 'dd MMM yyyy, HH:mm')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
