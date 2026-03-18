import { PrismaClient } from '@prisma/client'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, MapPin, Truck, TrendingUp, BarChart } from 'lucide-react'
import { Progress } from "@/components/ui/progress"
import { format } from "date-fns"

const prisma = new PrismaClient()

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
    // 1. Fetch KPI metrics
    const totalReports = await prisma.report.count()
    const pendingPickups = await prisma.report.count({
        where: { status: { in: ['New', 'Assigned'] } }
    })

    // 2. Fetch Area Stats for ML Panels
    const areaStats = await prisma.areaStat.findMany({
        orderBy: { riskScore: 'desc' }
    })
    const highRiskCount = areaStats.filter(a => a.riskScore > 75).length
    const avgPriority = areaStats.length ? Math.round(areaStats.reduce((acc, curr) => acc + curr.riskScore, 0) / areaStats.length) : 0

    // 3. Fetch Recent Reports
    const recentReports = await prisma.report.findMany({
        orderBy: { createdAt: 'desc' },
        take: 8
    })

    // Helper styles
    const getBadgeColor = (level: string) => {
        switch (level) {
            case 'Critical': return 'bg-red-500 text-white hover:bg-red-600'
            case 'High': return 'bg-orange-500 text-white hover:bg-orange-600'
            case 'Moderate': return 'bg-amber-500 text-white hover:bg-amber-600'
            default: return 'bg-emerald-500 text-white hover:bg-emerald-600'
        }
    }

    return (
        <div className="flex flex-col w-full bg-emerald-50/30 min-h-screen">
            <div className="container mx-auto p-4 md:p-8 space-y-8">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight text-emerald-950">Intelligent Dispatch Dashboard</h1>
                        <p className="text-muted-foreground">Real-time waste reporting and predictive overflow analytics.</p>
                    </div>
                    <div className="flex items-center space-x-2 mt-4 sm:mt-0 bg-white border px-4 py-2 rounded-lg shadow-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500"></span>
                        </span>
                        <span className="text-sm font-medium text-emerald-800">System Live</span>
                    </div>
                </div>

                {/* Top KPIs */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="border-emerald-100 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-emerald-800">Total Reports</CardTitle>
                            <BarChart className="h-4 w-4 text-emerald-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-950">{totalReports}</div>
                            <p className="text-xs text-muted-foreground">+12% from last week</p>
                        </CardContent>
                    </Card>
                    <Card className="border-emerald-100 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-emerald-800">Pending Pickups</CardTitle>
                            <Truck className="h-4 w-4 text-emerald-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-950">{pendingPickups}</div>
                            <p className="text-xs text-muted-foreground">Awaiting dispatch</p>
                        </CardContent>
                    </Card>
                    <Card className="border-orange-100 shadow-sm bg-orange-50/30">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-orange-800">High Risk Zones</CardTitle>
                            <AlertTriangle className="h-4 w-4 text-orange-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-orange-950">{highRiskCount}</div>
                            <p className="text-xs text-orange-700">Predicted overflow imminent</p>
                        </CardContent>
                    </Card>
                    <Card className="border-emerald-100 shadow-sm">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-emerald-800">Avg Priority Score</CardTitle>
                            <TrendingUp className="h-4 w-4 text-emerald-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-emerald-950">{avgPriority} / 100</div>
                            <p className="text-xs text-muted-foreground">Overall system pressure</p>
                        </CardContent>
                    </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    {/* AI Zone Priority Map / List */}
                    <Card className="col-span-1 lg:col-span-4 border-emerald-100 shadow-sm">
                        <CardHeader>
                            <CardTitle className="text-emerald-950">AI-Powered Zone Rankings</CardTitle>
                            <CardDescription>Live predictive risk scores based on report frequency, waste type, and missed pickups.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {areaStats.map((stat, i) => (
                                    <div key={stat.id} className="flex items-center">
                                        <div className="space-y-1 w-full flex-1">
                                            <div className="flex items-center justify-between w-full">
                                                <p className="text-sm font-medium leading-none flex items-center text-emerald-900">
                                                    <span className="font-mono text-xs w-4 text-emerald-500 mr-2">{i + 1}.</span>
                                                    {stat.area}
                                                </p>
                                                <Badge variant="outline" className={getBadgeColor(stat.riskLevel)}>{stat.riskLevel}</Badge>
                                            </div>
                                            <div className="flex items-center justify-between text-muted-foreground text-xs mt-1">
                                                <span className="truncate max-w-[200px] sm:max-w-xs">{stat.insight}</span>
                                                <span className="font-bold text-emerald-950 ml-2">{Math.round(stat.riskScore)}/100</span>
                                            </div>
                                            <Progress
                                                value={stat.riskScore}
                                                className="h-1.5 mt-2 bg-emerald-100"
                                                color={stat.riskScore > 75 ? "bg-red-500" : stat.riskScore > 50 ? "bg-orange-500" : "bg-emerald-500"}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    {/* Smart Route Recommendations */}
                    <Card className="col-span-1 lg:col-span-3 border-emerald-100 shadow-sm bg-emerald-900 text-emerald-50">
                        <CardHeader>
                            <CardTitle className="text-white flex items-center"><MapPin className="mr-2 h-5 w-5" /> Recommended Dispatch Route</CardTitle>
                            <CardDescription className="text-emerald-200">Automatically generated optimal path for collection supervisors targeting nearest high-risk zones.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-lime-400 before:to-emerald-800">
                                {areaStats.slice(0, 4).map((stat, i) => (
                                    <div key={stat.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-emerald-900 bg-lime-400 text-emerald-950 font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                            {i + 1}
                                        </div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-emerald-800 p-4 rounded-lg border border-emerald-700 shadow flex flex-col">
                                            <div className="flex items-center justify-between mb-1">
                                                <h4 className="font-bold text-white">{stat.area}</h4>
                                                <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${stat.riskScore > 75 ? 'bg-red-500/20 text-red-200' : 'bg-orange-500/20 text-orange-200'}`}>Target</span>
                                            </div>
                                            <span className="text-xs text-emerald-200 truncate">{stat.insight}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Live Incoming Reports Table */}
                <Card className="border-emerald-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="text-emerald-950">Recent Household Reports</CardTitle>
                        <CardDescription>Latest civic submissions injected directly into the intelligence engine.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="relative w-full overflow-auto">
                            <table className="w-full caption-bottom text-sm text-left">
                                <thead className="[&_tr]:border-b">
                                    <tr className="border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted text-emerald-800">
                                        <th className="h-12 px-4 text-left align-middle font-medium">ID</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium">Area</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium">Waste Type</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium">Urgency</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium">Status</th>
                                        <th className="h-12 px-4 text-left align-middle font-medium">Time reported</th>
                                    </tr>
                                </thead>
                                <tbody className="[&_tr:last-child]:border-0">
                                    {recentReports.map(report => (
                                        <tr key={report.id} className="border-b border-emerald-50 transition-colors hover:bg-emerald-50/50">
                                            <td className="p-4 align-middle font-mono text-xs">{report.id.split('-')[0]}</td>
                                            <td className="p-4 align-middle font-medium text-emerald-900">{report.area}</td>
                                            <td className="p-4 align-middle">{report.wasteType}</td>
                                            <td className="p-4 align-middle">
                                                <Badge variant="outline" className={
                                                    report.urgency === 'Critical' ? 'border-red-500 text-red-600' :
                                                        report.urgency === 'High' ? 'border-orange-500 text-orange-600' : 'border-emerald-500 text-emerald-600'
                                                }>{report.urgency}</Badge>
                                            </td>
                                            <td className="p-4 align-middle">
                                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${report.status === 'New' ? 'bg-blue-100 text-blue-700' :
                                                        report.status === 'Assigned' ? 'bg-purple-100 text-purple-700' :
                                                            report.status === 'Resolved' ? 'bg-emerald-100 text-emerald-700' :
                                                                'bg-amber-100 text-amber-700'
                                                    }`}>
                                                    {report.status}
                                                </span>
                                            </td>
                                            <td className="p-4 align-middle text-muted-foreground">{format(new Date(report.createdAt), 'MMM d, p')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {recentReports.length === 0 && (
                            <div className="p-8 text-center text-muted-foreground">No reports currently in the system.</div>
                        )}
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
