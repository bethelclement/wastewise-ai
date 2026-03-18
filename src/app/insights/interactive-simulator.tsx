"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Slider } from "@/components/ui/slider"
import { Bot, Gauge } from "lucide-react"

export default function InteractiveSimulator() {
    const [urgency, setUrgency] = useState(50)
    const [decay, setDecay] = useState(30)
    const [density, setDensity] = useState(20)

    // Heuristic ML Equation simulating the KNN approach
    const rawScore = (urgency * 0.3) + (decay * 0.45) + (density * 0.25)
    // Add non-linear boost for critical intersections prioritizing public health
    const boost = (urgency > 80 && decay > 75) ? 15 : 0
    const finalScore = Math.min(100, Math.round(rawScore + boost))

    let severityLabel = "Low"
    let colorClass = "text-emerald-500"
    if (finalScore >= 80) {
        severityLabel = "Critical"
        colorClass = "text-red-500"
    } else if (finalScore >= 50) {
        severityLabel = "Moderate"
        colorClass = "text-orange-500"
    }

    return (
        <Card className="border-2 border-emerald-500 shadow-xl overflow-hidden bg-emerald-950 text-emerald-50 mb-16">
            <CardHeader className="bg-emerald-900 border-b border-emerald-800 p-6 flex flex-col sm:flex-row items-center justify-between">
                <CardTitle className="flex items-center text-white text-xl">
                    <Bot className="mr-3 h-7 w-7 text-lime-400 animate-pulse" />
                    Live ML Simulator: Calculate Zone Risk
                </CardTitle>
            </CardHeader>
            <CardContent className="p-6 md:p-8">
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                    <div className="space-y-8">
                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <label className="text-sm font-bold text-emerald-200 uppercase tracking-widest">Base Urgency Level</label>
                                <span className="font-mono text-lime-400">{urgency}%</span>
                            </div>
                            <Slider value={[urgency]} onValueChange={(val: number | readonly number[]) => setUrgency(typeof val === 'number' ? val : val[0]!)} max={100} step={1} className="py-2" />
                            <p className="text-xs text-emerald-400/70">Subjective citizen alert severity</p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <label className="text-sm font-bold text-emerald-200 uppercase tracking-widest">Hazard Decay Index</label>
                                <span className="font-mono text-lime-400">{decay}%</span>
                            </div>
                            <Slider value={[decay]} onValueChange={(val: number | readonly number[]) => setDecay(typeof val === 'number' ? val : val[0]!)} max={100} step={1} className="py-2" />
                            <p className="text-xs text-emerald-400/70">Organic rot vs benign materials (Time + Type)</p>
                        </div>

                        <div className="space-y-3">
                            <div className="flex justify-between">
                                <label className="text-sm font-bold text-emerald-200 uppercase tracking-widest">Area Report Density</label>
                                <span className="font-mono text-lime-400">{density}%</span>
                            </div>
                            <Slider value={[density]} onValueChange={(val: number | readonly number[]) => setDensity(typeof val === 'number' ? val : val[0]!)} max={100} step={1} className="py-2" />
                            <p className="text-xs text-emerald-400/70">Volume of complaints in the exact geographic cluster</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-8 bg-black/40 rounded-xl border border-emerald-800 shadow-inner h-full">
                        <Gauge className={`w-16 h-16 mb-4 ${colorClass} transition-colors duration-500`} />
                        <span className="text-emerald-400 text-sm font-bold uppercase tracking-widest mb-2">Predicted Risk Score</span>
                        <div className={`text-8xl font-black ${colorClass} transition-all duration-300 font-mono tracking-tighter`}>
                            {finalScore}
                        </div>
                        <div className={`mt-6 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase border ${finalScore >= 80 ? 'bg-red-500/20 border-red-500 text-red-400' : finalScore >= 50 ? 'bg-orange-500/20 border-orange-500 text-orange-400' : 'bg-emerald-500/20 border-emerald-500 text-emerald-400'}`}>
                            {severityLabel} PRIORITY
                        </div>
                        <p className="text-emerald-500/80 text-xs mt-4 text-center max-w-[250px]">
                            AI dynamically triages this score out of 100 to alert dispatch managers instantly.
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
