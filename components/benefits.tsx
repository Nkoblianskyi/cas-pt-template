import { Shield, Award, Clock, Users } from "lucide-react"

export function Benefits() {
  const benefits = [
    {
      icon: Shield,
      title: "Casinos Licenciados",
      description: "Apenas casinos com licenças válidas da SRIJ e autoridades europeias reconhecidas",
    },
    {
      icon: Award,
      title: "Avaliações Independentes",
      description: "Testes rigorosos e avaliações imparciais por especialistas em jogos online",
    },
    {
      icon: Clock,
      title: "Atualizações Diárias",
      description: "Rankings e ofertas atualizados diariamente para garantir informações precisas",
    },
    {
      icon: Users,
      title: "Comunidade Portuguesa",
      description: "Focado exclusivamente em jogadores portugueses com suporte em português",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-black/70">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Porque Confiar em <span className="text-red-600">Nós</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Somos o portal de referência para jogadores portugueses que procuram os melhores casinos online. A nossa
            missão é fornecer avaliações honestas e transparentes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center bg-gray-900/80 border border-gray-800 rounded-lg p-6 hover:border-red-900/50 transition-colors"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                <benefit.icon className="h-8 w-8 text-red-500" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
