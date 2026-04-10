import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function CTA() {
  return (
    <section id="contato" className="bg-[#0F172A] py-20">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-[#1E293B] to-[#0F172A] rounded-3xl p-8 md:p-12 lg:p-16 border border-[#334155]">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
                Tudo para você dizer:{" "}
                <span className="text-[#4ADE80]">estou em dia!</span>
              </h2>
              <p className="mt-6 text-xl text-white/80">
                Você em dia para encontrar oportunidades financeiras. A sua nova opção para organizar
                sua vida financeira.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-[#4ADE80] hover:bg-[#22C55E] text-[#0F172A] font-semibold rounded-full px-8 py-6 text-lg"
                >
                  <a
                    href="https://wa.me/5512991435465"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Entre em contato agora!
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-white/60 text-sm">
                Atendimento Exclusivo:{" "}
                <a href="tel:+5512991435465" className="text-[#4ADE80] hover:underline">
                  (12) 99143-5465
                </a>
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estou%20em%20dia-q4NcyptG6mwOnSe79hjCjzXgBjt3Mk.png"
                alt="Estou em Dia Logo"
                width={400}
                height={400}
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
