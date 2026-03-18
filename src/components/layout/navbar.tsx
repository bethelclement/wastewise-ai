import Link from 'next/link'
import Image from 'next/image'

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link href="/" className="flex items-center space-x-3 text-emerald-700 group">
                    <Image src="/wastewise-logo.png" alt="WasteWise AI Brand Logo" width={240} height={80} className="object-contain" priority />
                </Link>
                <nav className="flex items-center gap-5 md:space-x-6 text-sm font-medium overflow-x-auto no-scrollbar whitespace-nowrap px-2 pb-1 md:pb-0">
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
