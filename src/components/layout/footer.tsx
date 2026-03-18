import Link from 'next/link'
import Image from 'next/image'

export function Footer() {
    return (
        <footer className="w-full border-t border-emerald-900 bg-emerald-950 text-emerald-50">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-6 gap-6 px-4">
                <Link href="/" className="flex items-center opacity-90 hover:opacity-100 transition-opacity">
                    <Image src="/wastewise-logo.png" alt="WasteWise AI Logo" width={140} height={40} className="object-contain" />
                </Link>
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
