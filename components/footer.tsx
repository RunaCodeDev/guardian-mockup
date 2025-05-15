import Link from "next/link"
import { Instagram, Linkedin, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="w-8 h-8 bg-guardian-red rounded-full mr-3"></div>
            <span className="text-lg font-semibold">Guardian Electronico</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-0">
            <Link href="/nosotros" className="hover:text-gray-300 transition-colors text-sm">
              Nosotros
            </Link>
            <Link href="/servicios" className="hover:text-gray-300 transition-colors text-sm">
              Servicios
            </Link>
            <Link href="/productos" className="hover:text-gray-300 transition-colors text-sm">
              Productos
            </Link>
            <Link href="/contacto" className="hover:text-gray-300 transition-colors text-sm">
              Contacto
            </Link>
            <Link href="/soporte" className="hover:text-gray-300 transition-colors text-sm">
              Soporte
            </Link>
          </nav>
          <div className="flex space-x-4">
            <Link href="https://instagram.com" className="hover:text-gray-300 transition-colors">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="https://linkedin.com" className="hover:text-gray-300 transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" className="hover:text-gray-300 transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Guardian Electronico. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
