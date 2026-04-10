import Image from "next/image"
import { ShieldCheck } from "lucide-react"

export function Guarantee() {
  return (
    <section id="garantia" className="bg-[#2563EB] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6%20%281%29-sWSLguFWUnInXJCiBLT5Bj0nOB10o5.png"
              alt="Aumente seu score"
              width={500}
              height={700}
              className="w-full max-w-md mx-auto"
            />
          </div>
          <div>
            <div className="inline-flex items-center gap-3 bg-white/10 rounded-full px-6 py-3 mb-6">
              <ShieldCheck className="w-6 h-6 text-[#4ADE80]" />
              <span className="text-white font-semibold">Garantia Total</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              O seu risco é <span className="text-[#4ADE80]">zero</span>!
            </h2>
            <p className="mt-6 text-xl text-white/90 leading-relaxed">
              O risco é todo nosso! Seu nome limpo ou nós devolvemos{" "}
              <strong>100% do seu dinheiro</strong>, centavo por centavo, simples assim!
            </p>
            <div className="mt-8 bg-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Base Legal: Lei 8.078 do CDC</h3>
              <p className="text-white/80 italic">
                Art. 42. Na cobrança de débitos, o consumidor inadimplente não será exposto a ridículo,
                nem será submetido a qualquer tipo de constrangimento ou ameaça.
              </p>
            </div>
            <p className="mt-6 text-lg text-white font-semibold">
              É SEU <span className="text-[#4ADE80]">DIREITO POR LEI</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
