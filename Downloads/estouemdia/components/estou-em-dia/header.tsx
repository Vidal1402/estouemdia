"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F172A]/95 backdrop-blur-sm border-b border-[#334155]">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estou%20em%20dia%20%282%29-AtOTMgHPN7WvuPul9hLsHFWkaviLxX.png"
            alt="Estou em Dia"
            width={150}
            height={60}
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#servicos" className="text-white/80 hover:text-white transition-colors">
            Serviços
          </Link>
          <Link href="#como-funciona" className="text-white/80 hover:text-white transition-colors">
            Como Funciona
          </Link>
          <Link href="#garantia" className="text-white/80 hover:text-white transition-colors">
            Garantia
          </Link>
          <Link href="#contato" className="text-white/80 hover:text-white transition-colors">
            Contato
          </Link>
        </nav>

        <Button
          asChild
          className="hidden md:flex bg-[#4ADE80] hover:bg-[#22C55E] text-[#0F172A] font-semibold rounded-full px-6"
        >
          <a href="https://wa.me/5512991435465" target="_blank" rel="noopener noreferrer">
            Fale Conosco
          </a>
        </Button>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#0F172A] border-t border-[#334155] px-4 py-6 flex flex-col gap-4">
          <Link
            href="#servicos"
            className="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Serviços
          </Link>
          <Link
            href="#como-funciona"
            className="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Como Funciona
          </Link>
          <Link
            href="#garantia"
            className="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Garantia
          </Link>
          <Link
            href="#contato"
            className="text-white/80 hover:text-white transition-colors py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Contato
          </Link>
          <Button
            asChild
            className="bg-[#4ADE80] hover:bg-[#22C55E] text-[#0F172A] font-semibold rounded-full mt-2"
          >
            <a href="https://wa.me/5512991435465" target="_blank" rel="noopener noreferrer">
              Fale Conosco
            </a>
          </Button>
        </nav>
      )}
    </header>
  )
}
