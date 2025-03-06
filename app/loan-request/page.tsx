"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { ArrowLeft, HelpCircle, Info } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function LoanRequestPage() {
  const router = useRouter()
  const [amount, setAmount] = useState(500)
  const [term, setTerm] = useState(3)
  const [purpose, setPurpose] = useState("")
  const [description, setDescription] = useState("")
  const [collateral, setCollateral] = useState("")

  // Calculate estimated APR based on amount and term
  const estimatedApr = 8 + (amount > 1000 ? -1 : 0) + (term > 6 ? -1 : 0)

  // Calculate monthly payment
  const monthlyPayment = (amount * (1 + (estimatedApr / 100) * (term / 12))) / term

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, we would submit the loan request to the backend
    router.push("/dashboard")
  }

  return (
    <div className="container max-w-2xl py-8">
      <Button variant="ghost" className="mb-4" onClick={() => router.push("/dashboard")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Request a Microloan</CardTitle>
          <CardDescription>
            Fill out the details below to request a loan. All loans are processed through our secure blockchain system.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="amount">Loan Amount</Label>
                <span className="text-2xl font-bold">${amount}</span>
              </div>
              <Slider
                id="amount"
                min={100}
                max={2000}
                step={50}
                value={[amount]}
                onValueChange={(value) => setAmount(value[0])}
                className="py-4"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>$100</span>
                <span>$2,000</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="term">Loan Term (months)</Label>
                <span className="font-medium">{term} months</span>
              </div>
              <Select value={term.toString()} onValueChange={(value) => setTerm(Number.parseInt(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 month</SelectItem>
                  <SelectItem value="3">3 months</SelectItem>
                  <SelectItem value="6">6 months</SelectItem>
                  <SelectItem value="12">12 months</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="purpose">Loan Purpose</Label>
              <Select value={purpose} onValueChange={setPurpose}>
                <SelectTrigger>
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="education">Education</SelectItem>
                  <SelectItem value="personal">Personal</SelectItem>
                  <SelectItem value="emergency">Emergency</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                placeholder="Briefly describe how you plan to use the loan"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="collateral">Collateral (Optional)</Label>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full p-0">
                        <HelpCircle className="h-4 w-4" />
                        <span className="sr-only">Collateral Info</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="max-w-xs">
                        Adding collateral can lower your interest rate. You can use NFTs or other crypto assets.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <Select value={collateral} onValueChange={setCollateral}>
                <SelectTrigger>
                  <SelectValue placeholder="Select collateral (optional)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">No Collateral</SelectItem>
                  <SelectItem value="nft">NFT</SelectItem>
                  <SelectItem value="crypto">Crypto Assets</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg bg-muted p-4">
              <div className="text-sm font-medium">Loan Summary</div>
              <div className="mt-2 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span>${amount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Term:</span>
                  <span>{term} months</span>
                </div>
                <div className="flex justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-muted-foreground">Estimated APR:</span>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-5 w-5 rounded-full p-0">
                            <Info className="h-3 w-3" />
                            <span className="sr-only">APR Info</span>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="max-w-xs">
                            The final APR may vary based on risk assessment and market conditions.
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <span>{estimatedApr}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monthly Payment:</span>
                  <span>${monthlyPayment.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Repayment:</span>
                  <span>${(monthlyPayment * term).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={() => router.push("/dashboard")}>
            Cancel
          </Button>
          <Button type="submit" onClick={handleSubmit}>
            Submit Loan Request
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

