import { Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/logo.png" alt="Logo" width={40} height={40} />
              <span className="text-lg font-bold font-playfair">
                <span className="text-red-600">Casino</span>
                <span className="text-white">Top</span>
                <span className="text-green-600">Portugal</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-md">
              O seu guia confiável para os melhores casinos online em Portugal. Análises independentes, bónus exclusivos
              e jogo responsável.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#rankings" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Top Casinos
                </Link>
              </li>
              <li>
                <Link href="#how-we-rank" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Como Avaliamos
                </Link>
              </li>
              <li>

              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Política de Privacidade
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/cookie-policy" className="text-slate-400 hover:text-white text-sm transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>

              </li>
              <li>
                <span className="text-slate-400 text-sm">Jogo Responsável</span>
              </li>
              <li>
                <span className="text-slate-400 text-sm">Apenas +18</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-6">
          {/* Organizations */}
          <div className="flex flex-wrap justify-center items-center gap-6 mb-6">
            <Link
              href="https://www.srij.turismodeportugal.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/srij.svg"
                alt="SRIJ"
                className="h-8 w-auto object-contain opacity-60"
              />
            </Link>
            <Link
              href="https://www.sicad.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/icad.png"
                alt="ICAD"
                className="h-8 w-auto object-contain opacity-60"
              />
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/jogo2.png"
                alt="Jogo Responsável"
                className="h-8 w-auto object-contain opacity-60"
              />
            </Link>
            <Link
              href="https://www.gamcare.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <img
                src="/gamecare.svg"
                alt="GamCare"
                className="h-8 w-auto object-contain opacity-60"
              />
            </Link>
            <div className="bg-red-600 text-white px-3 py-1 rounded font-bold text-sm">18+</div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-slate-500 text-sm">
              © 2025 CasinoTopPortugal. Todos os direitos reservados. | Jogo Responsável
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
