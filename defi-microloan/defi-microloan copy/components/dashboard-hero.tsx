import { Button } from "@/components/ui/button"
import Link from "next/link"

export function DashboardHero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Decentralized Microloans for Everyone
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Borrow or lend cryptocurrency with smart contracts. Earn passive income or get the funds you need with
                our secure platform.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/borrow">
                <Button size="lg" className="w-full">
                  Get a Loan
                </Button>
              </Link>
              <Link href="/lend">
                <Button size="lg" variant="outline" className="w-full">
                  Start Lending
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden bg-muted">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4 p-6 bg-card rounded-lg shadow-lg w-[80%] h-[80%]">
                  <div className="space-y-2 col-span-2">
                    <h3 className="text-xl font-bold">Platform Statistics</h3>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="text-2xl font-bold">6 ETH</div>
                    <div className="text-sm text-muted-foreground">Total Value Locked</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="text-2xl font-bold">8.2%</div>
                    <div className="text-sm text-muted-foreground">Average APY</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="text-2xl font-bold">2,450</div>
                    <div className="text-sm text-muted-foreground">Active Loans</div>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <div className="text-2xl font-bold">1,280</div>
                    <div className="text-sm text-muted-foreground">Active Lenders</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

