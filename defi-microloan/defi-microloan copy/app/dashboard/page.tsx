import type { Metadata } from "next"
import { AccountSummary } from "@/components/account-summary"
import { LoanActivity } from "@/components/loan-activity"
import { CreditScore } from "@/components/credit-score"
import { RecommendedActions } from "@/components/recommended-actions"

export const metadata: Metadata = {
  title: "Dashboard | DeFi Microloan",
  description: "View your loan activity and account summary",
}

export default function DashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <AccountSummary />
        <CreditScore />
      </div>
      <div className="mt-8">
        <LoanActivity />
      </div>
      <div className="mt-8">
        <RecommendedActions />
      </div>
    </div>
  )
}

