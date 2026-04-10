import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Supermarket() {
  return (
    <section className="bg-[#0F172A] py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Dono de <span className="text-[#4ADE80]">supermercado</span>, você sabe se todas as{" "}
              <span className="text-[#4ADE80]">vendas do cartão</span> caíram na sua conta?
            </h2>
            <p className="mt-6 text-xl text-white/80">
              Não perca dinheiro, marque sua <span className="text-[#4ADE80] font-semibold">auditoria</span>.
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold rounded-full px-8 py-6 text-lg"
            >
              <a href="https://wa.me/5512991435465" target="_blank" rel="noopener noreferrer">
                Fale com os nossos consultores
              </a>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estou%20em%20dia%20Aumentamos%20o%20seu%20score%21%20Uma%20oportunidade%20para%20voce%CC%82%20e%20sua%20empresa%20superarem%20desafios%20financeiros%20com%20confianc%CC%A7a.%20%283%29-I37XdTmaaqKjvQmVlC4UbrroSUdsWO.png"
              alt="Supermercado - vendas do cartão"
              width={500}
              height={700}
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
