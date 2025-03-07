import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { InfoIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function LoanRates() {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Current Rates</CardTitle>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <InfoIcon className="h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    Rates are determined by your credit score, market conditions, and collateral type.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <CardDescription>Interest rates for different assets and credit scores in INR</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left font-medium p-2">Asset</th>
                    <th className="text-center font-medium p-2">
                      <div className="flex items-center justify-center gap-1">
                        <span>Poor</span>
                        <Badge variant="outline" className="ml-1">
                          300-579
                        </Badge>
                      </div>
                    </th>
                    <th className="text-center font-medium p-2">
                      <div className="flex items-center justify-center gap-1">
                        <span>Fair</span>
                        <Badge variant="outline" className="ml-1">
                          580-669
                        </Badge>
                      </div>
                    </th>
                    <th className="text-center font-medium p-2">
                      <div className="flex items-center justify-center gap-1">
                        <span>Good</span>
                        <Badge variant="outline" className="ml-1">
                          670-850
                        </Badge>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-2 font-medium">USDC</td>
                    <td className="text-center p-2">12.5%</td>
                    <td className="text-center p-2">8.5%</td>
                    <td className="text-center p-2">5.2%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 font-medium">ETH</td>
                    <td className="text-center p-2">14.2%</td>
                    <td className="text-center p-2">9.8%</td>
                    <td className="text-center p-2">6.5%</td>
                  </tr>
                  <tr>
                    <td className="p-2 font-medium">BTC</td>
                    <td className="text-center p-2">15.0%</td>
                    <td className="text-center p-2">10.2%</td>
                    <td className="text-center p-2">7.0%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>How It Works</CardTitle>
          <CardDescription>Understanding the loan process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                1
              </div>
              <div>
                <h4 className="font-medium">Apply for a loan</h4>
                <p className="text-sm text-muted-foreground">
                  Select your desired loan amount, term, and provide collateral.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                2
              </div>
              <div>
                <h4 className="font-medium">Credit assessment</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your on-chain history to determine your credit score.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                3
              </div>
              <div>
                <h4 className="font-medium">Receive funds</h4>
                <p className="text-sm text-muted-foreground">
                  Once approved, funds are transferred to your wallet instantly.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                4
              </div>
              <div>
                <h4 className="font-medium">Repay loan</h4>
                <p className="text-sm text-muted-foreground">
                  Repay your loan by the due date to receive your collateral back and improve your credit score.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

