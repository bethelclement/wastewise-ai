"use client"
import { MapContainer, TileLayer, CircleMarker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { AreaStat } from '@prisma/client'

const ABUJA_CENTER = [9.0579, 7.4951] as [number, number]

// Hardcoded coordinates to simulate live geospatial zones in Abuja
const DISTRICT_COORDS: Record<string, [number, number]> = {
    'Lugbe FHA': [8.9833, 7.3667],
    'Jabi Motor Park': [9.0667, 7.4167],
    'Wuse Zone 4': [9.0667, 7.4667],
    'Kubwa': [9.1500, 7.3167],
    'Maitama': [9.0833, 7.4833],
    'Gwarinpa Estate': [9.1000, 7.3980],
    'Central Business District': [9.0579, 7.4951]
}

export default function LiveMap({ areaStats }: { areaStats: AreaStat[] }) {
    // We suppress the map rendering completely on the server-side via Next.js dynamic import.
    return (
        <MapContainer center={ABUJA_CENTER} zoom={11} scrollWheelZoom={false} className="w-full h-full z-0 absolute inset-0 text-left">
            {/* Dark Matter theme for a military/cyber style radar logic */}
            <TileLayer
                attribution='&copy; <a href="https://carto.com/">CartoDB</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            {areaStats.map((stat) => {
                const coords = DISTRICT_COORDS[stat.area] || ABUJA_CENTER;
                const isHighRisk = stat.riskScore > 75;
                const isModerate = stat.riskScore > 50;

                // Color scaling matching UI design
                const color = isHighRisk ? "#ef4444" : isModerate ? "#f97316" : "#10b981";

                return (
                    <CircleMarker
                        key={stat.id}
                        center={coords}
                        pathOptions={{ color: color, fillColor: color, fillOpacity: 0.5, weight: 3 }}
                        radius={isHighRisk ? 16 : isModerate ? 12 : 8}
                    >
                        <Popup className="custom-leaflet-popup z-50">
                            <div className="p-1.5 min-w-[200px]">
                                <h4 className="font-black text-xl mb-1 tracking-tight text-white uppercase">{stat.area}</h4>
                                <div className="text-xs space-y-1.5 mb-3 border-b border-white/20 pb-2">
                                    <div className="flex justify-between items-center">
                                        <span className="opacity-80 font-mono">NEURAL RISK:</span>
                                        <span className="font-black text-lg">{stat.riskScore.toFixed(0)}<span className="text-[10px] opacity-70">/100</span></span>
                                    </div>
                                    <div className="flex justify-between items-center mt-1">
                                        <span className="opacity-80 font-mono">PRIORITY:</span>
                                        <span className={`font-black tracking-widest uppercase px-2 py-0.5 rounded shadow ${isHighRisk ? 'bg-red-500/20 text-red-400 border border-red-500/30' : isModerate ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'}`}>
                                            {stat.riskLevel}
                                        </span>
                                    </div>
                                </div>
                                <p className="text-xs font-medium leading-snug text-emerald-100">
                                    {stat.insight}
                                </p>
                            </div>
                        </Popup>
                    </CircleMarker>
                )
            })}
        </MapContainer>
    )
}
