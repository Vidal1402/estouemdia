"use client"

import { Phone, Instagram, MessageCircle, ArrowUpRight } from "lucide-react"

const WA = "https://wa.me/5512991435465"
const TEL = "tel:+5512991435465"

export function Contato() {
  return (
    <section
      id="contato"
      className="relative scroll-mt-24 overflow-hidden border-t border-emerald-500/15 bg-[#050b14] px-4 py-24 md:scroll-mt-28 md:px-8 md:py-32"
    >
      {/* Fundo em camadas */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_-30%,rgba(30,58,138,0.35),transparent_55%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_90%_100%,rgba(74,222,128,0.14),transparent_50%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(15,23,42,0.4)_40%,#020617_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:48px_48px]"
        aria-hidden
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="grid items-stretch gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Coluna texto */}
          <div className="flex flex-col justify-center lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#4ADE80]">Contato</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.15] tracking-tight text-white md:text-4xl lg:text-[2.75rem]">
              Bora conversar?
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400 md:text-lg">
              Escolhe o canal que for mais fácil. A gente atende por WhatsApp, atende ligação e posta novidades no
              Instagram.
            </p>

            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:mt-12">
              <p className="text-xs font-medium uppercase tracking-wider text-slate-500">A meta</p>
              <p className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl">
                estou em <span className="text-[#4ADE80]">dia!</span>
              </p>
            </div>
          </div>

          {/* Coluna ações */}
          <div className="lg:col-span-7">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50 p-1 shadow-[0_32px_80px_-24px_rgba(0,0,0,0.75)] backdrop-blur-md">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#4ADE80]/10 blur-3xl" aria-hidden />
              <div className="absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-blue-600/10 blur-3xl" aria-hidden />

              <div className="relative rounded-[1.35rem] bg-gradient-to-br from-slate-800/90 to-slate-950/95 p-6 md:p-8">
                <p className="text-center text-sm font-medium text-slate-400">Canal preferido</p>

                <a
                  href={WA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 flex w-full items-center justify-between gap-4 rounded-2xl bg-[#4ADE80] px-5 py-4 text-[#052e16] shadow-lg shadow-emerald-500/20 transition hover:bg-[#3fcd70] md:py-5"
                >
                  <span className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#052e16]/10">
                      <MessageCircle className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <span className="text-left">
                      <span className="block text-xs font-semibold uppercase tracking-wide text-[#052e16]/70">
                        WhatsApp
                      </span>
                      <span className="text-lg font-bold">(12) 99143-5465</span>
                    </span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 shrink-0 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <a
                    href={TEL}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10">
                      <Phone className="h-5 w-5 text-[#4ADE80]" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">Telefone</span>
                      <span className="text-sm font-semibold">Ligar agora</span>
                    </span>
                  </a>

                  <a
                    href="https://instagram.com/estou.em.dia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-white transition hover:border-white/20 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-600">
                      <Instagram className="h-5 w-5 text-white" strokeWidth={2} />
                    </span>
                    <span>
                      <span className="block text-xs text-slate-500">Instagram</span>
                      <span className="text-sm font-semibold">@estou.em.dia</span>
                    </span>
                  </a>
                </div>

                <p className="mt-6 text-center text-xs leading-relaxed text-slate-500">
                  Segunda a sexta, horário comercial — fora disso manda no Zap que a gente vê quando abrir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
