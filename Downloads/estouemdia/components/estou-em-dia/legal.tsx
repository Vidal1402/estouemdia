"use client"

import { BookOpen, ListOrdered } from "lucide-react"
import { SectionHeading } from "@/components/estou-em-dia/section-heading"
import { cn } from "@/lib/utils"
import { cardMuted, containerWide, sectionBlue } from "@/lib/section-ui"

export function Legal() {
  const steps = [
    {
      number: "1º",
      title: "Diagnóstico",
      description: "A gente vê suas dívidas e o que dá pra resolver sem enrolação.",
    },
    {
      number: "2º",
      title: "Proposta",
      description: "Com a documentação em ordem, você recebe a proposta de pagamento.",
    },
    {
      number: "3º",
      title: "Liberação nos órgãos",
      description: "Em cerca de 30 a 45 dias, tratamos os apontamentos nos cadastros de crédito.",
    },
    {
      number: "4º",
      title: "Crédito de novo",
      description: "Nome regularizado para você voltar a negociar com banco e loja.",
    },
  ]

  return (
    <section id="cases" className={sectionBlue}>
      <div className={cn(containerWide, "relative z-10")}>
        <SectionHeading
          variant="blue"
          align="center"
          eyebrow="Lei e transparência"
          title={
            <>
              Seu direito no papel,{" "}
              <span className="text-[#bbf7d0]">o passo a passo na prática</span>
            </>
          }
          description="O Código de Defesa do Consumidor vale para cobrança abusiva — e a gente segue um fluxo claro para te ajudar."
          className="mb-12 max-w-2xl md:mb-14"
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-start">
          <div className={cn(cardMuted, "p-8 md:p-9")}>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white">
              <BookOpen className="h-4 w-4" strokeWidth={2} />
              CDC
            </div>
            <h3 className="text-sm font-medium text-white/80">Artigo que nos respalda</h3>
            <p className="mt-1 text-2xl font-bold tracking-tight text-white md:text-3xl">Lei nº 8.078</p>

            <blockquote className="mt-6 border-l-[3px] border-[#4ADE80] pl-5">
              <p className="text-[15px] leading-relaxed text-white/95 md:text-base">
                <span className="font-semibold text-[#bbf7d0]">Art. 42.</span> Na cobrança de débitos, o consumidor
                inadimplente não será exposto a ridículo, nem será submetido a qualquer tipo de constrangimento ou
                ameaça.
              </p>
            </blockquote>
            <p className="mt-5 text-sm leading-relaxed text-white/65">
              Cobrança tem limite: respeito ao consumidor vem antes de pressão ou exposição.
            </p>
          </div>

          <div>
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-[#4ADE80]">
                <ListOrdered className="h-5 w-5" strokeWidth={2} />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-white/55">Na ordem</p>
                <h3 className="text-lg font-bold text-white md:text-xl">Como a gente trabalha</h3>
              </div>
            </div>

            <ol className="space-y-3">
              {steps.map((step, index) => (
                <li key={step.title} className={cn(cardMuted, "p-4 md:p-5")}>
                  <div className="flex gap-3">
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#4ADE80] text-xs font-bold text-[#0f172a]"
                      aria-hidden
                    >
                      {step.number}
                    </span>
                    <div className="min-w-0 pt-0.5">
                      <h4 className="font-semibold text-white">{step.title}</h4>
                      <p className="mt-1 text-sm leading-relaxed text-white/75">{step.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
