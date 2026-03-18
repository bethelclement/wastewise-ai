import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Award, Map, TrendingUp } from 'lucide-react'

export default function AboutPage() {
    return (
        <div className="container max-w-4xl py-12 px-4 md:px-6">
            <div className="mb-12 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-emerald-950 mb-4">About WasteWise AI</h1>
                <p className="text-xl text-muted-foreground">
                    A NextGen Knowledge Showcase Initiative.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <h2 className="text-2xl font-bold text-emerald-900 mb-4 border-b pb-2">The Problem</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        In rapidly expanding urban centers like Abuja, waste management agencies rely heavily on reactive cleanup. Collection trucks operate on static routes, entirely unaware of localized overflow crises until severe environmental hazard or public complaint occurs. This leads to inefficient fuel usage, aesthetic degradation of communities, and increased public health risks.
                    </p>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-emerald-900 mb-4 border-b pb-2">3MTT Learning Application</h2>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                        This MVP serves as a comprehensive capstone applying the core modules from the 3MTT learning tract:
                    </p>
                    <ul className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 mb-12">
                        <li className="flex flex-col p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100">
                            <strong className="text-emerald-900 dark:text-emerald-100">Data & Data Management</strong>
                            <span className="text-sm text-emerald-700 dark:text-emerald-300">Managed local relational data (SQLite) and generated reproducible mock datasets via Spreadsheets & CSV imports for ML validation.</span>
                        </li>
                        <li className="flex flex-col p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100">
                            <strong className="text-emerald-900 dark:text-emerald-100">Beginner Python Programming</strong>
                            <span className="text-sm text-emerald-700 dark:text-emerald-300">Employed Python logic (variables, loops, and SciKit-Learn) in a prototype to clean data and train the initial analytic algorithms.</span>
                        </li>
                        <li className="flex flex-col p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100">
                            <strong className="text-emerald-900 dark:text-emerald-100">Analytics & Machine Learning</strong>
                            <span className="text-sm text-emerald-700 dark:text-emerald-300">Applied K-Nearest Neighbors (KNN) algorithms to accurately predict risk scores from real-world features, directly applying core ML concepts.</span>
                        </li>
                        <li className="flex flex-col p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-100">
                            <strong className="text-emerald-900 dark:text-emerald-100">Data Analyst Workflow</strong>
                            <span className="text-sm text-emerald-700 dark:text-emerald-300">Designed the Admin Dashboard simulating an authentic Data Analyst workflow—moving from raw data ingestion to visualization and insight extraction.</span>
                        </li>
                    </ul>
                </section>

                <section>
                    <h2 className="text-2xl font-bold text-emerald-900 mb-6 border-b pb-2">Expected Impact</h2>
                    <div className="grid sm:grid-cols-2 gap-6">
                        <ImpactCard
                            icon={<Leaf className="w-6 h-6" />}
                            title="Environmental Protection"
                            text="By prioritizing high-risk zones, we prevent organic and plastic waste from spilling into waterways or rotting in public areas."
                        />
                        <ImpactCard
                            icon={<Map className="w-6 h-6" />}
                            title="Digital Inclusion"
                            text="Providing an accessible and simple mobile reporting flow empowers citizens from all walks of life to directly interface with municipal services."
                        />
                        <ImpactCard
                            icon={<TrendingUp className="w-6 h-6" />}
                            title="Operational Efficiency"
                            text="Optimized dispatcher routing reduces civic fuel burn and ensures trucks go exactly where they are needed most, saving taxpayer money."
                        />
                        <ImpactCard
                            icon={<Award className="w-6 h-6" />}
                            title="NextGen Showcase Alignment"
                            text="Pitched for the 3MTT / NITDA NextGen Knowledge Showcase—a scalable Nigerian civic-tech solution ready for pilot production."
                        />
                    </div>
                </section>

                <section className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                    <h2 className="text-2xl font-bold text-emerald-900 mb-4">Scalability Roadmap</h2>
                    <ul className="space-y-4 text-emerald-800">
                        <li className="flex gap-3">
                            <span className="font-bold text-lime-600">Phase 1:</span>
                            <span>Abuja MVP deployment and user-testing with local AEPB supervisors.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-lime-600">Phase 2:</span>
                            <span>Integration of IoT bin level sensors to automate reports entirely without human interaction.</span>
                        </li>
                        <li className="flex gap-3">
                            <span className="font-bold text-lime-600">Phase 3:</span>
                            <span>Expansion to Lagos & Kano, optimizing localized ML engines for each terrain.</span>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

function ImpactCard({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) {
    return (
        <Card className="border-emerald-100">
            <CardContent className="p-6">
                <div className="p-3 bg-lime-100 text-lime-700 w-fit rounded-lg mb-4">
                    {icon}
                </div>
                <h3 className="text-lg font-bold text-emerald-950 mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{text}</p>
            </CardContent>
        </Card>
    )
}
