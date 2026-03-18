import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { format } from "date-fns"
import { Search } from 'lucide-react'

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function DemoDataPage({
    searchParams,
}: {
    searchParams?: { [key: string]: string | string[] | undefined };
}) {
    const filterArea = typeof searchParams?.area === 'string' ? searchParams.area : undefined

    const where = filterArea ? { area: filterArea } : {}
    const items = await prisma.report.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: 50
    })

    return (
        <div className="container py-12 px-4 md:px-6">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight text-emerald-950">Demo Data Explorer</h1>
                <p className="text-muted-foreground mt-2">
                    Inspect the synthetic reporting data driving the intelligence dashboard.
                    Use this page to verify that the seed script ran successfully.
                </p>
            </div>

            <Card className="border-emerald-100 shadow-sm">
                <CardHeader className="bg-emerald-50/50 border-b">
                    <div className="flex items-center justify-between">
                        <CardTitle className="text-emerald-900">Database Viewer (Showing {items.length} records)</CardTitle>
                        <Badge variant="secondary" className="bg-lime-200 text-lime-900 hover:bg-lime-300">
                            <Search className="w-3 h-3 mr-1" /> Ready
                        </Badge>
                    </div>
                </CardHeader>
                <CardContent className="p-0">
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="text-xs text-muted-foreground uppercase bg-emerald-50/30">
                                <tr>
                                    <th className="px-6 py-4 font-medium">Report URI</th>
                                    <th className="px-6 py-4 font-medium">Area</th>
                                    <th className="px-6 py-4 font-medium">Waste Type</th>
                                    <th className="px-6 py-4 font-medium">Urgency</th>
                                    <th className="px-6 py-4 font-medium">Predicted Score</th>
                                    <th className="px-6 py-4 font-medium">Time Logged</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-emerald-50">
                                {items.map((item) => (
                                    <tr key={item.id} className="hover:bg-emerald-50/30 transition-colors">
                                        <td className="px-6 py-4 font-mono text-[10px] text-muted-foreground">{item.id}</td>
                                        <td className="px-6 py-4 font-semibold text-emerald-900">{item.area}</td>
                                        <td className="px-6 py-4 text-emerald-800">{item.wasteType}</td>
                                        <td className="px-6 py-4">
                                            {item.urgency}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-lime-600">{Math.round(item.priorityScore)}</span>
                                        </td>
                                        <td className="px-6 py-4 text-muted-foreground">
                                            {format(new Date(item.createdAt), 'MMM d, yyyy HH:mm')}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {items.length === 0 && (
                            <div className="p-12 text-center text-muted-foreground">
                                No mock data loaded. Try submitting a report.
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}
