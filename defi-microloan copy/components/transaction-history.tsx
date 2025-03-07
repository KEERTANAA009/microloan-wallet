"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ArrowDownRight, CheckCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function TransactionHistory() {
  const [filter, setFilter] = useState("all")

  const transactions = [
    {
      id: "tx-1",
      type: "lend",
      asset: "USDC",
      amount: "1,000",
      value: "₹84,000",
      date: "2025-03-05",
      status: "completed",
    },
    {
      id: "tx-2",
      type: "borrow",
      asset: "ETH",
      amount: "0.5",
      value: "₹87,500",
      date: "2025-03-02",
      status: "completed",
    },
    {
      id: "tx-3",
      type: "repay",
      asset: "USDC",
      amount: "500",
      value: "₹42,000",
      date: "2025-02-28",
      status: "completed",
    },
    {
      id: "tx-4",
      type: "withdraw",
      asset: "ETH",
      amount: "0.2",
      value: "₹35,000",
      date: "2025-02-25",
      status: "completed",
    },
    {
      id: "tx-5",
      type: "lend",
      asset: "BTC",
      amount: "0.01",
      value: "₹50,400",
      date: "2025-02-20",
      status: "completed",
    },
    {
      id: "tx-6",
      type: "interest",
      asset: "USDC",
      amount: "25.6",
      value: "₹2,150",
      date: "2025-02-15",
      status: "completed",
    },
  ]

  const filteredTransactions = filter === "all" ? transactions : transactions.filter((tx) => tx.type === filter)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Transaction History</CardTitle>
            <CardDescription>Recent activity in your account</CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Select defaultValue="all" onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Filter transactions" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Transactions</SelectItem>
                <SelectItem value="lend">Lending</SelectItem>
                <SelectItem value="borrow">Borrowing</SelectItem>
                <SelectItem value="repay">Repayments</SelectItem>
                <SelectItem value="withdraw">Withdrawals</SelectItem>
                <SelectItem value="interest">Interest</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredTransactions.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <p className="text-muted-foreground">No transactions found.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredTransactions.map((tx) => (
                <div key={tx.id} className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/20 p-2">
                      {tx.type === "lend" && <ArrowUpRight className="h-5 w-5 text-green-600" />}
                      {tx.type === "borrow" && <ArrowDownRight className="h-5 w-5 text-orange-600" />}
                      {tx.type === "repay" && <CheckCircle className="h-5 w-5 text-blue-600" />}
                      {tx.type === "withdraw" && <ArrowDownRight className="h-5 w-5 text-red-600" />}
                      {tx.type === "interest" && <ArrowUpRight className="h-5 w-5 text-purple-600" />}
                    </div>
                    <div>
                      <p className="font-medium capitalize">{tx.type}</p>
                      <p className="text-sm text-muted-foreground">{new Date(tx.date).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">{tx.asset}</Badge>
                      <p className="font-medium">{tx.amount}</p>
                    </div>
                    <p className="text-sm text-right text-muted-foreground">{tx.value}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="flex justify-center mt-4">
            <Button variant="outline" size="sm">
              Load More
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

