import { Search, FileText, Unlock, CreditCard } from "lucide-react"

const steps = [
  {
    number: "1º",
    icon: Search,
    title: "Diagnóstico",
    description: "Vamos analisar suas dívidas e encontrar a melhor solução de reabilitação para você.",
  },
  {
    number: "2º",
    icon: FileText,
    title: "Proposta",
    description: "Com o processo administrativo pronto, você receberá uma proposta de pagamento facilitado.",
  },
  {
    number: "3º",
    icon: Unlock,
    title: "Liberdade",
    description:
      "Em um período de 30 a 45 dias, resolvemos todos os apontamentos dos órgãos de proteção ao crédito.",
  },
  {
    number: "4º",
    icon: CreditCard,
    title: "Crédito",
    description: "Com o seu nome limpo você já está pronto para novas oportunidades de crédito!",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[#0F172A] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance">
            Nosso <span className="text-[#4ADE80]">Processo</span>
          </h2>
          <p className="mt-4 text-xl text-white/80 max-w-2xl mx-auto">
            A Estou Em Dia te ajuda a transformar suas dívidas em recomeços.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-[#334155] -translate-x-1/2 z-0" />
              )}

              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2563EB] mb-6">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="inline-block bg-[#4ADE80] text-[#0F172A] font-bold text-lg px-4 py-1 rounded-full mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/70 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
