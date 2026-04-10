import Link from "next/link"
import { Instagram } from "lucide-react"
import { BrandLogo } from "@/components/estou-em-dia/brand-logo"

export function Footer() {
  return (
    <footer className="bg-[#0F172A] border-t border-[#334155] py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          <div>
            <BrandLogo variant="footer" />
            <p className="mt-4 text-white/60 text-sm">
              A sua nova opção para organizar sua vida financeira.
            </p>
          </div>

          <div className="text-center">
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <nav className="flex flex-col gap-2">
              <Link href="#servicos" className="text-white/60 hover:text-white transition-colors text-sm">
                Serviços
              </Link>
              <Link href="#como-funciona" className="text-white/60 hover:text-white transition-colors text-sm">
                Como Funciona
              </Link>
              <Link href="#garantia" className="text-white/60 hover:text-white transition-colors text-sm">
                Garantia
              </Link>
              <Link href="#contato" className="text-white/60 hover:text-white transition-colors text-sm">
                Contato
              </Link>
            </nav>
          </div>

          <div className="text-right">
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <a
              href="https://instagram.com/estou.em.dia"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
              @estou.em.dia
            </a>
            <p className="mt-4 text-white/60 text-sm">
              WhatsApp:{" "}
              <a href="tel:+5512991435465" className="text-[#4ADE80] hover:underline">
                (12) 99143-5465
              </a>
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#334155] text-center">
          <p className="text-white/40 text-sm">
            Todos os direitos reservados - Estou em Dia © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
