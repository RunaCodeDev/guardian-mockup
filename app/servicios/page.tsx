import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import PageLayout from "@/components/page-layout"

export default function ServiciosPage() {
  const servicios = [
    {
      id: "vigilancia",
      title: "Vigilancia motorizada",
      description: "Equipo listo para salir hacia tu domicilio antes de sonar la alarma.",
      longDescription:
        "Nuestro servicio de vigilancia motorizada garantiza una respuesta rápida ante cualquier emergencia. Contamos con personal capacitado y vehículos equipados para llegar a tu domicilio en el menor tiempo posible.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: "monitoreo",
      title: "Monitoreo 24/7",
      description: "Atendemos cada evento registrado brindando atención inmediata.",
      longDescription:
        "Nuestro centro de monitoreo funciona las 24 horas del día, los 7 días de la semana. Cada alerta es atendida por operadores capacitados que evalúan la situación y coordinan la respuesta adecuada.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: "instalacion",
      title: "Instalación limpia y rápida",
      description: "Especialistas propios eficientes que se preocupan por tu hogar.",
      longDescription:
        "Nuestro equipo de instaladores profesionales realiza un trabajo limpio y eficiente, respetando la estética de tu hogar. Utilizamos tecnología inalámbrica para minimizar el impacto visual.",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: "mantenimiento",
      title: "Mantenimiento preventivo",
      description: "Revisiones periódicas para garantizar el funcionamiento óptimo de tu sistema.",
      longDescription:
        "Realizamos mantenimiento preventivo de todos los componentes de tu sistema de seguridad para garantizar su correcto funcionamiento en todo momento.",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  return (
    <PageLayout title="Nuestros Servicios" subtitle="Soluciones de seguridad adaptadas a tus necesidades">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicios.map((servicio) => (
            <div key={servicio.id} className="bg-[#222222] p-6 rounded-lg">
              <div className="h-48 mb-4 flex items-center justify-center">
                <Image
                  src={servicio.image || "/placeholder.svg"}
                  alt={servicio.title}
                  width={200}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{servicio.title}</h3>
              <p className="text-gray-300 mb-2">{servicio.description}</p>
              <p className="text-gray-400 mb-4">{servicio.longDescription}</p>
              <Link
                href={`/servicios/${servicio.id}`}
                className="inline-flex items-center text-guardian-red hover:underline"
              >
                Más información <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-6">¿Necesitas un servicio personalizado?</h2>
          <Link
            href="/contacto"
            className="bg-guardian-red text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors inline-block"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
