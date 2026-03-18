import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { BookOpen, Share2, Code2, Users, FileText, Video } from 'lucide-react'

export default function KnowledgePage() {
    return (
        <div className="container mx-auto py-12 px-4 md:px-6 max-w-5xl">
            <div className="mb-16 text-center">
                <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-emerald-950 mb-6 uppercase">Knowledge Sharing</h1>
                <p className="text-xl text-muted-foreground">
                    Documenting the 3MTT Capstone journey, technical implementations, and community impact.
                </p>
            </div>

            <div className="space-y-12">
                <section>
                    <Card className="border border-emerald-200 shadow-sm rounded-md overflow-hidden">
                        <CardHeader className="bg-emerald-950 border-b border-emerald-900 p-6 text-emerald-50 text-center sm:text-left">
                            <CardTitle className="flex items-center justify-center sm:justify-start gap-2 text-2xl font-bold tracking-widest uppercase">
                                <Share2 className="text-lime-400 h-6 w-6" /> 
                                The 3MTT Knowledge Showcase
                            </CardTitle>
                            <CardDescription className="text-emerald-200 mt-2">
                                Aligning with the core webinar mandates for Cohort 2 project presentation.
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="p-8 space-y-6 text-emerald-950 text-justify leading-relaxed">
                            <p>
                                The <strong>WasteWise AI</strong> project is explicitly designed not just as a software application, but as a transparent, open-learning ecosystem to fulfill the Nigerian Federal Ministry of Communications' <strong>3MTT Knowledge Sharing</strong> initiative. 
                            </p>
                            <p>
                                Building this predictive infrastructure required merging insights from three distinct learning modules: <strong>Data Analyst Workflows</strong> (structuring relational data logic and cleaning datasets), <strong>Beginner Python Programming</strong> (developing the initial logic loops for the risk algorithms), and <strong>Machine Learning</strong> (applying K-Nearest Neighbors to predict bin overflow based on geospatial clustering).
                            </p>
                            <p>
                                By open-sourcing the thought process and the analytical routing logic, this project serves as a replicable template for other civic tech developers looking to optimize urban resource management.
                            </p>
                        </CardContent>
                    </Card>
                </section>

                <div className="grid gap-8 md:grid-cols-2">
                    <Card className="border border-emerald-200 shadow-sm rounded-md">
                        <CardHeader className="border-b border-emerald-100 bg-emerald-50 p-6">
                            <CardTitle className="flex items-center text-emerald-900">
                                <Code2 className="mr-2 h-5 w-5" /> Technical Learnings
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-4 text-emerald-800 text-justify">
                                <li>
                                    <strong>Predictive Fallbacks:</strong> Learned how to architect serverless database constraints on Vercel by implementing an in-memory AI calculator fallback to ensure uninterrupted demonstrations.
                                </li>
                                <li>
                                    <strong>UI/UX Rigidity:</strong> Solved complex Tailwind grid offset issues that pushed critical content off-center on ultra-wide screens by utilizing strict `mx-auto` boundary constraints.
                                </li>
                                <li>
                                    <strong>Data Pipelines:</strong> Translated raw Python ML scripts into functional Next.js/React hooks to run local predictions dynamically.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="border border-emerald-200 shadow-sm rounded-md">
                        <CardHeader className="border-b border-emerald-100 bg-emerald-50 p-6">
                            <CardTitle className="flex items-center text-emerald-900">
                                <Users className="mr-2 h-5 w-5" /> Community Impact
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-6">
                            <ul className="space-y-4 text-emerald-800 text-justify">
                                <li>
                                    <strong>Scalability:</strong> The underlying data architecture can be instantly migrated to any urban agency globally, mapping entirely new districts without altering the algorithm.
                                </li>
                                <li>
                                    <strong>Open Source Reusability:</strong> All dashboard analytics code, React-Leaflet map implementations, and AI risk heuristics will be documented in a public repo to assist upcoming 3MTT cohorts.
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>

                <div className="flex justify-center pt-8">
                    <a href="https://github.com/bethelclement/wastewise-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-md font-medium transition-colors h-12 px-10 bg-emerald-900 text-white hover:bg-emerald-800 shadow-xl">
                        <BookOpen className="h-5 w-5 mr-3" />
                        Explore the Open Source Codebase
                    </a>
                </div>
            </div>
        </div>
    )
}
