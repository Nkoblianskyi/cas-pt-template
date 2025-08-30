import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />

      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Política de Privacidade</h1>

          <div className="prose prose-invert max-w-none">
            <div className="bg-gray-900 rounded-lg p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">1. Informações que Recolhemos</h2>
                <p className="text-gray-300 mb-4">
                  O CasinoTopPortugal recolhe informações para fornecer as melhores classificações e recomendações de
                  casinos online em Portugal:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>
                    • <strong>Dados de Contacto:</strong> Nome, email quando subscreve newsletters
                  </li>
                  <li>
                    • <strong>Dados de Navegação:</strong> Páginas visitadas, casinos consultados, tempo no site
                  </li>
                  <li>
                    • <strong>Preferências:</strong> Jogos favoritos, critérios de pesquisa de casinos
                  </li>
                  <li>
                    • <strong>Dados Técnicos:</strong> Endereço IP, tipo de navegador, dispositivo utilizado
                  </li>
                  <li>
                    • <strong>Dados de Afiliação:</strong> Cliques em links de casinos parceiros
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">2. Como Utilizamos os Seus Dados</h2>
                <p className="text-gray-300 mb-4">Os seus dados são utilizados para:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>
                    • <strong>Classificações Precisas:</strong> Melhorar as nossas avaliações de casinos
                  </li>
                  <li>
                    • <strong>Recomendações Personalizadas:</strong> Sugerir casinos adequados ao seu perfil
                  </li>
                  <li>
                    • <strong>Comunicações:</strong> Enviar alertas sobre novos casinos e bónus exclusivos
                  </li>
                  <li>
                    • <strong>Análise de Tendências:</strong> Compreender preferências dos jogadores portugueses
                  </li>
                  <li>
                    • <strong>Segurança:</strong> Proteger contra fraudes e atividades suspeitas
                  </li>
                  <li>
                    • <strong>Parcerias:</strong> Negociar melhores ofertas com casinos licenciados
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">3. Partilha de Informações</h2>
                <p className="text-gray-300 mb-4">
                  Nunca vendemos os seus dados pessoais. Podemos partilhar informações limitadas com:
                </p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>
                    • <strong>Casinos Parceiros:</strong> Apenas dados necessários para ofertas exclusivas
                  </li>
                  <li>
                    • <strong>Fornecedores de Serviços:</strong> Para análise de dados e marketing (sob contrato)
                  </li>
                  <li>
                    • <strong>Autoridades Legais:</strong> Quando exigido por lei ou regulamentação
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">4. Segurança e Proteção</h2>
                <p className="text-gray-300">
                  Implementamos medidas de segurança rigorosas incluindo encriptação SSL, armazenamento seguro de dados,
                  acesso restrito às informações pessoais e monitorização contínua contra ameaças. Os seus dados são
                  tratados com o mesmo nível de segurança que exigimos dos casinos que recomendamos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">5. Os Seus Direitos (RGPD)</h2>
                <p className="text-gray-300 mb-4">Como residente na UE, tem direito a:</p>
                <ul className="text-gray-300 space-y-2 ml-6">
                  <li>
                    • <strong>Acesso:</strong> Consultar todos os dados que temos sobre si
                  </li>
                  <li>
                    • <strong>Retificação:</strong> Corrigir informações incorretas ou desatualizadas
                  </li>
                  <li>
                    • <strong>Eliminação:</strong> Solicitar a remoção dos seus dados pessoais
                  </li>
                  <li>
                    • <strong>Portabilidade:</strong> Receber os seus dados em formato estruturado
                  </li>
                  <li>
                    • <strong>Oposição:</strong> Opor-se ao processamento para marketing direto
                  </li>
                  <li>
                    • <strong>Limitação:</strong> Restringir o processamento em certas circunstâncias
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">6. Retenção de Dados</h2>
                <p className="text-gray-300">
                  Mantemos os seus dados apenas pelo tempo necessário para os fins descritos nesta política. Dados de
                  navegação são mantidos por 2 anos, dados de contacto até cancelar a subscrição, e dados de afiliação
                  por 5 anos para fins contabilísticos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">7. Jogo Responsável</h2>
                <p className="text-gray-300">
                  O CasinoTopPortugal promove o jogo responsável. Não recolhemos dados sobre hábitos de jogo
                  individuais, mas fornecemos informações sobre ferramentas de jogo responsável disponíveis nos casinos
                  que recomendamos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">8. Contacto e Reclamações</h2>
                <p className="text-gray-300">
                  Para exercer os seus direitos ou esclarecer dúvidas sobre privacidade:
                  <br />
                  <strong>Email:</strong> privacidade@sitesdemelhorescasinos.com
                  <br />
                  <strong>Resposta:</strong> Dentro de 30 dias
                  <br />
                  <strong>Autoridade de Controlo:</strong> CNPD (Comissão Nacional de Proteção de Dados)
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-red-600 mb-4">9. Alterações à Política</h2>
                <p className="text-gray-300">
                  Esta política pode ser atualizada para refletir mudanças na legislação ou nos nossos serviços.
                  Alterações significativas serão comunicadas por email aos utilizadores registados.
                </p>
                <p className="text-gray-300 mt-4">
                  <strong>Última atualização:</strong> Janeiro 2025
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
