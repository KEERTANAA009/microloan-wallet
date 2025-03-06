import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  // In a real app, we would check if the user is authenticated
  const isAuthenticated = false

  if (isAuthenticated) {
    redirect("/dashboard")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <a href="/" className="flex items-center space-x-2">
              <span className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold">μ</span>
              </span>
              <span className="font-bold">MicroLoan</span>
            </a>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="ghost" asChild>
              <a href="/about">About</a>
            </Button>
            <Button variant="ghost" asChild>
              <a href="/how-it-works">How it works</a>
            </Button>
            <Button asChild>
              <a href="/onboarding">Get Started</a>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Microloans Made Simple
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Borrow and lend with ease. No technical knowledge required. Powered by secure blockchain technology.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button size="lg" asChild>
                    <a href="/onboarding" className="flex items-center gap-2">
                      Get Started <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="/how-it-works">Learn More</a>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[450px] w-[350px] rounded-2xl bg-gradient-to-b from-primary/20 to-primary/10 p-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[300px] rounded-xl bg-background p-4 shadow-lg">
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <div className="text-sm font-medium">Available Balance</div>
                          <div className="text-sm text-muted-foreground">USDC</div>
                        </div>
                        <div className="text-2xl font-bold">$1,250.00</div>
                        <div className="h-2 w-full rounded-full bg-muted">
                          <div className="h-2 w-3/4 rounded-full bg-primary"></div>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <div>Active Loans: 1</div>
                          <div>Investments: 2</div>
                        </div>
                        <div className="flex gap-2">
                          <Button className="flex-1" size="sm">
                            Borrow
                          </Button>
                          <Button className="flex-1" variant="outline" size="sm">
                            Lend
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">How It Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform makes microloans accessible to everyone with a simple, secure process.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  1
                </div>
                <h3 className="text-xl font-bold">Create Your Wallet</h3>
                <p className="text-center text-muted-foreground">
                  Sign up with Google, WhatsApp, or phone number. No technical setup required.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  2
                </div>
                <h3 className="text-xl font-bold">Request or Fund Loans</h3>
                <p className="text-center text-muted-foreground">
                  Easily request a loan or browse opportunities to fund others with just a few taps.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  3
                </div>
                <h3 className="text-xl font-bold">Earn & Repay</h3>
                <p className="text-center text-muted-foreground">
                  Auto-staking for passive earnings and simple repayment with automated reminders.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 MicroLoan. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Terms
            </Button>
            <Button variant="ghost" size="sm">
              Privacy
            </Button>
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

