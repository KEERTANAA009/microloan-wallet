"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, TrendingUp, Wallet, ArrowRight } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"

export function RecommendedActions() {
  const { toast } = useToast()
  const [openStakingDialog, setOpenStakingDialog] = useState(false)
  const [stakingAmount, setStakingAmount] = useState("")

  const handleStakingConfirm = () => {
    toast({
      title: "Auto-staking enabled",
      description: `You've successfully enabled auto-staking for ${stakingAmount} USDC`,
    })
    setOpenStakingDialog(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recommended Actions</CardTitle>
        <CardDescription>Optimize your DeFi portfolio with these suggestions</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-yellow-100 p-1.5 dark:bg-yellow-900/20">
                  <AlertCircle className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
                </div>
                <CardTitle className="text-base">Loan Payment Due</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground mb-4">Your ETH loan payment of 0.12 ETH is due in 5 days.</p>
              <Button size="sm" className="w-full">
                Make Payment
              </Button>
            </CardContent>
          </Card>

          <Dialog open={openStakingDialog} onOpenChange={setOpenStakingDialog}>
            <Card>
              <CardHeader className="p-4">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-green-100 p-1.5 dark:bg-green-900/20">
                    <TrendingUp className="h-5 w-5 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle className="text-base">Idle Assets Detected</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-muted-foreground mb-4">
                  You have 5,000 USDC (2.4 ETH) sitting idle. Enable auto-staking to earn 8.2% APY.
                </p>
                <DialogTrigger asChild>
                  <Button size="sm" className="w-full">
                    Enable Auto-staking
                  </Button>
                </DialogTrigger>
              </CardContent>
            </Card>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Enable Auto-staking</DialogTitle>
                <DialogDescription>
                  Automatically stake your idle USDC to earn passive income. You can withdraw your funds at any time.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="staking-amount">Amount to stake (USDC)</Label>
                  <Input
                    id="staking-amount"
                    placeholder="Enter amount"
                    value={stakingAmount}
                    onChange={(e) => setStakingAmount(e.target.value)}
                  />
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <div className="flex items-center justify-between text-sm">
                    <span>Estimated APY</span>
                    <span className="font-medium text-green-600 dark:text-green-400">8.2%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-2">
                    <span>Estimated monthly earnings</span>
                    <span className="font-medium">
                      {stakingAmount ? `${((Number(stakingAmount) * 0.082) / 12 / 2083).toFixed(6)} ETH` : "0 ETH"}
                    </span>
                  </div>
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setOpenStakingDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleStakingConfirm}>Confirm</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Card>
            <CardHeader className="p-4">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-1.5 dark:bg-blue-900/20">
                  <Wallet className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-base">Improve Credit Score</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="p-4 pt-0">
              <p className="text-sm text-muted-foreground mb-4">
                Take a small loan and repay it on time to boost your credit score.
              </p>
              <Button size="sm" variant="outline" className="w-full">
                Learn More
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button variant="ghost" size="sm" className="flex items-center gap-1">
            View All Recommendations
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

