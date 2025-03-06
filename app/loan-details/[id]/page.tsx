"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Calendar, Clock, User, Shield, AlertTriangle } from "lucide-react"

export default function LoanDetailsPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const [activeTab, setActiveTab] = useState("overview")

  // In a real app, we would fetch the loan details based on the ID
  const loanId = params.id

  // Mock loan data
  const loan = {
    id: loanId,
    title: "Business Expansion",
    amount: 250,
    totalAmount: 270,
    amountPaid: 67.5,
    remainingAmount: 202.5,
    apr: 8,
    term: 3,
    remainingDays: 45,
    status: "active",
    purpose: "business",
    description: "Funding for inventory expansion for my small retail business.",
    borrower: {
      name: "John Doe",
      rating: 4.8,
      loansCompleted: 5,
    },
    riskScore: "Low",
    nextPaymentDate: "April 15, 2025",
    nextPaymentAmount: 67.5,
    collateral: null,
  }

  const paymentProgress = (loan.amountPaid / loan.totalAmount) * 100

  return (
    <div className="container max-w-4xl py-8">
      <Button variant="ghost" className="mb-4" onClick={() => router.push("/dashboard")}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Dashboard
      </Button>

      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{loan.title}</h1>
            <div className="flex items-center gap-2 mt-1">
              <Badge>{loan.status === "active" ? "Active" : loan.status}</Badge>
              <span className="text-sm text-muted-foreground">Loan #{loan.id}</span>
            </div>
          </div>
          <Button>Make Payment</Button>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Remaining Balance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${loan.remainingAmount.toFixed(2)}</div>
              <div className="mt-2">
                <div className="flex items-center justify-between text-sm mb-1">
                  <span>Repayment Progress</span>
                  <span>{paymentProgress.toFixed(0)}%</span>
                </div>
                <Progress value={paymentProgress} className="h-2" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Next Payment</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${loan.nextPaymentAmount.toFixed(2)}</div>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Due {loan.nextPaymentDate}</span>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Time Remaining</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{loan.remainingDays} days</div>
              <div className="flex items-center gap-1 mt-1 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>
                  {loan.term} month term at {loan.apr}% APR
                </span>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <Tabs defaultValue={activeTab} value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <TabsContent value="overview" className="mt-0 space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Loan Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Principal Amount:</span>
                      <span>${loan.amount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Interest:</span>
                      <span>${(loan.totalAmount - loan.amount).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Total Repayment:</span>
                      <span>${loan.totalAmount.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Amount Paid:</span>
                      <span>${loan.amountPaid.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Remaining Balance:</span>
                      <span>${loan.remainingAmount.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Loan Purpose</h3>
                  <p className="text-muted-foreground">{loan.description}</p>

                  <h3 className="text-lg font-medium mt-4 mb-2">Risk Assessment</h3>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700">
                      {loan.riskScore} Risk
                    </Badge>
                    <span className="text-sm text-muted-foreground">AI-powered risk score</span>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="payments" className="mt-0">
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="bg-green-50 text-green-700">
                        Paid
                      </Badge>
                      <span>Payment #1</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${loan.nextPaymentAmount.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">March 15, 2025</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge>Upcoming</Badge>
                      <span>Payment #2</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${loan.nextPaymentAmount.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">{loan.nextPaymentDate}</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Scheduled</Badge>
                      <span>Payment #3</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${loan.nextPaymentAmount.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">May 15, 2025</div>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Scheduled</Badge>
                      <span>Payment #4</span>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">${loan.nextPaymentAmount.toFixed(2)}</div>
                      <div className="text-sm text-muted-foreground">June 15, 2025</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="details" className="mt-0">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h3 className="text-lg font-medium mb-2">Loan Details</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Loan ID:</span>
                      <span>{loan.id}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Start Date:</span>
                      <span>March 1, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">End Date:</span>
                      <span>June 1, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Term:</span>
                      <span>{loan.term} months</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">APR:</span>
                      <span>{loan.apr}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Collateral:</span>
                      <span>{loan.collateral ? loan.collateral : "None"}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">Borrower Information</h3>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <User className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium">{loan.borrower.name}</div>
                      <div className="text-sm text-muted-foreground">
                        Rating: {loan.borrower.rating}/5 • {loan.borrower.loansCompleted} loans completed
                      </div>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium mt-4 mb-2">Security Information</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-600" />
                      <div>
                        <div className="font-medium">Transaction Protection</div>
                        <div className="text-sm text-muted-foreground">All transactions are secured and verified</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-5 w-5 text-amber-500" />
                      <div>
                        <div className="font-medium">Report Issues</div>
                        <div className="text-sm text-muted-foreground">Contact support for any concerns</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

