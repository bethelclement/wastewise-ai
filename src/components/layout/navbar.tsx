import Link from 'next/link'
import { Leaf } from 'lucide-react'

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 text-emerald-700">
                    <Leaf className="h-6 w-6" />
                    <span className="font-bold text-xl tracking-tight text-emerald-950 dark:text-emerald-50">WasteWise AI</span>
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
