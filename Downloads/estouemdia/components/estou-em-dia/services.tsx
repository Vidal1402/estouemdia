import Image from "next/image"
import { CreditCard, TrendingUp, Shield, Clock } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Auditoria de Cartão",
    description:
      "Você sabe se todas as vendas do cartão caíram na sua conta? Pequenas diferenças podem virar grandes prejuízos.",
  },
  {
    icon: TrendingUp,
    title: "Aumento de Score",
    description:
      "Aumente seu score nos órgãos de protesto e abra as portas para crédito, financiamentos e melhores condições no mercado.",
  },
  {
    icon: Shield,
    title: "Blindagem 12 Meses",
    description:
      "Fique seguro contra futuros apontamentos no seu CPF ou CNPJ! Proteção contínua para sua vida financeira.",
  },
  {
    icon: Clock,
    title: "Resultado em até 30 Dias",
    description:
      "Em um período de 30 a 45 dias, resolvemos todos os apontamentos dos órgãos de proteção ao crédito.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="bg-[#2563EB] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Você confere as <span className="text-[#4ADE80]">taxas</span> da sua{" "}
            <span className="text-[#4ADE80]">maquininha</span>?
          </h2>
          <p className="mt-4 text-xl text-white/90">
            Pequenas diferenças podem virar <strong>grandes prejuízos</strong>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-colors"
            >
              <div className="w-14 h-14 bg-[#4ADE80] rounded-xl flex items-center justify-center mb-4">
                <service.icon className="w-7 h-7 text-[#0F172A]" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-white/80 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estou%20em%20dia%20Aumentamos%20o%20seu%20score%21%20Uma%20oportunidade%20para%20voce%CC%82%20e%20sua%20empresa%20superarem%20desafios%20financeiros%20com%20confianc%CC%A7a.%20%281%29-ovBFWtz69Hct1DEQBK04mva32wdQ3T.png"
              alt="Maquininha de cartão"
              width={500}
              height={700}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Seu <span className="text-[#4ADE80]">lucro</span> pode virar custo.
            </h3>
            <p className="text-xl text-white/90 mb-6">
              Nem sempre o <strong>valor da venda</strong> é o que chega na conta.
            </p>
            <a
              href="https://wa.me/5512991435465"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-semibold rounded-full px-8 py-4 text-lg transition-colors"
            >
              Entre em contato e faça uma <span className="text-[#4ADE80]">auditoria</span>.
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
