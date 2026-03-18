import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Brain, Database, ShieldCheck, Zap } from 'lucide-react'

export default function InsightsPage() {
    return (
        <div className="container py-12 px-4 md:px-6">
            <div className="mb-12 max-w-[800px]">
                <h1 className="text-4xl font-bold tracking-tight text-emerald-950 mb-4">Intelligence Layer</h1>
                <p className="text-xl text-muted-foreground">
                    How WasteWise AI predicts and prioritizes civic waste management to assist human decision makers.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 mb-12">
                <Card className="border-emerald-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center text-emerald-900">
                            <Brain className="mr-2 h-5 w-5" /> The Prediction Engine
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4 text-muted-foreground">
                        <p>
                            The MVP uses a tailored rules-engine and <strong>K-Nearest Neighbors (KNN)</strong> machine learning model to calculate real-time overflow risk for every zone in Abuja.
                        </p>
                        <p>
                            Unlike reactive legacy systems that wait for bins to overflow, our algorithm identifies pressure buildup by analyzing the frequency of user reports, urgency signals, and historical missed pickups.
                        </p>
                    </CardContent>
                </Card>

                <Card className="border-emerald-100 shadow-sm">
                    <CardHeader>
                        <CardTitle className="flex items-center text-emerald-900">
                            <Database className="mr-2 h-5 w-5" /> Data Inputs
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-3 text-muted-foreground list-disc pl-5">
                            <li><strong>Urgency Level:</strong> Resident subjective assessment.</li>
                            <li><strong>Waste Type Severity:</strong> Organic waste decays faster than recycling.</li>
                            <li><strong>Temporal Density:</strong> Time elapsed since the last service.</li>
                            <li><strong>Geographic Clustering:</strong> Repeated complaints in similar zones automatically boost priority scores.</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-bold text-emerald-950 mb-6">How Risk is Calculated</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <ScoreCard title="Time Delay" description="Age of the pending reports" value="30%" />
                    <ScoreCard title="Severity" description="Type of waste reported" value="30%" />
                    <ScoreCard title="Density" description="Volume of reports in area" value="25%" />
                    <ScoreCard title="Base Urgency" description="User declared status" value="15%" />
                </div>
            </div>

            <Card className="border-orange-100 bg-orange-50/50 shadow-sm">
                <CardHeader>
                    <CardTitle className="flex items-center text-orange-900">
                        <ShieldCheck className="mr-2 h-5 w-5" /> AI Transparency & Disclosure
                    </CardTitle>
                    <CardDescription className="text-orange-800/80">
                        Aligning with global responsible AI standards.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-orange-950/80 space-y-2">
                    <p>
                        This system uses predictive scoring and prioritization logic for demonstration purposes. It is designed to <strong className="font-bold">support human decision making</strong>, not replace it.
                    </p>
                    <p>
                        The risk scores provided in the dashboard are suggestive. Dispatch supervisors always retain final authority on truck routing and resource allocation. WasteWise AI does not process personally sensitive biometric data or use facial recognition.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}

function ScoreCard({ title, description, value }: { title: string, description: string, value: string }) {
    return (
        <Card className="border-emerald-100 text-center">
            <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg text-emerald-900">{title}</CardTitle>
            </CardHeader>
            <CardContent className="p-4 pt-0">
                <div className="text-3xl font-bold text-lime-600 mb-2">{value}</div>
                <p className="text-xs text-muted-foreground">{description}</p>
            </CardContent>
        </Card>
    )
}
