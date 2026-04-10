"use client"

import Image from "next/image"
import { CheckCircle, Bell } from "lucide-react"

export function Benefits() {
  const benefits = [
    "Limpeza de CPF e CNPJ",
    "Restauração de Score",
    "Blindagem 12 meses",
    "em até 30 dias",
    "100% dentro da Lei!",
  ]

  return (
    <section
      id="beneficios"
      className="scroll-mt-24 border-t border-slate-200 bg-white pb-16 pt-10 md:scroll-mt-28 md:pb-24 md:pt-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-14 lg:gap-16">
          {/* Left side - Image with score card */}
          <div className="relative md:-mx-2 lg:mx-0">
            {/* Score Card */}
            <div className="absolute left-4 top-4 z-10 rounded-xl bg-white p-4 shadow-lg sm:left-5 sm:top-5">
              <div className="flex items-center gap-3">
                <div className="relative w-16 h-16">
                  <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 64 64">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#E5E7EB"
                      strokeWidth="6"
                      fill="none"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="#4ADE80"
                      strokeWidth="6"
                      fill="none"
                      strokeDasharray="175.93"
                      strokeDashoffset="0.18"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-[#0F172A] font-bold text-lg">999</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500">de 1000</p>
                  <p className="text-xs text-gray-600">Seu score de crédito</p>
                  <p className="text-sm font-semibold text-[#4ADE80]">está excelente!</p>
                </div>
              </div>
            </div>

            {/* Main Image — maior */}
            <div className="relative overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200/70">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/medium-shot-old-woman-library-YDFDjb4OxLlIvgE4NL4lAsaXo3B7DU.jpg"
                alt="Senhora sorrindo"
                width={960}
                height={1200}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-auto w-full min-h-[380px] object-cover object-center sm:min-h-[440px] md:min-h-[min(70vh,560px)] lg:min-h-[min(78vh,640px)]"
              />
            </div>

            {/* Notification bar */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg sm:bottom-5 sm:left-5 sm:right-5">
              <Bell className="w-5 h-5 text-[#2563EB]" />
              <span className="text-sm text-[#0F172A] font-medium">Você não possui dívidas negativadas</span>
              <span className="ml-auto bg-[#4ADE80] text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">0</span>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="relative">
            {/* Leaf icon */}
            <div className="mb-6">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                <path d="M12 36C12 36 16 28 24 24C32 20 40 12 40 12C40 12 36 20 28 24C20 28 12 36 12 36Z" fill="#4ADE80"/>
                <path d="M20 36C20 36 22 30 28 27C34 24 40 18 40 18C40 18 38 24 32 27C26 30 20 36 20 36Z" fill="#0F172A"/>
              </svg>
            </div>

            <h3 className="mb-2 text-3xl font-bold leading-tight text-[#0F172A] md:text-4xl">
              Limpe seu nome agora,
            </h3>
            <p className="mb-8 text-3xl font-bold leading-tight text-[#4ADE80] md:text-4xl">
              pague suas dívidas depois!
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-[#4ADE80] flex-shrink-0" />
                  <span className="text-[#0F172A] text-lg font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Legal stamp */}
            <div className="inline-block transform rotate-[-8deg] mb-8">
              <p className="text-[#4ADE80] text-xl md:text-2xl font-bold uppercase tracking-wide">
                É SEU<br />DIREITO POR LEI!
              </p>
            </div>

            {/* Logo */}
            <div className="flex justify-end">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estou%20em%20dia%20%282%29-AtOTMgHPN7WvuPul9hLsHFWkaviLxX.png"
                alt="Estou em Dia"
                width={150}
                height={75}
                className="h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
