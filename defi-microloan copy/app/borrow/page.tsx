import type { Metadata } from "next"
import { BorrowForm } from "@/components/borrow-form"
import { LoanRates } from "@/components/loan-rates"

export const metadata: Metadata = {
  title: "Borrow | DeFi Microloan",
  description: "Apply for a microloan with competitive rates",
}

export default function BorrowPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Borrow</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <BorrowForm />
        <div>
          <LoanRates />
        </div>
      </div>
    </div>
  )
}

