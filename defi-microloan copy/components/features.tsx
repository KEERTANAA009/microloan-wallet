import { ShieldCheck, TrendingUp, Zap, CreditCard, BarChart4, Clock } from "lucide-react"

export function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Key Features</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl">
              Our platform offers a comprehensive suite of tools for both borrowers and lenders
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <ShieldCheck className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Secure Smart Contracts</h3>
            <p className="text-center text-muted-foreground">
              All loans are managed by audited smart contracts with collateral protection
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <TrendingUp className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">AI Credit Scoring</h3>
            <p className="text-center text-muted-foreground">
              Advanced credit scoring using on-chain transaction history
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Zap className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Auto-Staking</h3>
            <p className="text-center text-muted-foreground">
              Automatically earn passive income by lending idle cryptocurrencies
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <CreditCard className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Flexible Collateral</h3>
            <p className="text-center text-muted-foreground">Use stablecoins or NFTs as collateral for your loans</p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <BarChart4 className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Portfolio Management</h3>
            <p className="text-center text-muted-foreground">
              Track your lending and borrowing activities in one dashboard
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
            <Clock className="h-12 w-12 text-primary" />
            <h3 className="text-xl font-bold">Automated Repayments</h3>
            <p className="text-center text-muted-foreground">Set up autopay for loan repayments to avoid late fees</p>
          </div>
        </div>
      </div>
    </section>
  )
}

