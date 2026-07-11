import Link from 'next/link'
import { Recycle } from 'lucide-react'

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-950/10 bg-white/90 backdrop-blur-xl supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link href="/" className="flex min-w-0 items-center gap-3 text-emerald-950">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-950 text-lime-300 shadow-sm">
            <Recycle className="h-5 w-5" />
          </span>
          <span className="truncate text-lg font-black tracking-[-0.03em]">
            WasteWiser <span className="text-emerald-600">AI</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
          <Link href="/#how-it-works" className="transition hover:text-emerald-700">How it works</Link>
          <Link href="/#platform" className="transition hover:text-emerald-700">Platform</Link>
          <Link href="/insights" className="transition hover:text-emerald-700">AI insights</Link>
          <Link href="/about" className="transition hover:text-emerald-700">About</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/dashboard" className="hidden h-10 items-center justify-center rounded-xl px-4 text-sm font-bold text-emerald-900 transition hover:bg-emerald-50 sm:inline-flex">
            Dashboard
          </Link>
          <Link href="/report" className="inline-flex h-10 items-center justify-center rounded-xl bg-emerald-950 px-4 text-sm font-extrabold text-white transition hover:bg-emerald-900">
            Report waste
          </Link>
        </div>
      </div>
    </header>
  )
}
