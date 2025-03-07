"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AssetAllocation() {
  // In a real app, this data would come from the user's portfolio
  const assets = [
    { name: "ETH", value: 437500, percentage: 42.3, color: "bg-blue-500" },
    { name: "BTC", value: 252000, percentage: 24.4, color: "bg-orange-500" },
    { name: "USDC", value: 210000, percentage: 20.3, color: "bg-green-500" },
    { name: "USDT", value: 84000, percentage: 8.1, color: "bg-red-500" },
    { name: "Other", value: 51067, percentage: 4.9, color: "bg-purple-500" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Allocation</CardTitle>
        <CardDescription>Distribution of your crypto assets</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="h-[200px] w-[200px] mx-auto relative">
          {/* This would be a pie chart in a real app */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full rounded-full overflow-hidden flex flex-col">
              {assets.map((asset, index) => (
                <div key={asset.name} className={`${asset.color}`} style={{ height: `${asset.percentage}%` }}></div>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-sm font-medium">Total</p>
              <p className="text-xl font-bold">₹1,034,567</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          {assets.map((asset) => (
            <div key={asset.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${asset.color}`}></div>
                <p className="text-sm font-medium">{asset.name}</p>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">₹{asset.value.toLocaleString()}</p>
                <p className="text-xs text-muted-foreground">{asset.percentage}%</p>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="w-full" size="sm">
          <span>Rebalance Portfolio</span>
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}

