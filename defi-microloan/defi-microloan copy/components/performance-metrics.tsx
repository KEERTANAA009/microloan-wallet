import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function PerformanceMetrics() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
        <CardDescription>Key indicators of your portfolio performance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Total Return</p>
            <div className="flex items-center gap-1">
              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                +12.4%
              </Badge>
            </div>
          </div>
          <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
            <div className="h-full bg-green-600 w-[62%]"></div>
          </div>
          <p className="text-xs text-muted-foreground">Since account creation (6 months)</p>
        </div>

        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Lending APY</p>
            <p className="font-medium text-green-600">8.2%</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Borrowing APR</p>
            <p className="font-medium text-orange-600">5.8%</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Net APY</p>
            <p className="font-medium text-green-600">6.7%</p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm font-medium">Portfolio Health</p>
            <p className="font-medium text-green-600">Excellent</p>
          </div>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm font-medium mb-2">Risk Assessment</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-xs">Liquidation Risk</p>
              <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-300">
                Low
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">Market Volatility Exposure</p>
              <Badge
                variant="outline"
                className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-300"
              >
                Medium
              </Badge>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs">Collateralization Ratio</p>
              <p className="text-xs font-medium">156%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

