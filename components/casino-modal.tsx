"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Star } from "lucide-react"
import { getTopCasino } from "@/data/casinos"

export function CasinoModal() {
  const [isOpen, setIsOpen] = useState(false)
  const topCasino = getTopCasino()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000) // Show modal after 8 seconds

    return () => clearTimeout(timer)
  }, [])

  if (!isOpen) return null

  const handleModalClick = () => {
    window.open(topCasino.url, "_blank", "noopener,noreferrer")
    setIsOpen(false)
  }

  const filledStars = Math.round((topCasino.rating / 10) * 5)
  const reviewCount = Math.floor(Math.random() * (10000 - topCasino.rank * 500)) + (2000 + topCasino.rank * 300)

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="relative w-full max-w-md">
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          
        </div>

        <Card className="bg-slate-900 border-2 border-green-600 shadow-xl relative overflow-hidden mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation()
              setIsOpen(false)
            }}
            className="absolute top-4 right-4 text-slate-400 hover:text-white z-20 bg-slate-800 rounded-full p-1 transition-colors"
          >
            <X className="h-4 w-4" />
          </button>

          <CardContent className="p-6 text-center">
            <div className="mb-6 mt-4">
              <div className="bg-slate-800 rounded-lg p-4 mx-auto w-fit">
                <img
                  src={topCasino.logo || "/placeholder.svg"}
                  alt={`${topCasino.name} logo`}
                  className="h-24 w-48 mx-auto"
                />
              </div>
            </div>

            <div className="mb-6">
              <div className="rounded-lg p-4 mb-4 bg-transparent">
                <p className="text-red-600 mb-2 font-medium text-xl">Bónus de Boas-Vindas</p>
                <div className="font-bold mb-2 text-amber-400 text-2xl">{topCasino.bonus}</div>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < filledStars ? "text-amber-400 fill-current" : "text-slate-600"}`}
                  />
                ))}
              </div>
              <div className="text-lg font-semibold text-white mb-1">{topCasino.rating.toFixed(1)}/10</div>
              <div className="text-xs text-slate-400">{reviewCount.toLocaleString()} avaliações</div>
            </div>

            <Button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 text-base transition-colors border border-green-500 w-auto mx-auto"
              onClick={(e) => {
                e.stopPropagation()
                handleModalClick()
              }}
            >
              Jogar {topCasino.name}
            </Button>

            <p className="text-xs text-slate-500 text-center mt-3">18+ Jogo Responsável</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
