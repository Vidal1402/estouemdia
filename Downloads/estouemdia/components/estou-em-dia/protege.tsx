"use client"

import { Shield } from "lucide-react"
import { cardMuted, container, sectionProtege } from "@/lib/section-ui"
import { cn } from "@/lib/utils"

export function Protege() {
  return (
    <section className={sectionProtege}>
      <div className={cn(container, "max-w-2xl")}>
        <p className="text-center text-sm font-semibold text-[#bbf7d0]">Protege</p>

        <h2 className="mt-3 text-center text-2xl font-bold leading-snug text-white md:text-[1.65rem]">
          Depois que o nome limpa, ainda pode aparecer coisa errada de novo. Esse serviço é pra você não levar susto.
        </h2>

        <div className={cn(cardMuted, "mt-10 p-6 md:p-8")}>
          <div className="flex gap-4 md:gap-5">
            <Shield className="mt-0.5 h-8 w-8 shrink-0 text-[#4ADE80]" strokeWidth={1.75} aria-hidden />
            <div className="space-y-3 text-[15px] leading-relaxed text-slate-200">
              <p>
                A gente fica de olho em sinais de novo apontamento no seu{" "}
                <strong className="font-semibold text-white">CPF</strong> ou{" "}
                <strong className="font-semibold text-white">CNPJ</strong> e te avisa antes de virar dor de cabeça de
                novo.
              </p>
              <p className="text-slate-400">
                Não é milagre: é acompanhamento. Se algo fugir do combinado, você sabe na hora.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Dúvida se isso vale pra você? Chama no WhatsApp e pergunta sem vergonha.
        </p>
      </div>
    </section>
  )
}
