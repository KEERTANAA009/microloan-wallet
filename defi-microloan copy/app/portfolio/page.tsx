import type { Metadata } from "next"
import { PortfolioOverview } from "@/components/portfolio-overview"
import { AssetAllocation } from "@/components/asset-allocation"
import { TransactionHistory } from "@/components/transaction-history"
import { PerformanceMetrics } from "@/components/performance-metrics"

export const metadata: Metadata = {
  title: "Portfolio | DeFi Microloan",
  description: "View and manage your DeFi portfolio",
}

export default function PortfolioPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Portfolio</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <PortfolioOverview />
        </div>
        <div>
          <AssetAllocation />
        </div>
      </div>
      <div className="grid gap-6 mt-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <TransactionHistory />
        </div>
        <div>
          <PerformanceMetrics />
        </div>
      </div>
    </div>
  )
}

