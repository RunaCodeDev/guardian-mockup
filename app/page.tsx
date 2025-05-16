import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeatureCard from "@/components/FeatureCard";
import InstallationStep from "@/components/InstallationStep";
import TestimonialCard from "@/components/TestimonioCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1a1a1a] text-white  overflow-x-hidden">
      {/* Header */}
      <Header />

      <main className="w-full flex flex-col ">
        {/* Hero Section */}
        <section className="relative flex w-full items-center py-16 md:py-24">
          <video
            className="absolute inset-0 w-screen h-full object-cover opacity-10 -z-5"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            src="/videos/video.mp4"
          ></video>
          <div className="container mx-auto px-4 relative flex flex-col md:flex-row items-center w-full justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Seguridad las 24 horas.
              </h1>
              <p className="text-xl mb-8">
                Sistemas de seguridad{" "}
                <span className="font-bold">completos</span> y{" "}
                <span className="font-bold">modernos</span>
              </p>
              <div className="flex space-x-4">
                <Link
                  href="/contacto"
                  className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition-colors"
                >
                  Contáctanos
                </Link>
                <Link
                  href="/servicios"
                  className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition-colors"
                >
                  Servicios
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="w-48 md:w-64 lg:w-80 h-48 md:h-64 lg:h-80 flex items-center justify-center">
                <div className="w-full h-full relative  flex items-center justify-center">
                  <Image
                    src="/logo-hero.png"
                    alt="Guardian Shield"
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <FeatureCard
              img="/control.png"
              title="Vigilancia motorizada"
              description="Equipo listo para salir hacia tu domicilio antes de sonar la alarma."
              link="/servicios/vigilancia"
            />
            {/* Feature 2 */}
            <FeatureCard
              img="/camara.png"
              title="Monitoreo 24/7"
              description="Atendemos cada evento registrado brindando atención inmediata."
              link="/servicios/monitoreo"
            />
            {/* Feature 3 */}
            <FeatureCard
              img="/compu.png"
              title="Instalación limpia y rápida"
              description="Especialistas propios eficientes que se preocupan por tu hogar."
              link="/servicios/instalacion"
            />
          </div>
        </section>

        {/* Hellgrün Carousel Section */}
        <section className="container mx-auto px-4 py-16 flex flex-col items-center">
          <div className="w-full max-w-lg mb-8 overflow-hidden">
            {" "}
            {/* Outer container: controls width and hides overflow */}
            {/* Carousel Content: Inner container will move */}
            <div className="flex animate-marquee whitespace-nowrap py-4">
              {" "}
              {/* Added py-4 for some vertical padding if needed */}
              {/* Duplicate the image for a seamless loop. Add more if the image is very narrow or animation is very fast */}
              <img
                src="/helgrun.png"
                alt="Hellgrün Car Scroll 1"
                className="inline-block h-auto object-contain max-h-60 mx-4" // Reduced max-h, added horizontal margin
              />
              <img
                src="/helgrun.png"
                alt="Hellgrün Car Scroll 2"
                className="inline-block h-auto object-contain max-h-60 mx-4" // Reduced max-h, added horizontal margin
              />
              {/* You can add a third or even fourth image here if needed for a smoother loop, especially if the image is not very wide */}
            </div>
            {/* Add carousel controls here if needed (e.g., prev/next buttons, dots) */}
          </div>
          <div className="text-center">
            {" "}
            {/* Removed mb-8 from here as it's on the image container now */}
            <h2 className="text-3xl font-bold text-gray-700">Hellgrün</h2>{" "}
            {/* Changed div to h2 for semantic meaning, adjusted color slightly */}
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Proceso de Instalación
          </h2>
          <div className="max-w-4xl mx-auto ">
            <InstallationStep
              number={1}
              title="Consulta inicial"
              description="Nos contactas y programamos una visita gratuita para evaluar tus necesidades de seguridad."
            />
            <InstallationStep
              number={2}
              title="Diseño personalizado"
              description="Nuestros expertos diseñan un sistema de seguridad adaptado específicamente a tu hogar o negocio."
            />
            <InstallationStep
              number={3}
              title="Instalación profesional"
              description="Técnicos certificados instalan tu sistema con mínimas molestias y máxima eficiencia."
            />
            <InstallationStep
              number={4}
              title="Configuración y prueba"
              description="Configuramos tu sistema y realizamos pruebas exhaustivas para garantizar su correcto funcionamiento."
            />
            <InstallationStep
              number={5}
              title="Soporte continuo"
              description="Te brindamos soporte técnico y mantenimiento para asegurar la protección a largo plazo."
              isLast={true}
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="container mx-auto px-4 py-16 bg-[#1a1a1a]">
          <h2 className="text-4xl font-bold mb-12 text-center">
            Lo que dicen nuestros clientes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Desde que instalamos Guardian, dormimos tranquilos. La respuesta ante una falsa alarma fue inmediata y muy profesional."
              author="Carlos Rodríguez"
              role="Cliente residencial"
              avatar="/avatar/person1.avif"
            />
            <TestimonialCard
              quote="El sistema de monitoreo ha sido fundamental para la seguridad de mi negocio. El equipo técnico es excelente y siempre disponible."
              author="María González"
              role="Dueña de comercio"
              avatar="/avatar/person2.avif"
            />
            <TestimonialCard
              quote="La instalación fue rápida y sin complicaciones. El personal es muy amable y explica todo el funcionamiento del sistema detalladamente."
              author="Juan Pérez"
              role="Cliente corporativo"
              avatar="/avatar/person3.avif"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Solicitá una visita{" "}
            <span className="text-guardian-red">gratuita</span>
          </h2>
          <div className="mt-8">
            <Link
              href="/contacto"
              className="bg-guardian-red text-white px-8 py-3 rounded-full hover:bg-red-700 transition-colors inline-block"
            >
              Solicitar ahora
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
