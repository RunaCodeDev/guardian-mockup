import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a1a1a] px-4 py-4 flex justify-between items-center border-b border-gray-800 shadow-md">
      <div className="container mx-auto flex w-full justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/placeholder.svg?height=40&width=150"
            alt="Guardian Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>
        <nav className="hidden md:flex space-x-8">
          <Link href="/nosotros" className="hover:text-gray-300 transition-colors">
            Nosotros
          </Link>
          <Link href="/servicios" className="hover:text-gray-300 transition-colors">
            Servicios
          </Link>
          <Link href="/productos" className="hover:text-gray-300 transition-colors">
            Productos
          </Link>
          <Link href="/contacto" className="hover:text-gray-300 transition-colors">
            Contacto
          </Link>
          <Link href="/soporte" className="hover:text-gray-300 transition-colors">
            Soporte
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
