"use client"

import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getTopCasino } from "@/data/casinos"

export function HowWeRank() {
  const criteria = [
    {
      title: "Licença & Segurança",
      description:
        "Verificamos licenças válidas da SRIJ (Serviço de Regulação e Inspeção de Jogos) e outras autoridades reconhecidas internacionalmente. Analisamos protocolos de segurança, encriptação SSL e certificações de terceiros.",
      weight: "25%",
    },
    {
      title: "Seleção de Jogos",
      description:
        "Avaliamos a variedade de slots (mais de 1000 jogos), jogos de mesa clássicos, poker, roleta ao vivo e fornecedores premium como NetEnt, Microgaming e Evolution Gaming.",
      weight: "20%",
    },
    {
      title: "Bónus & Promoções",
      description:
        "Analisamos bónus de boas-vindas, requisitos de apostas justos (máximo 35x), promoções semanais, programas VIP e transparência nos termos e condições.",
      weight: "20%",
    },
    {
      title: "Apoio ao Cliente",
      description:
        "Testamos chat ao vivo 24/7, suporte em português, tempos de resposta (máximo 2 minutos), qualidade das respostas e disponibilidade telefónica.",
      weight: "15%",
    },
    {
      title: "Métodos de Pagamento",
      description:
        "Verificamos MB Way, Multibanco, cartões de crédito, e-wallets, criptomoedas, tempos de levantamento (máximo 24h) e ausência de taxas ocultas.",
      weight: "10%",
    },
    {
      title: "Experiência do Utilizador",
      description:
        "Avaliamos design responsivo, velocidade de carregamento, navegação intuitiva, compatibilidade móvel e funcionalidades de jogo responsável.",
      weight: "10%",
    },
  ]

  const topCasino = getTopCasino()

  const handleCardClick = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  const getReviewCount = () => {
    return Math.floor(Math.random() * 10000) + 1
  }

  const renderStars = (rating: number, size = "h-4 w-4") => {
    const filledStars = Math.round((rating / 10) * 5)
    return [...Array(5)].map((_, i) => {
      const filled = i < filledStars
      return (
        <Star key={i} className={`${size} ${filled ? "text-amber-400 fill-amber-400" : "text-muted-foreground"}`} />
      )
    })
  }

  return (
    <section className="py-12 md:py-16 bg-black/70">
      <div className="container mx-auto px-4">
        {/* How We Rank Section */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Como <span className="text-red-600">Avaliamos os Casinos</span>
          </h2>
          <div className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto space-y-4">
            <p>
              A nossa equipa de especialistas em jogos online utiliza um sistema de avaliação rigoroso e abrangente para
              testar todos os aspetos dos casinos online em Portugal. Cada casino é submetido a mais de 50 testes
              diferentes ao longo de várias semanas.
            </p>
            <p>
              Testamos pessoalmente cada plataforma, fazemos depósitos reais, jogamos centenas de jogos e processamos
              levantamentos para garantir que a nossa avaliação reflete a experiência real dos jogadores portugueses.
            </p>
            <p className="text-amber-400 font-semibold">
              Apenas casinos que pontuam acima de 8.0 na nossa escala são recomendados aos nossos utilizadores.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {criteria.map((criterion, index) => (
            <Card key={index} className="bg-gray-900 border-gray-800 hover:border-red-900/50 transition-colors">
              <CardContent className="p-4 md:p-6 text-center">
                <h3 className="text-base md:text-lg font-semibold text-white mb-2">{criterion.title}</h3>
                <p className="text-gray-400 text-xs md:text-sm mb-3">{criterion.description}</p>
                <Badge className="bg-red-600 text-white font-semibold text-xs md:text-sm">{criterion.weight}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Our Choice Section */}
        <div className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            A Nossa <span className="text-red-600">Escolha Principal</span>
          </h2>
          <div className="text-sm md:text-base text-gray-300 max-w-4xl mx-auto space-y-3">
            <p>
              Após testes exaustivos e avaliações minuciosas de mais de 200 casinos online, este casino destaca-se como
              a nossa recomendação #1 para jogadores portugueses em 2024.
            </p>
            <p>
              Este casino obteve a pontuação mais alta em todas as nossas categorias de avaliação, oferecendo uma
              experiência de jogo excepcional, segura e confiável.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="bg-green-900/30 border border-green-700 rounded-lg px-4 py-2">
                <span className="text-green-400 font-semibold text-xs">✓ LICENÇA SRIJ VÁLIDA</span>
              </div>
              <div className="bg-amber-900/30 border border-amber-700 rounded-lg px-4 py-2">
                <span className="text-amber-400 font-semibold text-xs">✓ LEVANTAMENTOS 24H</span>
              </div>
              <div className="bg-red-900/30 border border-red-700 rounded-lg px-4 py-2">
                <span className="text-red-400 font-semibold text-xs">✓ SUPORTE PORTUGUÊS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6 max-w-[calc(72rem+50px)] mx-auto">
          <Card
            className="casino-card cursor-pointer transition-all duration-300 relative overflow-hidden min-h-[120px] md:min-h-[140px] lg:min-h-[160px] ring-2 ring-amber-400 shadow-lg shadow-amber-400/20 bg-gradient-to-r from-card via-amber-400/5 to-card hover:ring-amber-500 border-amber-400"
            onClick={() => handleCardClick(topCasino.url)}
            style={{
              backgroundImage: `radial-gradient(circle at 20% 80%, rgba(251, 191, 36, 0.1) 0%, transparent 50%), 
                   radial-gradient(circle at 80% 20%, rgba(239, 68, 68, 0.1) 0%, transparent 50%),
                   radial-gradient(circle at 40% 40%, rgba(34, 197, 94, 0.05) 0%, transparent 50%)`,
            }}
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-4 right-4 text-6xl text-amber-400/20">♠</div>
              <div className="absolute bottom-4 left-4 text-4xl text-red-500/20">♥</div>
              <div className="absolute top-1/2 left-1/4 text-3xl text-green-500/20">♣</div>
              <div className="absolute bottom-1/3 right-1/3 text-5xl text-red-600/20">♦</div>
            </div>

            <CardContent className="p-4 h-full flex items-center relative z-10">
              <Badge className="absolute -top-1 -left-1 bg-amber-600 text-white font-bold text-xs px-3 py-1 z-20 rounded-sm shadow-md border border-amber-400">
                MELHOR CASINO
              </Badge>

              <div className="absolute inset-0 opacity-5 pointer-events-none portuguese-pattern"></div>

              <div className="md:hidden w-full">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex-shrink-0">
                    <div className="bg-black backdrop-blur-sm rounded-lg shadow-sm relative z-10 p-2">
                      <img
                        src={topCasino.logo || "/placeholder.svg"}
                        alt={`${topCasino.name} logo`}
                        className="h-12 object-contain max-w-[120px] w-auto"
                      />
                    </div>
                    <div className="flex items-center justify-center gap-2 mt-2">
                      <div className="flex items-center">{renderStars(topCasino.rating, "h-3 w-3")}</div>
                      <span className="text-foreground font-semibold text-sm">{topCasino.rating.toFixed(1)}</span>
                    </div>
                  </div>
                  <div className="text-center flex-1 ml-6">
                    <div className="flex items-center justify-center gap-1 text-red-600 mb-2">
                      <span className="text-sm font-medium">Bónus de Boas-Vindas</span>
                    </div>
                    <div className="text-red-600 font-bold text-base leading-tight font-playfair p-2 rounded bg-primary/10">
                      {topCasino.bonus}
                    </div>
                    <div className="mt-3 text-center">
                      <div className="flex items-center justify-center gap-1 mb-1">
                        {renderStars(topCasino.rating, "h-3 w-3")}
                        <span className="text-foreground font-semibold text-sm ml-2">
                          {topCasino.rating.toFixed(1)}
                        </span>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {getReviewCount().toLocaleString()} avaliações
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <Button
                    className="font-semibold px-4 py-2 text-xs w-full max-w-xs relative z-10 shadow-lg transition-all duration-200 bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleCardClick(topCasino.url)
                    }}
                  >
                    JOGAR AGORA
                  </Button>
                  <p className="text-xs text-muted-foreground mt-1">18+ Jogo Responsável</p>
                </div>
              </div>

              <div className="hidden md:block lg:hidden w-full">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4 flex-shrink-0" style={{ width: "180px" }}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-full font-bold text-lg flex-shrink-0 shadow-md bg-primary text-primary-foreground relative z-10">
                      {topCasino.rank}
                    </div>
                    <div className="text-center flex-1">
                      <div className="bg-black backdrop-blur-sm rounded-lg shadow-sm mb-2 mx-auto w-fit relative z-10 p-2">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-12 object-contain max-w-[100px] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex-shrink-0" style={{ width: "380px" }}>
                    <div className="flex items-center justify-center gap-1 text-red-600 mb-2">
                      <span className="text-sm font-medium">Bónus de Boas-vindas</span>
                    </div>
                    <div className="text-red-600 font-bold text-lg leading-tight font-playfair">{topCasino.bonus}</div>
                  </div>
                  <div className="text-center flex-shrink-0" style={{ width: "120px" }}>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {renderStars(topCasino.rating, "h-4 w-4")}
                    </div>
                    <div className="text-foreground font-semibold text-sm">{topCasino.rating.toFixed(1)}</div>
                    <div className="text-xs text-muted-foreground">{getReviewCount().toLocaleString()} avaliações</div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1 min-h-[80px] justify-center" style={{ maxWidth: "180px" }}>
                    {topCasino.features.map((feature, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="trust-badge text-xs px-2 py-1 text-center justify-center w-full relative z-10 font-medium"
                      >
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex-shrink-0" style={{ width: "120px" }}>
                    <Button
                      className="font-semibold px-2 py-3 text-xs w-full h-auto relative z-10 shadow-lg transition-all duration-200 bg-red-700 hover:bg-red-800 text-white border-red-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
                      }}
                    >
                      JOGAR AGORA
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1 text-center">18+ безпечна гра</p>
                  </div>
                </div>
              </div>

              <div className="hidden lg:block w-full">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex items-center gap-6 flex-shrink-0" style={{ width: "240px" }}>
                    <div className="flex items-center justify-center w-14 h-14 rounded-full font-bold text-xl flex-shrink-0 shadow-lg bg-primary text-primary-foreground relative z-10">
                      {topCasino.rank}
                    </div>
                    <div className="text-center flex-1">
                      <div className="bg-black backdrop-blur-sm rounded-lg shadow-md mb-3 mx-auto w-fit relative z-10 p-3">
                        <img
                          src={topCasino.logo || "/placeholder.svg"}
                          alt={`${topCasino.name} logo`}
                          className="h-20 object-contain max-w-[160px] w-auto"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="text-center flex-shrink-0" style={{ width: "400px" }}>
                    <div className="flex items-center justify-center gap-2 text-red-600 mb-3">
                      <span className="text-lg font-medium">Bónus de Boas-Vindas</span>
                    </div>
                    <div className="font-bold font-playfair leading-tight text-2xl bg-primary/10 p-3 rounded-lg text-slate-50">
                      {topCasino.bonus}
                    </div>
                  </div>

                  <div className="text-center flex-shrink-0" style={{ width: "120px" }}>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      {renderStars(topCasino.rating, "h-4 w-4")}
                    </div>
                    <div className="text-foreground font-semibold text-lg">{topCasino.rating.toFixed(1)}</div>
                    <div className="text-sm text-muted-foreground">{getReviewCount().toLocaleString()} avaliações</div>
                  </div>

                  <div className="flex-shrink-0" style={{ width: "140px" }}>
                    <Button
                      className="font-semibold px-3 py-4 text-sm w-full h-auto relative z-10 shadow-lg transition-all duration-200 bg-red-700 hover:bg-red-800 text-white border-red-600"
                      onClick={(e) => {
                        e.stopPropagation()
                        handleCardClick(topCasino.url)
                      }}
                    >
                      JOGAR AGORA
                    </Button>
                    <p className="text-xs text-muted-foreground mt-1 text-center">18+ Jogo Responsável</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
