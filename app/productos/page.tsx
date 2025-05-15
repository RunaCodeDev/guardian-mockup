import Image from "next/image"
import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function ProductosPage() {
  const categorias = [
    {
      id: "alarmas",
      title: "Alarmas",
      description: "Sistemas de alarma para hogares y comercios",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: "camaras",
      title: "Cámaras de seguridad",
      description: "Cámaras de vigilancia con visión nocturna y alta resolución",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: "sensores",
      title: "Sensores",
      description: "Sensores de movimiento, apertura y rotura de cristales",
      image: "/placeholder.svg?height=150&width=200",
    },
    {
      id: "control",
      title: "Control de acceso",
      description: "Sistemas de control de acceso para empresas y hogares",
      image: "/placeholder.svg?height=150&width=200",
    },
  ]

  const productosDestacados = [
    {
      id: "alarma-premium",
      title: "Alarma Premium",
      description: "Sistema de alarma inalámbrico con conexión a central de monitoreo",
      price: "$XXX",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: "camara-360",
      title: "Cámara 360°",
      description: "Cámara de seguridad con visión panorámica y detección de movimiento",
      price: "$XXX",
      image: "/placeholder.svg?height=150&width=150",
    },
    {
      id: "sensor-movimiento",
      title: "Sensor de Movimiento",
      description: "Sensor de movimiento con tecnología infrarroja y anti-mascotas",
      price: "$XXX",
      image: "/placeholder.svg?height=150&width=150",
    },
  ]

  return (
    <PageLayout title="Nuestros Productos" subtitle="Tecnología de vanguardia para tu seguridad">
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Categorías de productos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categorias.map((categoria) => (
            <Link key={categoria.id} href={`/productos/${categoria.id}`}>
              <div className="bg-[#222222] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors h-full">
                <div className="h-40 mb-4 flex items-center justify-center">
                  <Image
                    src={categoria.image || "/placeholder.svg"}
                    alt={categoria.title}
                    width={150}
                    height={150}
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{categoria.title}</h3>
                <p className="text-gray-300">{categoria.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Productos destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productosDestacados.map((producto) => (
            <div key={producto.id} className="bg-[#222222] p-6 rounded-lg">
              <div className="h-40 mb-4 flex items-center justify-center">
                <Image
                  src={producto.image || "/placeholder.svg"}
                  alt={producto.title}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-2">{producto.title}</h3>
              <p className="text-gray-300 mb-2">{producto.description}</p>
              <p className="text-guardian-red font-bold">{producto.price}</p>
              <Link
                href={`/productos/${producto.id}`}
                className="mt-4 bg-white text-black px-4 py-2 rounded-full hover:bg-gray-200 transition-colors inline-block text-sm"
              >
                Ver detalles
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/productos/todos"
            className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors inline-block"
          >
            Ver todos los productos
          </Link>
        </div>
      </section>

      <section className="bg-guardian-red/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">¿Necesitas asesoramiento para elegir tus productos?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Nuestros especialistas pueden ayudarte a elegir los productos que mejor se adapten a tus necesidades y
            presupuesto.
          </p>
          <Link
            href="/contacto"
            className="bg-guardian-red text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors inline-block"
          >
            Solicitar asesoramiento
          </Link>
        </div>
      </section>
    </PageLayout>
  )
}
