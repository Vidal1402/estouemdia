import Image from "next/image"

/** Logo oficial — mesma origem usada no rodapé */
export const BRAND_LOGO_URL =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/estou%20em%20dia%20%282%29-AtOTMgHPN7WvuPul9hLsHFWkaviLxX.png"

const dimensions = {
  nav: { width: 180, height: 72, className: "h-10 w-auto sm:h-11 md:h-[52px]" },
  hero: { width: 320, height: 128, className: "h-[4.5rem] w-auto sm:h-24 md:h-28" },
  footer: { width: 180, height: 72, className: "h-12 w-auto md:h-14" },
} as const

type BrandLogoProps = {
  variant?: keyof typeof dimensions
  className?: string
  priority?: boolean
}

export function BrandLogo({ variant = "nav", className = "", priority }: BrandLogoProps) {
  const d = dimensions[variant]
  return (
    <Image
      src={BRAND_LOGO_URL}
      alt="Estou em Dia"
      width={d.width}
      height={d.height}
      priority={priority}
      className={`${d.className} object-contain object-left ${className}`.trim()}
    />
  )
}
