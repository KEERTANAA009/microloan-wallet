"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { InfoIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export function CreditScore() {
  // Mock credit score (in a real app, this would come from Spectral Finance API)
  const creditScore = 720
  const maxScore = 850
  const percentage = (creditScore / maxScore) * 100

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Credit Score</CardTitle>
            <CardDescription>Powered by Spectral Finance</CardDescription>
          </div>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon">
                  <InfoIcon className="h-4 w-4" />
                  <span className="sr-only">Credit Score Info</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">
                  Your credit score is calculated based on your on-chain transaction history, loan repayment behavior,
                  and other DeFi activities.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Score</span>
            <span className="text-sm font-medium">
              {creditScore} / {maxScore}
            </span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>

        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="rounded-lg bg-red-100 dark:bg-red-900/20 p-2">
            <p className="text-xs font-medium text-red-800 dark:text-red-300">Poor</p>
            <p className="text-xs text-muted-foreground">300-579</p>
          </div>
          <div className="rounded-lg bg-yellow-100 dark:bg-yellow-900/20 p-2">
            <p className="text-xs font-medium text-yellow-800 dark:text-yellow-300">Fair</p>
            <p className="text-xs text-muted-foreground">580-669</p>
          </div>
          <div className="rounded-lg bg-green-100 dark:bg-green-900/20 p-2">
            <p className="text-xs font-medium text-green-800 dark:text-green-300">Good</p>
            <p className="text-xs text-muted-foreground">670-850</p>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="text-sm font-medium">Factors affecting your score:</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Consistent loan repayments</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Long-term wallet activity</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-yellow-500"></span>
              <span>Limited collateral diversity</span>
            </li>
          </ul>
        </div>

        <Button variant="outline" className="w-full">
          View Detailed Report
        </Button>
      </CardContent>
    </Card>
  )
}

