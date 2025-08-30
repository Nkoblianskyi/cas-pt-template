import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Política de Cookies</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">O que são Cookies?</h2>
                <p className="text-gray-300">
                  Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita o
                  SitesDeMelhoresCasinos. Estes ficheiros ajudam-nos a melhorar a sua experiência de navegação, recordar as
                  suas preferências e fornecer-lhe conteúdo personalizado sobre os melhores casinos online em Portugal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Tipos de Cookies Utilizados</h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-amber-500 mb-2">Cookies Essenciais</h3>
                    <p className="text-gray-300">
                      Necessários para o funcionamento básico do website. Permitem navegação segura, acesso às
                      classificações de casinos e funcionalidades de comparação. Estes cookies não podem ser
                      desativados.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-500 mb-2">Cookies de Análise</h3>
                    <p className="text-gray-300">
                      Recolhem informações sobre como utiliza o nosso site de classificações de casinos. Ajudam-nos a
                      compreender quais casinos são mais populares e a melhorar as nossas recomendações.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-500 mb-2">Cookies de Personalização</h3>
                    <p className="text-gray-300">
                      Recordam as suas preferências de casinos, jogos favoritos e critérios de pesquisa para
                      personalizar a sua experiência no CasinoTopPortugal.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-amber-500 mb-2">Cookies de Afiliação</h3>
                    <p className="text-gray-300">
                      Rastreiam as suas visitas aos casinos parceiros através dos nossos links para garantir que recebe
                      os melhores bónus e ofertas disponíveis.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Gestão de Cookies</h2>
                <p className="text-gray-300 mb-4">Pode controlar os cookies das seguintes formas:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>• Aceitar ou rejeitar cookies através do nosso banner</li>
                  <li>• Configurar as definições do seu navegador</li>
                  <li>• Eliminar cookies existentes a qualquer momento</li>
                  <li>• Desativar cookies de terceiros nas definições do navegador</li>
                </ul>
                <p className="text-gray-300 mt-4">
                  <strong>Nota:</strong> Desativar cookies pode afetar a funcionalidade do site e a qualidade das nossas
                  recomendações de casinos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Cookies de Terceiros</h2>
                <p className="text-gray-300">
                  Utilizamos serviços de terceiros como Google Analytics e cookies de casinos parceiros para melhorar a
                  sua experiência. Estes serviços têm as suas próprias políticas de privacidade.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Atualizações</h2>
                <p className="text-gray-300">
                  Esta política pode ser atualizada para refletir mudanças nos nossos serviços ou regulamentações.
                  Recomendamos que consulte esta página regularmente.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">Contacto</h2>
                <p className="text-gray-300">
                  Para questões sobre cookies, contacte-nos: <strong>cookies@sitesdemelhorescasinos.com</strong>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
