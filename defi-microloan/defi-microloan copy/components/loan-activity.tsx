"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle } from "lucide-react"

export function LoanActivity() {
  const [activeLoans, setActiveLoans] = useState([
    {
      id: "loan-1",
      type: "borrowed",
      asset: "ETH",
      amount: "1.2",
      value: "1.2 ETH",
      collateral: "USDC",
      collateralAmount: "3,750",
      collateralValue: "1.8 ETH",
      apr: "5.2%",
      status: "active",
      dueDate: "2025-05-15",
    },
    {
      id: "loan-2",
      type: "lent",
      asset: "USDC",
      amount: "5,000",
      value: "2.4 ETH",
      collateral: "ETH",
      collateralAmount: "3.5",
      collateralValue: "3.5 ETH",
      apr: "8.5%",
      status: "active",
      dueDate: "2025-06-22",
    },
  ])

  const [loanHistory, setLoanHistory] = useState([
    {
      id: "loan-history-1",
      type: "borrowed",
      asset: "USDT",
      amount: "2,000",
      value: "0.96 ETH",
      collateral: "ETH",
      collateralAmount: "1.2",
      collateralValue: "1.2 ETH",
      apr: "6.8%",
      status: "repaid",
      completedDate: "2025-02-10",
    },
    {
      id: "loan-history-2",
      type: "lent",
      asset: "ETH",
      amount: "2.5",
      value: "2.5 ETH",
      collateral: "USDC",
      collateralAmount: "7,500",
      collateralValue: "3.6 ETH",
      apr: "7.2%",
      status: "repaid",
      completedDate: "2025-01-05",
    },
  ])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Activity</CardTitle>
        <CardDescription>Manage your active loans and view history</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="active">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="active">Active Loans</TabsTrigger>
            <TabsTrigger value="history">Loan History</TabsTrigger>
          </TabsList>
          <TabsContent value="active" className="space-y-4">
            {activeLoans.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-muted-foreground">You don't have any active loans.</p>
                <Button className="mt-4">Apply for a Loan</Button>
              </div>
            ) : (
              <div className="space-y-4">
                {activeLoans.map((loan) => (
                  <div key={loan.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {loan.type === "borrowed" ? (
                          <ArrowDownRight className="h-5 w-5 text-orange-500" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-green-500" />
                        )}
                        <span className="font-medium capitalize">{loan.type}</span>
                        <Badge variant={loan.type === "borrowed" ? "outline" : "secondary"}>{loan.asset}</Badge>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        Due {new Date(loan.dueDate).toLocaleDateString()}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-medium">
                          {loan.amount} {loan.asset} ({loan.value})
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Collateral</p>
                        <p className="font-medium">
                          {loan.collateralAmount} {loan.collateral} ({loan.collateralValue})
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">APR</p>
                        <p className="font-medium">{loan.apr}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Status</p>
                        <div className="flex items-center gap-1">
                          <CheckCircle className="h-4 w-4 text-green-500" />
                          <p className="font-medium capitalize">{loan.status}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      {loan.type === "borrowed" ? (
                        <Button size="sm">Repay Loan</Button>
                      ) : (
                        <Button size="sm" variant="outline">
                          View Details
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
          <TabsContent value="history" className="space-y-4">
            {loanHistory.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <p className="text-muted-foreground">No loan history available.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {loanHistory.map((loan) => (
                  <div key={loan.id} className="rounded-lg border p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {loan.type === "borrowed" ? (
                          <ArrowDownRight className="h-5 w-5 text-orange-500" />
                        ) : (
                          <ArrowUpRight className="h-5 w-5 text-green-500" />
                        )}
                        <span className="font-medium capitalize">{loan.type}</span>
                        <Badge variant={loan.type === "borrowed" ? "outline" : "secondary"}>{loan.asset}</Badge>
                      </div>
                      <Badge variant="outline" className="flex items-center gap-1">
                        <CheckCircle className="h-3 w-3" />
                        {loan.status.charAt(0).toUpperCase() + loan.status.slice(1)}
                      </Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Amount</p>
                        <p className="font-medium">
                          {loan.amount} {loan.asset} ({loan.value})
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Collateral</p>
                        <p className="font-medium">
                          {loan.collateralAmount} {loan.collateral} ({loan.collateralValue})
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">APR</p>
                        <p className="font-medium">{loan.apr}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Completed</p>
                        <p className="font-medium">{new Date(loan.completedDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-2 mt-4">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

