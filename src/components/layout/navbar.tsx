import Link from 'next/link'
import { Recycle, Sparkles } from 'lucide-react'

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 text-emerald-700">
                    <div className="relative flex items-center justify-center">
                        <Recycle className="h-6 w-6" />
                        <Sparkles className="h-3 w-3 absolute -top-1.5 -right-1.5 text-lime-600" />
                    </div>
                    <span className="font-bold text-xl tracking-tight text-emerald-950 dark:text-emerald-50">
                        WasteWise
                        <span className="ml-1.5 inline-flex items-center bg-lime-100 text-lime-700 dark:bg-lime-900/30 dark:text-lime-400 text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-sm border border-lime-200 dark:border-lime-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-lime-500 mr-1 animate-pulse"></span>
                            AI
                        </span>
                    </span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link href="/report" className="transition-colors hover:text-emerald-600">Report Waste</Link>
                    <Link href="/dashboard" className="transition-colors hover:text-emerald-600">Dashboard</Link>
                    <Link href="/insights" className="transition-colors hover:text-emerald-600">AI Insights</Link>
                    <Link href="/data" className="transition-colors hover:text-emerald-600">Demo Data</Link>
                    <Link href="/about" className="transition-colors hover:text-emerald-600">About</Link>
                </nav>
            </div>
        </header>
    )
}
