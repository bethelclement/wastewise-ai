import Link from 'next/link'
import { ArrowRight, Recycle, Sparkles, ShieldAlert, BarChart3, Users, Droplet } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="w-full py-24 md:py-32 lg:py-40 bg-emerald-950 text-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                  Predict waste. Prioritize pickup. Keep communities clean.
                </h1>
                <p className="max-w-[600px] text-emerald-100/80 md:text-xl">
                  WasteWise AI helps households report waste issues and helps collection teams predict high-risk zones before overflow becomes a public health problem.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Link href="/dashboard" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full bg-lime-500 text-emerald-950 hover:bg-lime-400 font-semibold shadow-lg shadow-lime-500/20">
                  Open Dashboard
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/report" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full border border-emerald-500 text-emerald-500 hover:bg-emerald-900/50">
                  Report Waste
                </Link>
              </div>
            </div>
            <div className="mx-auto flex w-full items-center justify-center p-4">
              <div className="relative w-full aspect-square max-w-[400px] rounded-full bg-emerald-900/50 border border-emerald-800 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-x-0 bottom-0 top-1/2 bg-gradient-to-t from-emerald-900/40 to-transparent" />
                <div className="z-10 flex flex-col items-center gap-4 text-center">
                  <div className="p-4 rounded-3xl bg-lime-500 shadow-xl shadow-lime-500/20 relative">
                    <Recycle className="h-16 w-16 text-emerald-950" />
                    <Sparkles className="h-6 w-6 absolute -top-2 -right-2 text-white animate-pulse" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold flex items-center justify-center gap-2">
                      WasteWise
                      <span className="bg-lime-500/20 text-lime-400 border border-lime-500/30 text-[10px] px-2 py-0.5 rounded-sm uppercase tracking-wider flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-lime-400 mr-1 animate-pulse"></span>
                        AI Predicted
                      </span>
                    </h3>
                    <p className="text-sm text-emerald-300">Intelligent Civic Tracker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="w-full py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-950 dark:text-emerald-50">How It Works</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              A rapid 3-step reporting and resolution flow powered by predictive models.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Report</h3>
              <p className="text-muted-foreground">Households log waste levels, missed pickups, or illegal dumping via mobile.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Predict</h3>
              <p className="text-muted-foreground">AI scores the risk level based on area history, urgency, and waste type severity.</p>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-lime-100 text-lime-700">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-emerald-900 dark:text-emerald-100">Prioritize</h3>
              <p className="text-muted-foreground">Agencies get a smart dashboard mapping high-risk zones for immediate action.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="w-full py-20 bg-emerald-50 dark:bg-emerald-950/20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-emerald-950 dark:text-emerald-50">Core Capabilities</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-lg">
              Built for impact, structured for scalability.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<ShieldAlert className="h-6 w-6" />}
              title="Overflow Alerts"
              desc="Identify which bins and zones will overflow based on historic data."
            />
            <FeatureCard
              icon={<BarChart3 className="h-6 w-6" />}
              title="Predictive Prioritization"
              desc="Machine learning algorithms rank neighborhood priority from 0-100."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Civic Engagement"
              desc="Easy mobile forms letting residents act as vital data sensors."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-emerald-900 text-emerald-50">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-4 text-white">Ready to explore the data?</h2>
          <p className="max-w-[600px] mx-auto text-emerald-100/90 mb-8">
            Experience the MVP admin dashboard designed for waste management supervisors and agency staff in Abuja.
          </p>
          <Link href="/dashboard" className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-white text-emerald-900 hover:bg-emerald-50 font-bold">
            View Live Demo Dashboard
          </Link>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="flex flex-col p-6 space-y-3 bg-white dark:bg-emerald-900/40 rounded-xl shadow-sm border border-emerald-100 dark:border-emerald-800">
      <div className="p-3 bg-emerald-100 dark:bg-emerald-800 text-emerald-700 dark:text-emerald-300 rounded-lg w-fit">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-emerald-950 dark:text-emerald-50">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </div>
  )
}
