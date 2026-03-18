'use client'

import { useState } from 'react'
import { submitReport } from '@/app/actions'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { CheckCircle2, AlertTriangle, Send } from 'lucide-react'
import Link from 'next/link'

export default function ReportPage() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState<any>(null)

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsSubmitting(true)
        const formData = new FormData(e.currentTarget)

        try {
            const res = await submitReport(formData)
            if (res.success) {
                setSubmitted(res)
            } else {
                alert(res.error)
            }
        } catch (err) {
            alert("Submission failed.")
        } finally {
            setIsSubmitting(false)
        }
    }

    if (submitted) {
        return (
            <div className="container mx-auto max-w-lg py-24 px-4 flex flex-col items-center text-center space-y-6">
                <div className="p-4 bg-lime-100 rounded-full">
                    <CheckCircle2 className="w-12 h-12 text-lime-600" />
                </div>
                <h1 className="text-3xl font-bold text-emerald-950">Report Received!</h1>
                <p className="text-muted-foreground">
                    Thank you for keeping Abuja clean. We have logged your submission.
                </p>
                <Card className="w-full text-left bg-emerald-50/50 border-emerald-100">
                    <CardContent className="pt-6">
                        <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-emerald-800">Report ID:</span>
                            <span className="font-mono text-sm">{submitted.reportId.split('-')[0]}</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-emerald-800">Priority Assigned:</span>
                            <span className="text-sm font-bold text-emerald-600 px-2 py-1 bg-white rounded-md">
                                {submitted.priorityLabel}
                            </span>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex gap-4 pt-4">
                    <Button onClick={() => setSubmitted(null)} variant="outline">Report Another</Button>
                    <Link href="/dashboard">
                        <Button className="bg-emerald-600 hover:bg-emerald-700">View Map</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="container mx-auto max-w-2xl py-12 px-4 md:px-0">
            <div className="mb-8 space-y-2">
                <h1 className="text-3xl font-bold text-emerald-950">Report Waste Issue</h1>
                <p className="text-muted-foreground">
                    Your input helps our predictive models prioritize collections across Abuja.
                </p>
            </div>

            <Card className="border-emerald-100 shadow-sm">
                <form onSubmit={onSubmit}>
                    <CardContent className="space-y-6 pt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Full Name</Label>
                                <Input id="fullName" name="fullName" placeholder="Chukwudi Okafor" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phoneNumber">Phone Number (Optional)</Label>
                                <Input id="phoneNumber" name="phoneNumber" placeholder="080..." type="tel" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="area">District / Area</Label>
                                <Select name="area" required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Area" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {['Wuse', 'Garki', 'Jabi', 'Kubwa', 'Lugbe', 'Maitama', 'Nyanya'].map(a => (
                                            <SelectItem key={a} value={a}>{a}</SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="street">Street Name</Label>
                                <Input id="street" name="street" placeholder="e.g. Adetokunbo Ademola Cres" required />
                            </div>
                        </div>

                        <div className="space-y-2 border-t pt-4">
                            <Label htmlFor="wasteType">Nature of Issue</Label>
                            <Select name="wasteType" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="What are you reporting?" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Mixed household waste">Mixed household waste</SelectItem>
                                    <SelectItem value="Organic waste">Organic waste</SelectItem>
                                    <SelectItem value="Plastic waste">Plastic waste</SelectItem>
                                    <SelectItem value="Recyclables">Recyclables</SelectItem>
                                    <SelectItem value="Illegal dumping">Illegal dumping</SelectItem>
                                    <SelectItem value="Missed pickup">Missed pickup</SelectItem>
                                    <SelectItem value="Bin overflow">Bin overflow</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="urgency">Urgency Level</Label>
                            <Select name="urgency" required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select severity" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Low">Low - Normal volume</SelectItem>
                                    <SelectItem value="Medium">Medium - Getting full</SelectItem>
                                    <SelectItem value="High">High - Overflowing</SelectItem>
                                    <SelectItem value="Critical">Critical - Major health hazard</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Additional Notes</Label>
                            <textarea
                                id="notes"
                                name="notes"
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Any specific instructions or landmarks to find the waste?"
                            />
                            <p className="text-xs text-muted-foreground italic flex items-center mt-1">
                                <AlertTriangle className="w-3 h-3 mr-1 inline" />
                                Your report trains our smarter city prediction model (Pidgin input is allowed!)
                            </p>
                        </div>
                    </CardContent>
                    <div className="px-6 py-4 bg-emerald-50/50 border-t flex justify-end">
                        <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto bg-emerald-700 hover:bg-emerald-800 text-white">
                            {isSubmitting ? 'Predicting & Submitting...' : (
                                <>Submit Report <Send className="w-4 h-4 ml-2" /></>
                            )}
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    )
}
