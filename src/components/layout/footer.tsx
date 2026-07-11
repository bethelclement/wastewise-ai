import Link from 'next/link'
import { Mail, Recycle } from 'lucide-react'

export function Footer() {
  return (
    <footer className="w-full bg-[#021b15] text-emerald-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.2fr_.8fr] lg:px-10">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-300 text-emerald-950">
              <Recycle className="h-5 w-5" />
            </span>
            <span className="text-xl font-black tracking-[-0.03em]">WasteWiser AI</span>
          </Link>
          <p className="mt-5 max-w-xl leading-7 text-emerald-50/65">
            Predictive waste intelligence for citizen reporting, risk scoring and smarter dispatch decisions in African cities.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 md:justify-self-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200/50">Platform</p>
            <div className="mt-4 flex flex-col gap-3 text-sm text-emerald-50/70">
              <Link href="/report" className="transition hover:text-lime-200">Report waste</Link>
              <Link href="/dashboard" className="transition hover:text-lime-200">Dashboard</Link>
              <Link href="/insights" className="transition hover:text-lime-200">AI insights</Link>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-200/50">Contact</p>
            <a href="mailto:clementsbethel@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-emerald-50/70 transition hover:text-lime-200">
              <Mail className="h-4 w-4" />
              clementsbethel@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-emerald-50/45 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
          <p>© {new Date().getFullYear()} WasteWiser AI. Built in Abuja, Nigeria.</p>
          <p>A predictive civic-technology initiative by Bethel Chinedu Clement.</p>
        </div>
      </div>
    </footer>
  )
}
