import type { Metadata } from "next"
import { LendingOpportunities } from "@/components/lending-opportunities"
import { LendingStats } from "@/components/lending-stats"

export const metadata: Metadata = {
  title: "Lend | DeFi Microloan",
  description: "Earn passive income by lending your crypto assets",
}

export default function LendPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Lend</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <LendingOpportunities />
        </div>
        <div>
          <LendingStats />
        </div>
      </div>
    </div>
  )
}

