"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Wallet } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

export function ConnectWallet() {
  const [isConnected, setIsConnected] = useState(false)
  const [address, setAddress] = useState("")
  const { toast } = useToast()

  const connectWallet = async () => {
    try {
      // Simulating wallet connection
      // In a real app, you would use ethers.js or web3.js to connect to MetaMask or other wallets
      setTimeout(() => {
        const mockAddress = "0x" + Math.random().toString(16).slice(2, 12)
        setAddress(mockAddress)
        setIsConnected(true)
        toast({
          title: "Wallet connected",
          description: `Connected to ${mockAddress}`,
        })
      }, 1000)
    } catch (error) {
      toast({
        title: "Connection failed",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive",
      })
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setAddress("")
    toast({
      title: "Wallet disconnected",
      description: "Your wallet has been disconnected.",
    })
  }

  return (
    <>
      {!isConnected ? (
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Wallet className="h-4 w-4" />
              Connect Wallet
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Connect your wallet</DialogTitle>
              <DialogDescription>Connect your wallet to access the DeFi Microloan platform.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <Button onClick={connectWallet} className="w-full">
                MetaMask
              </Button>
              <Button onClick={connectWallet} className="w-full">
                WalletConnect
              </Button>
              <Button onClick={connectWallet} className="w-full">
                Coinbase Wallet
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      ) : (
        <Button variant="outline" onClick={disconnectWallet} className="flex items-center gap-2">
          <Wallet className="h-4 w-4" />
          {address.slice(0, 6)}...{address.slice(-4)}
        </Button>
      )}
    </>
  )
}

