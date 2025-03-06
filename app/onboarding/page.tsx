"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, ArrowRight, Fingerprint, Phone, Mail, Check } from "lucide-react"

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [method, setMethod] = useState("phone")

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1)
    } else {
      router.push("/dashboard")
    }
  }

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1)
    } else {
      router.push("/")
    }
  }

  return (
    <div className="container flex items-center justify-center min-h-screen py-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <div className="flex items-center mb-2">
            <Button variant="ghost" size="icon" onClick={handleBack} className="mr-2">
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <div className="flex-1 flex items-center justify-center">
              <div className="w-full max-w-[200px] flex items-center">
                <div className={`h-2 flex-1 rounded-full ${step >= 1 ? "bg-primary" : "bg-muted"}`}></div>
                <div
                  className={`h-4 w-4 mx-1 rounded-full flex items-center justify-center ${step >= 1 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {step > 1 ? <Check className="h-3 w-3" /> : "1"}
                </div>
                <div className={`h-2 flex-1 rounded-full ${step >= 2 ? "bg-primary" : "bg-muted"}`}></div>
                <div
                  className={`h-4 w-4 mx-1 rounded-full flex items-center justify-center ${step >= 2 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  {step > 2 ? <Check className="h-3 w-3" /> : "2"}
                </div>
                <div className={`h-2 flex-1 rounded-full ${step >= 3 ? "bg-primary" : "bg-muted"}`}></div>
                <div
                  className={`h-4 w-4 mx-1 rounded-full flex items-center justify-center ${step >= 3 ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                >
                  3
                </div>
              </div>
            </div>
          </div>
          <CardTitle>{getStepTitle(step)}</CardTitle>
          <CardDescription>{getStepDescription(step)}</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 1 && (
            <Tabs defaultValue={method} onValueChange={setMethod} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="phone">Phone</TabsTrigger>
                <TabsTrigger value="google">Google</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
              </TabsList>
              <TabsContent value="phone" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="flex gap-2">
                    <Input id="phone" placeholder="+1 (555) 000-0000" />
                    <Button variant="outline">Send Code</Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="code">Verification Code</Label>
                  <Input id="code" placeholder="000000" />
                </div>
              </TabsContent>
              <TabsContent value="google" className="mt-4">
                <div className="flex justify-center py-6">
                  <Button className="w-full" variant="outline">
                    <Mail className="mr-2 h-4 w-4" />
                    Continue with Google
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="email" className="mt-4 space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email-code">Verification Code</Label>
                  <div className="flex gap-2">
                    <Input id="email-code" placeholder="000000" />
                    <Button variant="outline">Send Code</Button>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}

          {step === 2 && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="username">Username (optional)</Label>
                <Input id="username" placeholder="johndoe" />
              </div>
              <div className="space-y-2">
                <Label>Security Method</Label>
                <div className="grid grid-cols-2 gap-2">
                  <Button variant="outline" className="justify-start">
                    <Fingerprint className="mr-2 h-4 w-4" />
                    Biometric
                  </Button>
                  <Button variant="outline" className="justify-start">
                    <Phone className="mr-2 h-4 w-4" />
                    PIN Code
                  </Button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="rounded-lg border bg-muted/50 p-4">
                <div className="text-center space-y-2">
                  <div className="h-16 w-16 rounded-full bg-primary/20 mx-auto flex items-center justify-center">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-medium">Wallet Created Successfully!</h3>
                  <p className="text-sm text-muted-foreground">
                    Your secure wallet is ready to use. No need to worry about private keys or seed phrases.
                  </p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Wallet Address:</span>
                  <span className="font-mono">0x71C...F3E2</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Security Level:</span>
                  <span className="text-green-500">High</span>
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleNext} className="w-full">
            {step === 3 ? "Go to Dashboard" : "Continue"}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function getStepTitle(step: number) {
  switch (step) {
    case 1:
      return "Create Your Wallet"
    case 2:
      return "Complete Your Profile"
    case 3:
      return "All Set!"
    default:
      return ""
  }
}

function getStepDescription(step: number) {
  switch (step) {
    case 1:
      return "Choose your preferred method to create your secure wallet"
    case 2:
      return "Tell us a bit about yourself and set up security"
    case 3:
      return "Your wallet is ready to use"
    default:
      return ""
  }
}

