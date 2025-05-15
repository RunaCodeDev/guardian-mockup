import Image from "next/image"
import PageLayout from "@/components/page-layout"
import { Shield, Clock, Users, Award } from "lucide-react"

export default function NosotrosPage() {
  const valores = [
    {
      icon: <Shield className="h-10 w-10 text-guardian-red" />,
      title: "Protección",
      description: "Nos comprometemos a proteger lo que más valoras con sistemas de seguridad confiables.",
    },
    {
      icon: <Clock className="h-10 w-10 text-guardian-red" />,
      title: "Rapidez",
      description: "Respondemos de manera inmediata ante cualquier situación de emergencia.",
    },
    {
      icon: <Users className="h-10 w-10 text-guardian-red" />,
      title: "Servicio",
      description: "Brindamos un servicio personalizado y adaptado a las necesidades de cada cliente.",
    },
    {
      icon: <Award className="h-10 w-10 text-guardian-red" />,
      title: "Calidad",
      description: "Utilizamos tecnología de vanguardia y personal altamente capacitado.",
    },
  ]

  return (
    <PageLayout title="Sobre Nosotros" subtitle="Conoce más sobre Guardian Electrónico">
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-300 mb-4">
              Guardian Electrónico nació en Resistencia, Chaco, con la misión de brindar soluciones de seguridad
              confiables y accesibles para hogares y comercios de la región.
            </p>
            <p className="text-gray-300 mb-4">
              Con más de X años de experiencia en el mercado, nos hemos consolidado como una empresa líder en el sector,
              gracias a nuestro compromiso con la calidad y la satisfacción de nuestros clientes.
            </p>
            <p className="text-gray-300">
              Hoy contamos con un equipo de profesionales altamente capacitados y utilizamos tecnología de vanguardia
              para garantizar la seguridad de nuestros clientes las 24 horas del día, los 365 días del año.
            </p>
          </div>
          <div className="md:w-1/2">
            <div className="bg-[#222222] p-4 rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Equipo de Guardian Electrónico"
                width={600}
                height={400}
                className="rounded"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#222222] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-[#1a1a1a] p-6 rounded-lg text-center">
                <div className="flex justify-center mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold mb-2">{valor.title}</h3>
                <p className="text-gray-300">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Nuestro Equipo</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((member) => (
            <div key={member} className="bg-[#222222] p-6 rounded-lg text-center">
              <div className="w-32 h-32 rounded-full bg-gray-700 mx-auto mb-4 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=128&width=128"
                  alt={`Miembro del equipo ${member}`}
                  width={128}
                  height={128}
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">Nombre Apellido</h3>
              <p className="text-guardian-red mb-2">Cargo</p>
              <p className="text-gray-300">Breve descripción del miembro del equipo y su experiencia en la empresa.</p>
            </div>
          ))}
        </div>
      </section>
    </PageLayout>
  )
}
