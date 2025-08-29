import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, ShieldCheck, Users } from "lucide-react"

export function LendingStats() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Lending Stats</CardTitle>
          <CardDescription>Platform-wide lending statistics</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-medium">Average APY</h4>
            </div>
            <div className="text-2xl font-bold">8.2%</div>
            <p className="text-xs text-muted-foreground">+0.5% from last month</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-medium">Total Value Locked</h4>
            </div>
            <div className="text-2xl font-bold">6 ETH</div>
            <p className="text-xs text-muted-foreground">+0.576 ETH from last month</p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-medium">Active Lenders</h4>
            </div>
            <div className="text-2xl font-bold">1,280</div>
            <p className="text-xs text-muted-foreground">+120 from last month</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Why Lend?</CardTitle>
          <CardDescription>Benefits of lending on our platform</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <TrendingUp className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">Competitive Returns</h4>
              <p className="text-sm text-muted-foreground">Earn higher APY than traditional savings accounts.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <ShieldCheck className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">Secure Collateral</h4>
              <p className="text-sm text-muted-foreground">All loans are over-collateralized to protect lenders.</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Users className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-medium">Support Borrowers</h4>
              <p className="text-sm text-muted-foreground">Help others access capital while earning passive income.</p>
            </div>
          </div>

          <Button variant="outline" className="w-full mt-4">
            <span>Learn More</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

