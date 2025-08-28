export interface Casino {
  rank: number
  name: string
  logo: string
  rating: number
  bonus: string
  features: string[]
  isTopChoice?: boolean
  url: string
}

export const casinos: Casino[] = [
  {
    rank: 1,
    name: "Lamabet",
    logo: "/billybets.webp",
    rating: 9.8,
    bonus: "700% Até 10 000€ + 725 GG + CashBack Até 15%",
    features: ["Saques Rápidos", "App Móvel", "15% Cashback"],
    isTopChoice: true,
    url: "https://www.lamabet2.com/pt",
  },
  {
    rank: 2,
    name: "Billybets",
    logo: "/billybets.webp",
    rating: 9.5,
    bonus: "100% Até 500€ + 220 GG",
    features: ["Casino Móvel", "Jogos Exclusivos", "Apostas Desportivas"],
    url: "https://billybets4.com/pt/",
  },
  {
    rank: 3,
    name: "RichRoyal",
    logo: "/rich-royal.webp",
    rating: 9.2,
    bonus: "275% Até 7 500€ + 225 GG + 1 Bonus Crab",
    features: ["Pagamento Cripto", "Bónus Semanal", "Suporte ao Vivo"],
    url: "https://richroyal1.com/pt",
  },
  {
    rank: 4,
    name: "WinRolla",
    logo: "/winrolla.webp",
    rating: 9.0,
    bonus: "300% Até 8 000€ + 300 GG + 1 Bonus Crab",
    features: ["Saques Rápidos", "Programa VIP", "Rodadas Grátis"],
    url: "https://winrolla1.com/pt/",
  },
  {
    rank: 5,
    name: "MrPacho",
    logo: "/mrpacho.svg",
    rating: 8.8,
    bonus: "100% Até 500€ + 220 GG",
    features: ["Requisitos Baixos", "Bónus de Recarga", "Chat 24/7"],
    url: "https://mrpacho3.com/pt/",
  },
  {
    rank: 6,
    name: "Boomerang Bet",
    logo: "/billybets.webp",
    rating: 8.6,
    bonus: "100% Até 500€ + 200 GG",
    features: ["Saques Rápidos", "App Móvel", "Casino ao Vivo"],
    url: "https://boomerang-bet0101.com/pt",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
