// This is a simplified version of the toast component
"use client"

import { createContext, useContext, useState } from "react"

const ToastContext = createContext({
  toast: ({ title, description, variant }) => {},
})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([])

  const toast = ({ title, description, variant = "default" }) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description, variant }])

    // Auto dismiss after 5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 5000)
  }

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="fixed bottom-0 right-0 z-50 flex flex-col gap-2 p-4 max-w-md">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`rounded-lg border p-4 shadow-md ${
              t.variant === "destructive" ? "bg-red-50 border-red-200 text-red-900" : "bg-white"
            }`}
          >
            {t.title && <div className="font-medium">{t.title}</div>}
            {t.description && <div className="text-sm text-muted-foreground">{t.description}</div>}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export const useToast = () => useContext(ToastContext)

