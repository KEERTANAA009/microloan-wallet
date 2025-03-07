"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/components/ui/use-toast"
import { Badge } from "@/components/ui/badge"

export function BorrowForm() {
  const { toast } = useToast()
  const [loanAmount, setLoanAmount] = useState(0.05)
  const [loanTerm, setLoanTerm] = useState(30)
  const [collateralType, setCollateralType] = useState("stablecoin")
  const [collateralAsset, setCollateralAsset] = useState("usdc")
  const [collateralAmount, setCollateralAmount] = useState("")

  // In a real app, these would be calculated based on the user's credit score and market conditions
  const interestRate = 8.5
  const collateralRatio = 150 // 150% collateral required
  const minCollateralAmount = (loanAmount * collateralRatio) / 100

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate collateral amount
    if (Number.parseFloat(collateralAmount) < minCollateralAmount) {
      toast({
        title: "Insufficient collateral",
        description: `You need at least ${minCollateralAmount.toFixed(2)} ETH worth of collateral.`,
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Loan application submitted",
      description: "Your loan application is being processed. You'll be notified once it's approved.",
    })
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Apply for a Loan</CardTitle>
        <CardDescription>Get instant funding with competitive rates based on your credit score</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            <div className="space-y-2">
              <Label>Loan Amount (ETH)</Label>
              <div className="flex items-center space-x-4">
                <Slider
                  value={[loanAmount]}
                  min={0.05}
                  max={5}
                  step={0.05}
                  onValueChange={(value) => setLoanAmount(value[0])}
                  className="flex-1"
                />
                <Input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Number(e.target.value))}
                  className="w-24"
                />
              </div>
              <p className="text-xs text-muted-foreground">Min: 0.05 ETH - Max: 5 ETH</p>
            </div>

            <div className="space-y-2">
              <Label>Loan Term (Days)</Label>
              <Select defaultValue="30" onValueChange={(value) => setLoanTerm(Number(value))}>
                <SelectTrigger>
                  <SelectValue placeholder="Select loan term" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                  <SelectItem value="60">60 days</SelectItem>
                  <SelectItem value="90">90 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label>Collateral</Label>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Stablecoin Collateral (Required)</Label>
                    <span className="text-xs text-muted-foreground">Min: {minCollateralAmount.toFixed(4)} ETH</span>
                  </div>
                  <div className="space-y-2">
                    <Label>Select Asset</Label>
                    <Select defaultValue="usdc" onValueChange={setCollateralAsset}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select asset" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="usdc">USDC</SelectItem>
                        <SelectItem value="usdt">USDT</SelectItem>
                        <SelectItem value="dai">DAI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="collateral-amount">Collateral Amount (in ETH value)</Label>
                    <Input
                      id="collateral-amount"
                      placeholder="Enter amount"
                      value={collateralAmount}
                      onChange={(e) => setCollateralAmount(e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Additional NFT Collateral (Optional)</Label>
                    <Badge variant="outline">Optional</Badge>
                  </div>
                  <div className="rounded-lg border border-dashed p-6 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      Add NFTs as additional collateral to potentially get better rates
                    </p>
                    <Button variant="outline" size="sm">
                      Connect NFT
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-muted p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Interest Rate (APR)</span>
                <span className="font-medium">{interestRate}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Collateral Ratio</span>
                <span className="font-medium">{collateralRatio}%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Repayment Amount</span>
                <span className="font-medium">
                  {(loanAmount * (1 + (interestRate / 100) * (loanTerm / 365))).toFixed(4)} ETH
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Due Date</span>
                <span className="font-medium">
                  {new Date(Date.now() + loanTerm * 24 * 60 * 60 * 1000).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={handleSubmit}>
          Apply for Loan
        </Button>
      </CardFooter>
    </Card>
  )
}

