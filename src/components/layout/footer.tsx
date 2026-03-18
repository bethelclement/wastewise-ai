import Link from 'next/link'
import { Leaf } from 'lucide-react'

export function Footer() {
    return (
        <footer className="w-full border-t bg-emerald-950 text-emerald-50">
            <div className="container flex flex-col md:flex-row items-center justify-between py-6 gap-4">
                <div className="flex items-center space-x-2">
                    <Leaf className="h-5 w-5 text-emerald-400" />
                    <span className="font-semibold text-lg">WasteWise AI</span>
                </div>
                <p className="text-sm text-emerald-200">
                    A NextGen Knowledge Showcase MVP. Predictive civic tech for cleaner communities.
                </p>
                <div className="flex space-x-4 text-sm">
                    <Link href="https://3mtt.nitda.gov.ng" target="_blank" className="hover:text-emerald-400 transition-colors">
                        Supported by 3MTT / NITDA
                    </Link>
                </div>
            </div>
        </footer>
    )
}
