"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowUpRight, ArrowDownRight, Wallet } from "lucide-react"

export function AccountSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Account Summary</CardTitle>
        <CardDescription>Overview of your lending and borrowing activity</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="assets">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="assets">Assets</TabsTrigger>
            <TabsTrigger value="borrowed">Borrowed</TabsTrigger>
            <TabsTrigger value="supplied">Supplied</TabsTrigger>
          </TabsList>
          <TabsContent value="assets" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Total Balance</p>
                <p className="text-2xl font-bold">5.91 ETH</p>
              </div>
              <Wallet className="h-9 w-9 text-muted-foreground" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-1 rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Available</span>
                </div>
                <span className="text-xl font-bold">3.94 ETH</span>
              </div>
              <div className="flex flex-col space-y-1 rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-primary/20 p-1">
                    <ArrowDownRight className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">Locked</span>
                </div>
                <span className="text-xl font-bold">1.97 ETH</span>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="borrowed" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Total Borrowed</p>
                <p className="text-2xl font-bold">1.68 ETH</p>
              </div>
              <ArrowDownRight className="h-9 w-9 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-bold text-xs">ETH</span>
                  </div>
                  <div>
                    <p className="font-medium">Ethereum</p>
                    <p className="text-xs text-muted-foreground">1.2 ETH</p>
                  </div>
                </div>
                <p className="font-bold">1.2 ETH</p>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-bold text-xs">USDC</span>
                  </div>
                  <div>
                    <p className="font-medium">USD Coin</p>
                    <p className="text-xs text-muted-foreground">1,000 USDC</p>
                  </div>
                </div>
                <p className="font-bold">0.48 ETH</p>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="supplied" className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">Total Supplied</p>
                <p className="text-2xl font-bold">2.4 ETH</p>
              </div>
              <ArrowUpRight className="h-9 w-9 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-bold text-xs">BTC</span>
                  </div>
                  <div>
                    <p className="font-medium">Bitcoin</p>
                    <p className="text-xs text-muted-foreground">0.05 BTC</p>
                  </div>
                </div>
                <p className="font-bold">1.44 ETH</p>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center">
                    <span className="font-bold text-xs">USDT</span>
                  </div>
                  <div>
                    <p className="font-medium">Tether</p>
                    <p className="text-xs text-muted-foreground">2,000 USDT</p>
                  </div>
                </div>
                <p className="font-bold">0.96 ETH</p>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

