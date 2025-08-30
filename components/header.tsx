import { Crown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  return (
    <header className="bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <Image src="/logo.png" alt="Logo" width={28} height={28} />
            <span className="text-xl font-bold font-playfair">
              <span className="text-red-600">Sites</span>
              <span className="text-white">DeMelhores</span>
              <span className="text-green-600">Casinos</span>
            </span>
          </Link>
        </div>
      </div>  
    </header>
  )
}
