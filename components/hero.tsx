"use client"

import { Shield, Clock, Award } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const currentDate = new Date()
  const monthNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ]
  const currentMonth = monthNames[currentDate.getMonth()]
  const currentYear = currentDate.getFullYear()

  const scrollToRankings = () => {
    document.getElementById("rankings")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative py-6 overflow-hidden max-h-[300px]">
      <div className="absolute inset-0 bg-black/80"></div>

      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-6 max-w-7xl mx-auto">
          <div className="flex-1 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-3">
              <div className="relative">
                <img
                  src="/flag.png"
                  alt="Portugal Flag"
                  className="w-8 h-6 rounded shadow-lg border border-red-600/30"
                />
              </div>
              <Badge className="bg-red-700 text-white px-2 py-1 text-xs font-semibold">PORTUGAL 2025</Badge>
            </div>

            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-playfair leading-tight mb-3">
              <span className="text-white">Os Melhores </span>
              <span className="text-red-500">Casinos Online </span>
              <span className="text-amber-400">de Portugal</span>
            </h1>

            <p className="text-sm md:text-base text-slate-300 mb-4 leading-relaxed">
              Rankings exclusivos e bónus verificados dos casinos mais confiáveis para jogadores portugueses.
            </p>

            <div className="flex items-center justify-center lg:justify-start gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1">
                <Shield className="w-3 h-3 text-green-500" />
                <span>100% Seguro</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-blue-400" />
                <span>Atualizado {currentMonth}</span>
              </div>
            </div>
          </div>

          <div className="flex-shrink-0 flex items-center gap-4">
            <div className="flex gap-3">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-center min-w-[80px]">
                <div className="text-lg font-bold text-red-500 mb-1">50+</div>
                <div className="text-xs text-slate-400">Casinos</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg p-3 text-center min-w-[80px]">
                <div className="text-lg font-bold text-amber-400 mb-1">€2M+</div>
                <div className="text-xs text-slate-400">Bónus</div>
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-lg p-4 max-w-[200px]">
              <h3 className="text-sm font-semibold text-white mb-2 flex items-center gap-1">
                <Award className="w-4 h-4 text-amber-400" />
                Confiável
              </h3>
              <div className="space-y-1 text-xs text-slate-400">
                <div>• Análises independentes</div>
                <div>• Bónus verificados</div>
                <div>• Licenças portuguesas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
