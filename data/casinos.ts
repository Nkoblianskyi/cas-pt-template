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
    name: "Solverde",
    logo: "/solverde.svg",
    rating: 9.8,
    bonus: "100% Até 20€",
    features: ["Licenciado SRIJ", "Casino Português", "Suporte 24/7"],
    isTopChoice: true,
    url: "https://www.solverde.pt/",
  },
  {
    rank: 2,
    name: "Luckia",
    logo: "/luckia.svg",
    rating: 9.7,
    bonus: "5€ Registo + Até 500€ Bónus",
    features: ["Melhor Avaliado", "Oferta Exclusiva", "App Móvel"],
    url: "https://www.luckia.pt/",
  },
  {
    rank: 3,
    name: "Casino Portugal",
    logo: "/brand-ccasino.svg",
    rating: 9.4,
    bonus: "20 Jogadas Grátis",
    features: ["Casino Oficial", "Jogos Exclusivos", "Pagamentos Rápidos"],
    url: "https://www.casinoportugal.pt/",
  },
  {
    rank: 4,
    name: "Betclic",
    logo: "/betclic.svg",
    rating: 9.2,
    bonus: "Deposita 10€ e joga com 50€",
    features: ["Popular", "Apostas Desportivas", "Casino ao Vivo"],
    url: "https://www.betclic.pt/",
  },
  {
    rank: 5,
    name: "Lebull",
    logo: "/lebull.svg",
    rating: 9.0,
    bonus: "25 FreeSpins no Registo",
    features: ["Bónus Generoso", "Variedade de Jogos", "Suporte Português"],
    url: "https://www.lebull.pt/",
  },
]

// Get top casino (rank 1)
export const getTopCasino = (): Casino => {
  return casinos.find((casino) => casino.rank === 1) || casinos[0]
}
