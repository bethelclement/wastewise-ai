"use client"

import dynamic from 'next/dynamic'
import { Radar } from 'lucide-react'
import { AreaStat } from '@prisma/client'

const LiveMap = dynamic(() => import('./live-map'), {
    ssr: false,
    loading: () => (
        <div className="w-full h-full flex flex-col items-center justify-center bg-black text-lime-500 font-mono tracking-widest text-sm z-0 absolute inset-0">
            <Radar className="w-10 h-10 animate-spin mb-4" />
            <span>INITIALIZING SATELLITE UPLINK...</span>
        </div>
    )
})

export default function LiveMapWrapper({ areaStats }: { areaStats: AreaStat[] }) {
    return <LiveMap areaStats={areaStats} />
}
