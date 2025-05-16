import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import FeatureCard from "@/components/FeatureCard";
import InstallationStep from "@/components/InstallationStep";
import TestimonialCard from "@/components/TestimonioCard";
import AnimatedCounter from "@/components/AnimatedCounterProps";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

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
        <section
          className="relative flex flex-col items-center justify-center
         py-24 overflow-hidden my-10"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-[#222] opacity-90"></div>

          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(135deg, #333 25%, transparent 25%), linear-gradient(225deg, #333 25%, transparent 25%), linear-gradient(45deg, #333 25%, transparent 25%), linear-gradient(315deg, #333 25%, transparent 25%)",
              backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
              backgroundSize: "20px 20px",
              backgroundRepeat: "repeat",
            }}
          ></div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-guardian-red to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-guardian-red to-transparent opacity-30"></div>

          <div className="container mx-auto px-4 relative flex flex-col items-center justify-center">
            <div className="text-center mb-16">
              <div className="inline-block">
                <h2 className="text-4xl font-bold mb-4 relative inline-block">
                  Proceso de Instalación
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-guardian-red"></span>
                </h2>
              </div>
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                Nuestro proceso de instalación está diseñado para ser simple,
                eficiente y adaptado a tus necesidades
              </p>
            </div>

            <div className="max-w-4xl mx-auto bg-[#1a1a1a]/50 p-8 rounded-xl backdrop-blur-sm">
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

            <Button
              size={"lg"}
              className="group relative mt-10 bg-guardian-red text-white text-xl font-bold rounded-full px-12 py-6 overflow-hidden hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:shadow-guardian-red/30"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-guardian-red via-red-600 to-guardian-red opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-size-200 animate-gradient-x"></div>
              <div className="absolute -inset-1 rounded-full opacity-30 blur-sm bg-gradient-to-r from-guardian-red via-[#222] to-guardian-red group-hover:opacity-50 transition-opacity duration-300 group-hover:animate-pulse"></div>
              <span className="relative flex items-center gap-2">
                Solicitar una visita
                <ArrowRight className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </Button>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-[#2a2a2a] to-[#1a1a1a] opacity-90"></div>

          {/* Animated particles or light effect (optional) */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute w-40 h-40 bg-guardian-red rounded-full blur-3xl -top-10 -left-10 animate-pulse"></div>
            <div
              className="absolute w-60 h-60 bg-guardian-red rounded-full blur-3xl bottom-10 right-10 animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>

          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl font-bold mb-16 text-center">
              Nuestros números hablan por sí solos
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <AnimatedCounter
                end={5000}
                suffix="+"
                title="Clientes satisfechos"
              />
              <AnimatedCounter end={98} suffix="%" title="Tasa de respuesta" />
              <AnimatedCounter
                end={15}
                suffix=" min"
                title="Tiempo promedio de respuesta"
              />
              <AnimatedCounter
                end={24}
                suffix="/7"
                title="Monitoreo continuo"
              />
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-24 overflow-hidden my-10">
          <div className="absolute inset-0 bg-[#1a1a1a]">
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "radial-gradient(#ffffff 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            ></div>
          </div>

          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-guardian-red to-transparent opacity-30"></div>
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-guardian-red to-transparent opacity-30"></div>

          <div className="absolute -left-20 top-1/4 w-40 h-40 bg-guardian-red opacity-5 rounded-full blur-3xl"></div>
          <div className="absolute -right-20 bottom-1/4 w-40 h-40 bg-guardian-red opacity-5 rounded-full blur-3xl"></div>

          <div className="container mx-auto px-4 relative">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 inline-block relative">
                Lo que dicen nuestros clientes
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-guardian-red"></span>
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto">
                Estas son algunas experiencias de quienes ya confían en nuestros
                sistemas de seguridad
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

            <div className="mt-16 text-center">
              <Link
                href="#"
                className="inline-flex items-center text-guardian-red hover:underline"
              >
                <span>Ver más opiniones de nuestros clientes</span>
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </Link>
            </div>
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
