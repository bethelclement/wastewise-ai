import Link from 'next/link'
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Building2,
  CheckCircle2,
  Database,
  Gauge,
  MapPinned,
  Route,
  ShieldCheck,
  Smartphone,
  Truck,
  Users,
  Zap,
} from 'lucide-react'

const workflow = [
  {
    number: '01',
    icon: Smartphone,
    title: 'Report',
    text: 'A resident or field officer logs an overflow, missed pickup or illegal dump from any phone. No app download is required.',
  },
  {
    number: '02',
    icon: BrainCircuit,
    title: 'Predict',
    text: 'The intelligence layer evaluates urgency, waste type, elapsed time and district-level patterns to generate a risk score.',
  },
  {
    number: '03',
    icon: Route,
    title: 'Prioritise',
    text: 'Operations teams receive a ranked dispatch queue showing where limited trucks and crews should move first.',
  },
]

const capabilities = [
  {
    icon: Gauge,
    title: 'Risk scoring',
    text: 'Every report becomes a transparent 0–100 priority score rather than another unstructured complaint.',
  },
  {
    icon: MapPinned,
    title: 'District intelligence',
    text: 'Recurring pressure points become visible across Abuja districts, estates and collection zones.',
  },
  {
    icon: Truck,
    title: 'Dispatch queue',
    text: 'Supervisors see critical incidents first and spend less time sorting calls, messages and paper records.',
  },
  {
    icon: BarChart3,
    title: 'Operations dashboard',
    text: 'Live indicators summarise report volume, high-risk zones, response status and emerging service gaps.',
  },
  {
    icon: Database,
    title: 'Structured evidence',
    text: 'Each incident becomes reusable data for route planning, budgeting and service accountability.',
  },
  {
    icon: ShieldCheck,
    title: 'Human oversight',
    text: 'The score supports decisions. Supervisors retain control and can inspect the factors behind each recommendation.',
  },
]

const audiences = [
  {
    icon: Users,
    title: 'Residents',
    text: 'Report a waste issue in under a minute and place local evidence directly into the response workflow.',
  },
  {
    icon: Truck,
    title: 'Collection operators',
    text: 'Replace scattered complaints with one ranked queue showing where the next pickup matters most.',
  },
  {
    icon: Building2,
    title: 'City decision-makers',
    text: 'Compare districts, identify recurring service gaps and build a stronger evidence base for sanitation planning.',
  },
]

const scoreRows = [
  { area: 'Wuse 2', issue: 'Organic overflow', score: 92, label: 'Critical' },
  { area: 'Garki Area 11', issue: 'Missed pickup', score: 81, label: 'High' },
  { area: 'Jabi', issue: 'Illegal dumping', score: 64, label: 'Watch' },
]

export default function LandingPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'WasteWiser AI',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://wastewiserai.com',
    description: 'Predictive waste intelligence for citizen reporting, risk scoring and dispatch prioritisation.',
    creator: { '@type': 'Person', name: 'Bethel Chinedu Clement' },
  }

  return (
    <div className="overflow-hidden bg-[#f7fbf8] text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="relative isolate bg-[#03261d] text-white">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_16%,rgba(132,204,22,0.17),transparent_28%),radial-gradient(circle_at_82%_28%,rgba(16,185,129,0.16),transparent_24%),linear-gradient(135deg,#03261d_0%,#04382a_55%,#05271f_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.45)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.45)_1px,transparent_1px)] [background-size:54px_54px]" />

        <div className="mx-auto grid min-h-[740px] max-w-7xl items-center gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_.98fr] lg:px-10 lg:py-28">
          <div className="max-w-3xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-lime-300/25 bg-lime-300/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-lime-200">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-300 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-300" />
              </span>
              Abuja pilot · predictive dispatch intelligence
            </div>

            <h1 className="max-w-4xl text-balance text-5xl font-black leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Know where waste will become a crisis <span className="text-lime-300">before it does.</span>
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-emerald-50/80 sm:text-xl">
              WasteWiser AI turns citizen reports into ranked operational intelligence, helping collection teams identify high-risk zones and dispatch limited resources with greater speed and precision.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/report"
                className="inline-flex h-12 items-center justify-center rounded-xl bg-lime-300 px-6 text-sm font-extrabold text-emerald-950 shadow-[0_18px_45px_rgba(163,230,53,.18)] transition hover:-translate-y-0.5 hover:bg-lime-200 focus:outline-none focus:ring-2 focus:ring-lime-200 focus:ring-offset-2 focus:ring-offset-emerald-950"
              >
                Report a waste issue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link
                href="/dashboard"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-6 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                Open live dashboard
              </Link>
            </div>

            <div className="mt-9 grid max-w-2xl gap-3 text-sm text-emerald-50/75 sm:grid-cols-3">
              {['No app download', '0–100 risk score', 'Built for field use'].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-lime-300" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[620px]">
            <div className="absolute -inset-8 -z-10 rounded-[3rem] bg-lime-300/10 blur-3xl" />
            <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-[#071f19]/90 shadow-[0_40px_90px_rgba(0,0,0,.38)] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 sm:px-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200/70">Dispatch intelligence</p>
                  <p className="mt-1 font-bold">Abuja operations view</p>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-xs font-semibold text-emerald-100">
                  <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_14px_rgba(190,242,100,.95)]" />
                  Live demo
                </div>
              </div>

              <div className="grid grid-cols-3 gap-px bg-white/10">
                {[
                  ['142', 'Reports today'],
                  ['23', 'High-risk zones'],
                  ['87%', 'Coverage'],
                ].map(([value, label]) => (
                  <div key={label} className="bg-[#08281f] px-3 py-5 text-center sm:px-5">
                    <p className="text-2xl font-black tracking-tight sm:text-3xl">{value}</p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.13em] text-emerald-100/55 sm:text-xs">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 p-4 sm:p-5 lg:grid-cols-[1.08fr_.92fr]">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold">Priority queue</p>
                      <p className="mt-0.5 text-xs text-emerald-100/50">Ranked by current risk</p>
                    </div>
                    <Zap className="h-4 w-4 text-lime-300" />
                  </div>
                  <div className="space-y-4">
                    {scoreRows.map((row) => (
                      <div key={row.area}>
                        <div className="mb-2 flex items-start justify-between gap-3">
                          <div>
                            <p className="text-sm font-semibold">{row.area}</p>
                            <p className="text-[11px] text-emerald-100/50">{row.issue}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-sm font-black text-lime-200">{row.score}</p>
                            <p className="text-[10px] uppercase tracking-wider text-emerald-100/50">{row.label}</p>
                          </div>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-gradient-to-r from-emerald-400 to-lime-300" style={{ width: `${row.score}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative min-h-[250px] overflow-hidden rounded-2xl border border-white/10 bg-[#0b3428] p-4">
                  <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:24px_24px]" />
                  <div className="absolute left-[28%] top-[22%] h-3 w-3 rounded-full bg-lime-300 shadow-[0_0_0_8px_rgba(190,242,100,.10),0_0_24px_rgba(190,242,100,.8)]" />
                  <div className="absolute right-[22%] top-[42%] h-3 w-3 rounded-full bg-orange-300 shadow-[0_0_0_8px_rgba(253,186,116,.10),0_0_22px_rgba(253,186,116,.7)]" />
                  <div className="absolute bottom-[24%] left-[44%] h-3 w-3 rounded-full bg-red-400 shadow-[0_0_0_9px_rgba(248,113,113,.10),0_0_24px_rgba(248,113,113,.75)]" />
                  <svg className="absolute inset-0 h-full w-full opacity-55" viewBox="0 0 240 250" fill="none" aria-hidden="true">
                    <path d="M67 56C95 62 107 88 139 102C166 114 187 137 149 190" stroke="rgb(190 242 100)" strokeWidth="3" strokeDasharray="5 7" />
                  </svg>
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-bold">Route preview</p>
                        <p className="mt-0.5 text-xs text-emerald-100/50">3 priority stops</p>
                      </div>
                      <MapPinned className="h-4 w-4 text-lime-300" />
                    </div>
                    <div className="rounded-xl border border-white/10 bg-black/20 p-3 text-xs text-emerald-50/70 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <span>Estimated route</span>
                        <strong className="text-white">18.4 km</strong>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <span>Priority incidents</span>
                        <strong className="text-lime-200">3</strong>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-emerald-900/10 bg-white">
        <div className="mx-auto grid max-w-7xl gap-4 px-5 py-7 text-sm text-slate-600 sm:grid-cols-3 sm:px-8 lg:px-10">
          <p className="flex items-center justify-center gap-2 sm:justify-start"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Mobile-first citizen reporting</p>
          <p className="flex items-center justify-center gap-2"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Explainable priority scoring</p>
          <p className="flex items-center justify-center gap-2 sm:justify-end"><CheckCircle2 className="h-4 w-4 text-emerald-600" /> Built in Nigeria for African cities</p>
        </div>
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">One operational loop</p>
          <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-emerald-950 sm:text-5xl">From street-level evidence to a dispatch decision.</h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">WasteWiser AI organises reports, scores urgency and gives supervisors a clear order of action.</p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {workflow.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="group relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-white p-7 shadow-[0_18px_50px_rgba(5,46,35,.06)]">
                <span className="absolute right-5 top-4 text-6xl font-black text-emerald-950/[0.045]">{item.number}</span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-950 text-lime-300 transition group-hover:-translate-y-1">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-2xl font-black text-emerald-950">{item.title}</h3>
                <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="platform" className="bg-[#eaf5ef] py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <div className="grid gap-10 lg:grid-cols-[.84fr_1.16fr] lg:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">The platform</p>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.035em] text-emerald-950 sm:text-5xl">A decision layer for cleaner, faster urban services.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:justify-self-end">
              The current Abuja MVP combines public reporting, machine-assisted risk scoring, district mapping and a supervisor dashboard. It is designed for phased testing with collection operators and environmental agencies.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => {
              const Icon = item.icon
              return (
                <article key={item.title} className="rounded-3xl border border-emerald-900/10 bg-white/90 p-7 shadow-[0_16px_40px_rgba(5,46,35,.045)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-200 text-emerald-950">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 text-xl font-black text-emerald-950">{item.title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="users" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10 lg:py-28">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">Designed around the people doing the work</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black tracking-[-0.035em] text-emerald-950 sm:text-5xl">One system. Three clear users.</h2>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {audiences.map((item) => {
            const Icon = item.icon
            return (
              <article key={item.title} className="rounded-3xl bg-emerald-950 p-8 text-white shadow-[0_24px_60px_rgba(4,47,36,.14)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-lime-300">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-emerald-50/70">{item.text}</p>
              </article>
            )
          })}
        </div>
      </section>

      <section id="pilot" className="px-5 pb-24 sm:px-8 lg:px-10 lg:pb-28">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-lime-300 px-6 py-14 text-emerald-950 sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12 lg:px-14 lg:py-16">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-emerald-900/65">Abuja pilot pathway</p>
            <h2 className="mt-3 max-w-4xl text-4xl font-black tracking-[-0.04em] sm:text-5xl">Test the reporting flow. Inspect the dashboard. Help shape the pilot.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-emerald-950/70">
              We are preparing WasteWiser AI for field validation with residents, waste operators, estates, businesses and public agencies.
            </p>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:flex-col">
            <Link href="/report" className="inline-flex h-12 items-center justify-center rounded-xl bg-emerald-950 px-6 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-emerald-900">
              Submit a demo report
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link href="/dashboard" className="inline-flex h-12 items-center justify-center rounded-xl border border-emerald-950/20 bg-white/40 px-6 text-sm font-extrabold transition hover:bg-white/60">
              View dashboard
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
