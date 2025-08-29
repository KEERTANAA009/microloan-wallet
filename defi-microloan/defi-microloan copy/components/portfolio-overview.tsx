"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, TrendingUp, TrendingDown } from "lucide-react"

export function PortfolioOverview() {
  const [timeframe, setTimeframe] = useState("1m")

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Portfolio Overview</CardTitle>
            <CardDescription>Summary of your DeFi portfolio performance</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button variant={timeframe === "1w" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("1w")}>
              1W
            </Button>
            <Button variant={timeframe === "1m" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("1m")}>
              1M
            </Button>
            <Button variant={timeframe === "3m" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("3m")}>
              3M
            </Button>
            <Button variant={timeframe === "1y" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("1y")}>
              1Y
            </Button>
            <Button variant={timeframe === "all" ? "default" : "outline"} size="sm" onClick={() => setTimeframe("all")}>
              All
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="overview">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="lending">Lending</TabsTrigger>
            <TabsTrigger value="borrowing">Borrowing</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Total Portfolio Value</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">₹1,034,567</p>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs">+8.2%</span>
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Net Position</p>
                <div className="flex items-center gap-2">
                  <p className="text-2xl font-bold">₹741,067</p>
                  <div className="flex items-center text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-xs">+5.7%</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[300px] w-full rounded-lg bg-muted mt-4 relative">
              {/* This would be a chart in a real app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Portfolio Performance Chart</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <ArrowUpRight className="h-5 w-5 text-green-600" />
                  <p className="font-medium">Total Supplied</p>
                </div>
                <p className="text-2xl font-bold mt-2">₹420,000</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <TrendingUp className="h-3 w-3 text-green-600" />
                  <span>+₹35,000 (9.1%) from last month</span>
                </div>
              </div>
              <div className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <ArrowDownRight className="h-5 w-5 text-orange-600" />
                  <p className="font-medium">Total Borrowed</p>
                </div>
                <p className="text-2xl font-bold mt-2">₹293,500</p>
                <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                  <TrendingDown className="h-3 w-3 text-red-600" />
                  <span>-₹42,000 (12.5%) from last month</span>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="lending" className="space-y-4">
            <div className="h-[300px] w-full rounded-lg bg-muted mt-4 relative">
              {/* This would be a chart in a real app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Lending Performance Chart</p>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">USDC Lending</p>
                    <p className="text-sm text-muted-foreground">5,000 USDC @ 8.2% APY</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹420,000</p>
                    <p className="text-sm text-green-600">+₹2,867 this month</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">ETH Lending</p>
                    <p className="text-sm text-muted-foreground">2.5 ETH @ 5.8% APY</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹437,500</p>
                    <p className="text-sm text-green-600">+₹2,118 this month</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="borrowing" className="space-y-4">
            <div className="h-[300px] w-full rounded-lg bg-muted mt-4 relative">
              {/* This would be a chart in a real app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-muted-foreground">Borrowing History Chart</p>
              </div>
            </div>

            <div className="space-y-4 mt-4">
              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">ETH Loan</p>
                    <p className="text-sm text-muted-foreground">1.2 ETH @ 5.2% APR</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹209,500</p>
                    <p className="text-sm text-orange-600">Due: May 15, 2025</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Collateral: 3,750 USDC (₹315,000)</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm">Health Factor</p>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 w-[75%]"></div>
                    </div>
                    <p className="text-sm font-medium">1.5</p>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">USDC Loan</p>
                    <p className="text-sm text-muted-foreground">1,000 USDC @ 8.5% APR</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">₹84,000</p>
                    <p className="text-sm text-orange-600">Due: June 10, 2025</p>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Collateral: 0.75 ETH (₹131,250)</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm">Health Factor</p>
                    <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                      <div className="h-full bg-green-600 w-[85%]"></div>
                    </div>
                    <p className="text-sm font-medium">1.56</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

