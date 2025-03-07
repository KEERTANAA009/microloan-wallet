"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/components/ui/use-toast"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

export function LendingOpportunities() {
  const { toast } = useToast()
  const [selectedAsset, setSelectedAsset] = useState(null)
  const [lendAmount, setLendAmount] = useState("")
  const [openLendDialog, setOpenLendDialog] = useState(false)

  const lendingPools = [
    {
      id: "usdc-pool",
      asset: "USDC",
      apy: "8.2%",
      totalSupplied: "₹210M",
      utilization: "76%",
      minAmount: 100,
      maxAmount: 100000,
    },
    {
      id: "eth-pool",
      asset: "ETH",
      apy: "5.8%",
      totalSupplied: "₹352.8M",
      utilization: "82%",
      minAmount: 0.1,
      maxAmount: 50,
    },
    {
      id: "btc-pool",
      asset: "BTC",
      apy: "4.5%",
      totalSupplied: "₹319.2M",
      utilization: "68%",
      minAmount: 0.01,
      maxAmount: 5,
    },
    {
      id: "usdt-pool",
      asset: "USDT",
      apy: "7.9%",
      totalSupplied: "₹151.2M",
      utilization: "72%",
      minAmount: 100,
      maxAmount: 100000,
    },
  ]

  const handleLendClick = (pool) => {
    setSelectedAsset(pool)
    setOpenLendDialog(true)
  }

  const handleLendSubmit = () => {
    if (!lendAmount || Number.parseFloat(lendAmount) <= 0) {
      toast({
        title: "Invalid amount",
        description: "Please enter a valid amount to lend.",
        variant: "destructive",
      })
      return
    }

    toast({
      title: "Lending successful",
      description: `You have successfully lent ${lendAmount} ${selectedAsset.asset}.`,
    })

    setOpenLendDialog(false)
    setLendAmount("")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lending Opportunities</CardTitle>
        <CardDescription>Earn passive income by lending your crypto assets</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="all">All Assets</TabsTrigger>
            <TabsTrigger value="stablecoins">Stablecoins</TabsTrigger>
            <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
            <TabsTrigger value="bitcoin">Bitcoin</TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="space-y-4 pt-4">
            <div className="space-y-4">
              {lendingPools.map((pool) => (
                <div key={pool.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="space-y-1">
                    <h4 className="font-medium">{pool.asset}</h4>
                    <div className="flex items-center gap-4">
                      <div>
                        <p className="text-xs text-muted-foreground">APY</p>
                        <p className="font-medium text-green-600 dark:text-green-400">{pool.apy}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Total Supplied</p>
                        <p className="font-medium">{pool.totalSupplied}</p>
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">Utilization</p>
                        <p className="font-medium">{pool.utilization}</p>
                      </div>
                    </div>
                  </div>
                  <Button onClick={() => handleLendClick(pool)}>Lend</Button>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="stablecoins" className="space-y-4 pt-4">
            <div className="space-y-4">
              {lendingPools
                .filter((pool) => ["USDC", "USDT", "DAI"].includes(pool.asset))
                .map((pool) => (
                  <div key={pool.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">{pool.asset}</h4>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">APY</p>
                          <p className="font-medium text-green-600 dark:text-green-400">{pool.apy}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Total Supplied</p>
                          <p className="font-medium">{pool.totalSupplied}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Utilization</p>
                          <p className="font-medium">{pool.utilization}</p>
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => handleLendClick(pool)}>Lend</Button>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="ethereum" className="space-y-4 pt-4">
            <div className="space-y-4">
              {lendingPools
                .filter((pool) => pool.asset === "ETH")
                .map((pool) => (
                  <div key={pool.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">{pool.asset}</h4>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">APY</p>
                          <p className="font-medium text-green-600 dark:text-green-400">{pool.apy}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Total Supplied</p>
                          <p className="font-medium">{pool.totalSupplied}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Utilization</p>
                          <p className="font-medium">{pool.utilization}</p>
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => handleLendClick(pool)}>Lend</Button>
                  </div>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="bitcoin" className="space-y-4 pt-4">
            <div className="space-y-4">
              {lendingPools
                .filter((pool) => pool.asset === "BTC")
                .map((pool) => (
                  <div key={pool.id} className="flex items-center justify-between rounded-lg border p-4">
                    <div className="space-y-1">
                      <h4 className="font-medium">{pool.asset}</h4>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground">APY</p>
                          <p className="font-medium text-green-600 dark:text-green-400">{pool.apy}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Total Supplied</p>
                          <p className="font-medium">{pool.totalSupplied}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">Utilization</p>
                          <p className="font-medium">{pool.utilization}</p>
                        </div>
                      </div>
                    </div>
                    <Button onClick={() => handleLendClick(pool)}>Lend</Button>
                  </div>
                ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={openLendDialog} onOpenChange={setOpenLendDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Lend {selectedAsset?.asset}</DialogTitle>
              <DialogDescription>Provide liquidity to earn {selectedAsset?.apy} APY</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="lend-amount">Amount to lend</Label>
                <Input
                  id="lend-amount"
                  placeholder={`Enter ${selectedAsset?.asset} amount`}
                  value={lendAmount}
                  onChange={(e) => setLendAmount(e.target.value)}
                />
                <p className="text-xs text-muted-foreground">
                  Min: {selectedAsset?.minAmount} {selectedAsset?.asset} - Max: {selectedAsset?.maxAmount}{" "}
                  {selectedAsset?.asset}
                </p>
              </div>
              <div className="rounded-lg bg-muted p-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Estimated APY</span>
                  <span className="font-medium text-green-600 dark:text-green-400">{selectedAsset?.apy}</span>
                </div>
                <div className="flex items-center justify-between text-sm mt-2">
                  <span>Estimated monthly earnings</span>
                  <span className="font-medium">
                    {lendAmount
                      ? `${((Number(lendAmount) * Number.parseFloat(selectedAsset?.apy)) / 100 / 12).toFixed(4)} ${selectedAsset?.asset}`
                      : `0 ${selectedAsset?.asset}`}
                  </span>
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setOpenLendDialog(false)}>
                Cancel
              </Button>
              <Button onClick={handleLendSubmit}>Confirm</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

