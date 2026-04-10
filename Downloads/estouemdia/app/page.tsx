import { Hero } from "@/components/estou-em-dia/hero"
import { Benefits } from "@/components/estou-em-dia/benefits"
import { Process } from "@/components/estou-em-dia/process"
import { Legal } from "@/components/estou-em-dia/legal"
import { Consultoria } from "@/components/estou-em-dia/consultoria"
import { Protege } from "@/components/estou-em-dia/protege"
import { Garantia } from "@/components/estou-em-dia/garantia"
import { Contato } from "@/components/estou-em-dia/contato"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Benefits />
      <Process />
      <Legal />
      <Consultoria />
      <Protege />
      <Garantia />
      <Contato />
    </main>
  )
}
