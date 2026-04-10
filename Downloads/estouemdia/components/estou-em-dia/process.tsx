"use client"

import { Search, TrendingUp, FileText, Scale, CreditCard, Landmark } from "lucide-react"
import { SectionHeading } from "@/components/estou-em-dia/section-heading"
import { cn } from "@/lib/utils"
import { cardMuted, containerWide, sectionDark } from "@/lib/section-ui"

export function Process() {
  const steps = [
    {
      icon: Search,
      title: "Consulta",
      description: "Olhamos seu CPF, o que consta nos órgãos e o que dá pra atacar primeiro.",
      accent: "blue" as const,
    },
    {
      icon: TrendingUp,
      title: "Nome nos cadastros",
      description: "Foco em tirar o que não deveria estar ali e melhorar como você aparece.",
      accent: "green" as const,
    },
    {
      icon: FileText,
      title: "Dívidas em dia",
      description: "Negociação, parcelamento e baixa quando o acordo fecha.",
      accent: "blue" as const,
    },
    {
      icon: Scale,
      title: "Parte jurídica",
      description: "Só entra advogado quando o caso pede — a gente te explica antes.",
      accent: "green" as const,
    },
    {
      icon: CreditCard,
      title: "Crédito de novo",
      description: "Objetivo: você voltar a pedir empréstimo ou cartão sem susto.",
      accent: "blue" as const,
    },
  ]

  const iconWrap = (accent: "blue" | "green") =>
    cn(
      "mb-4 flex h-10 w-10 items-center justify-center rounded-lg text-white",
      accent === "green" ? "bg-emerald-600" : "bg-blue-600",
    )

  return (
    <section id="processo" className={sectionDark}>
      <div className={cn(containerWide, "relative z-10")}>
        <SectionHeading
          variant="dark"
          align="center"
          eyebrow="Como funciona"
          title={
            <>
              Cinco passos até você{" "}
              <span className="text-[#4ADE80]">respirar de novo no crédito</span>
            </>
          }
          description="Nada de promessa milagrosa: a gente segue o que a lei permite e te mantém informado em cada etapa."
          className="mb-14 max-w-2xl md:mb-16"
        />

        <div className="mb-16 hidden gap-4 md:grid md:grid-cols-2 lg:mb-20 lg:grid-cols-5">
          {steps.map((step, index) => (
            <div key={step.title} className={cn(cardMuted, "flex flex-col p-5")}>
              <div className={iconWrap(step.accent)}>
                <step.icon className="h-5 w-5" strokeWidth={2} />
              </div>
              <h3 className="text-[0.95rem] font-semibold leading-snug text-white">{step.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">{step.description}</p>
              <span className="mt-4 text-xs font-medium tabular-nums text-slate-500">{index + 1}/5</span>
            </div>
          ))}
        </div>

        <div className="relative mb-16 space-y-4 md:hidden">
          <div className="absolute bottom-2 left-[1.125rem] top-2 w-px bg-slate-600" aria-hidden />
          {steps.map((step, index) => (
            <div key={step.title} className="relative flex gap-4">
              <div className={cn(iconWrap(step.accent), "relative z-10 mb-0 h-9 w-9 shrink-0 rounded-full")}>
                <step.icon className="h-4 w-4" strokeWidth={2} />
              </div>
              <div className={cn(cardMuted, "min-w-0 flex-1 p-4")}>
                <div className="flex items-baseline justify-between gap-2">
                  <h3 className="text-sm font-semibold text-white">{step.title}</h3>
                  <span className="text-xs text-slate-500">{index + 1}/5</span>
                </div>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={cn(cardMuted, "p-8 text-center md:p-10")}>
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/80 text-[#4ADE80]">
            <Landmark className="h-6 w-6" strokeWidth={1.75} />
          </div>
          <p className="mb-2 text-xs font-medium uppercase tracking-widest text-[#4ADE80]">Cadastros e protestos</p>
          <h3 className="text-xl font-bold leading-snug text-white md:text-2xl">
            Quando regulariza, isso aparece onde o banco <span className="text-[#4ADE80]">realmente olha</span>
          </h3>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-400 md:text-base">
            SPC, Serasa, cartório de protesto — o histórico precisa bater com a situação de hoje, não com o que ficou para
            trás.
          </p>
        </div>
      </div>
    </section>
  )
}
