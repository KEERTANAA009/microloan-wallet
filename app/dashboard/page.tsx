"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import {
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Wallet,
  CreditCard,
  BarChart3,
  Bell,
  Settings,
  User,
  Home,
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
} from "lucide-react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold">μ</span>
            </span>
            <span className="font-bold">MicroLoan</span>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              <div className="h-6 w-6 rounded-full bg-muted flex items-center justify-center">
                <User className="h-4 w-4" />
              </div>
              <span>John</span>
            </Button>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-[250px] flex-col border-r bg-muted/40 px-4 py-6 md:flex">
          <nav className="grid gap-2">
            <Button
              variant={activeTab === "overview" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("overview")}
            >
              <Home className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeTab === "borrow" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("borrow")}
            >
              <ArrowDownRight className="mr-2 h-4 w-4" />
              Borrow
            </Button>
            <Button
              variant={activeTab === "lend" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("lend")}
            >
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Lend
            </Button>
            <Button
              variant={activeTab === "wallet" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("wallet")}
            >
              <Wallet className="mr-2 h-4 w-4" />
              Wallet
            </Button>
            <Button
              variant={activeTab === "history" ? "secondary" : "ghost"}
              className="justify-start"
              onClick={() => setActiveTab("history")}
            >
              <Clock className="mr-2 h-4 w-4" />
              History
            </Button>
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-sm">Need help?</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-xs text-muted-foreground">
                  Have questions about using the app? Our support team is here to help.
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" size="sm" className="w-full">
                  Contact Support
                </Button>
              </CardFooter>
            </Card>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6">
            <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 md:hidden mb-6">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="borrow">Borrow</TabsTrigger>
                <TabsTrigger value="lend">Lend</TabsTrigger>
                <TabsTrigger value="wallet">Wallet</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="mt-0 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
                  <div className="flex items-center gap-2">
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Loan
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
                      <DollarSign className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$1,250.00</div>
                      <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Active Loans</CardTitle>
                      <CreditCard className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">1</div>
                      <p className="text-xs text-muted-foreground">$250.00 outstanding</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Investments</CardTitle>
                      <BarChart3 className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">2</div>
                      <p className="text-xs text-muted-foreground">$500.00 invested</p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                      <CardTitle className="text-sm font-medium">Earnings</CardTitle>
                      <TrendingUp className="h-4 w-4 text-muted-foreground" />
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">$45.80</div>
                      <p className="text-xs text-muted-foreground">+12.5% APY</p>
                    </CardContent>
                  </Card>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                  <Card className="lg:col-span-4">
                    <CardHeader>
                      <CardTitle>Active Loans</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="rounded-lg border p-4">
                          <div className="flex items-start justify-between">
                            <div>
                              <div className="flex items-center gap-2">
                                <h4 className="font-semibold">Business Expansion</h4>
                                <Badge>Active</Badge>
                              </div>
                              <p className="text-sm text-muted-foreground mt-1">Due in 45 days</p>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">$250.00</div>
                              <p className="text-sm text-muted-foreground">8% APR</p>
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="flex items-center justify-between text-sm mb-1">
                              <span>Repayment Progress</span>
                              <span>25%</span>
                            </div>
                            <Progress value={25} className="h-2" />
                          </div>
                          <div className="mt-4 flex justify-end">
                            <Button variant="outline" size="sm">
                              Make Payment
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="lg:col-span-3">
                    <CardHeader>
                      <CardTitle>Security Status</CardTitle>
                      <CardDescription>Your account is protected</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Biometric Authentication</div>
                            <p className="text-sm text-muted-foreground">Enabled</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Transaction Monitoring</div>
                            <p className="text-sm text-muted-foreground">Active</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                            <Shield className="h-5 w-5 text-green-600" />
                          </div>
                          <div>
                            <div className="font-medium">Risk Assessment</div>
                            <p className="text-sm text-muted-foreground">Low Risk</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="borrow" className="mt-0 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">Borrow</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Request Loan
                  </Button>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Request a Microloan</CardTitle>
                    <CardDescription>Fill out the form below to request a new loan</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Loan request form would go here */}
                      <p className="text-muted-foreground">Loan request form would be implemented here</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="lend" className="mt-0 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">Lend</h2>
                  <div className="flex items-center gap-2">
                    <Button variant="outline">Filter</Button>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      Invest
                    </Button>
                  </div>
                </div>
                <Card>
                  <CardHeader>
                    <CardTitle>Available Loan Opportunities</CardTitle>
                    <CardDescription>Browse and fund microloans with AI-based risk assessment</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">Small Business Inventory</h4>
                              <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                                Low Risk
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">3 month term • 10% APR</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">$500.00</div>
                            <p className="text-sm text-muted-foreground">75% funded</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Progress value={75} className="h-2" />
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button size="sm">Fund Loan</Button>
                        </div>
                      </div>
                      <div className="rounded-lg border p-4">
                        <div className="flex items-start justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-semibold">Education Expenses</h4>
                              <Badge variant="outline" className="bg-green-50 text-green-700 hover:bg-green-50">
                                Very Low Risk
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">6 month term • 8% APR</p>
                          </div>
                          <div className="text-right">
                            <div className="font-semibold">$1,000.00</div>
                            <p className="text-sm text-muted-foreground">40% funded</p>
                          </div>
                        </div>
                        <div className="mt-4">
                          <Progress value={40} className="h-2" />
                        </div>
                        <div className="mt-4 flex justify-end">
                          <Button size="sm">Fund Loan</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="wallet" className="mt-0 space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold tracking-tight">Wallet</h2>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Funds
                  </Button>
                </div>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>USDC Balance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$1,250.00</div>
                      <div className="mt-4 flex items-center gap-2">
                        <Button size="sm">Send</Button>
                        <Button size="sm" variant="outline">
                          Receive
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Staked Assets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="text-3xl font-bold">$500.00</div>
                      <p className="text-sm text-muted-foreground">Earning 5.2% APY</p>
                      <div className="mt-4 flex items-center gap-2">
                        <Button size="sm">Stake More</Button>
                        <Button size="sm" variant="outline">
                          Unstake
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader className="pb-2">
                      <CardTitle>Transaction History</CardTitle>
                    </CardHeader>
                    <CardContent className="h-[150px] overflow-auto">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                            <span>Loan Repayment</span>
                          </div>
                          <div>+$50.00</div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <ArrowDownRight className="h-4 w-4 text-red-500" />
                            <span>Funded Loan</span>
                          </div>
                          <div>-$200.00</div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="h-4 w-4 text-green-500" />
                            <span>Interest Earned</span>
                          </div>
                          <div>+$12.50</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

