"use client"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { Phone, Mail, FileText, HelpCircle } from "lucide-react"

export default function SoportePage() {
  const [activeTab, setActiveTab] = useState("faq")

  const faqs = [
    {
      question: "¿Cómo funciona el sistema de alarma?",
      answer:
        "Nuestro sistema de alarma utiliza sensores inalámbricos que detectan movimiento, apertura de puertas y ventanas, y rotura de cristales. Cuando se activa un sensor, la central recibe la señal y activa la sirena, además de enviar una alerta a nuestro centro de monitoreo.",
    },
    {
      question: "¿Qué hago si se activa la alarma por error?",
      answer:
        "Si la alarma se activa por error, debes ingresar tu código de desactivación en el teclado. Si no puedes desactivarla, recibirás una llamada de nuestro centro de monitoreo para verificar la situación. Es importante que tengas a mano tu contraseña verbal para identificarte.",
    },
    {
      question: "¿Cómo puedo cambiar mi contraseña?",
      answer:
        "Para cambiar tu contraseña, debes ingresar al panel de control con tu contraseña actual, seleccionar la opción 'Configuración', luego 'Contraseñas' y seguir las instrucciones en pantalla. También puedes solicitar asistencia a nuestro equipo de soporte.",
    },
    {
      question: "¿Qué hago si se corta la luz?",
      answer:
        "Nuestros sistemas cuentan con baterías de respaldo que mantienen el funcionamiento de la alarma durante varias horas en caso de corte de energía. Además, el centro de monitoreo recibe una alerta cuando se produce un corte de energía en tu domicilio.",
    },
    {
      question: "¿Puedo controlar mi alarma desde el celular?",
      answer:
        "Sí, ofrecemos una aplicación móvil que te permite controlar tu sistema de alarma desde cualquier lugar. Puedes activar y desactivar la alarma, ver el estado de los sensores, recibir notificaciones y más.",
    },
  ]

  return (
    <PageLayout title="Soporte" subtitle="Estamos aquí para ayudarte">
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap border-b border-gray-700 mb-8">
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === "faq" ? "border-b-2 border-guardian-red text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("faq")}
          >
            Preguntas frecuentes
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === "manuales" ? "border-b-2 border-guardian-red text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("manuales")}
          >
            Manuales
          </button>
          <button
            className={`px-6 py-3 font-medium ${
              activeTab === "contacto" ? "border-b-2 border-guardian-red text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab("contacto")}
          >
            Contacto técnico
          </button>
        </div>

        {activeTab === "faq" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <HelpCircle className="h-6 w-6 text-guardian-red mr-2" />
              Preguntas frecuentes
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-[#222222] p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "manuales" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <FileText className="h-6 w-6 text-guardian-red mr-2" />
              Manuales y guías
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((manual) => (
                <a
                  key={manual}
                  href="#"
                  className="bg-[#222222] p-6 rounded-lg hover:bg-[#2a2a2a] transition-colors flex items-center"
                >
                  <div className="w-12 h-16 bg-gray-700 mr-4 flex items-center justify-center rounded">
                    <FileText className="h-6 w-6 text-gray-400" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Manual de usuario - Sistema de alarma</h3>
                    <p className="text-gray-400 text-sm">PDF - 2.5 MB</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {activeTab === "contacto" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <Phone className="h-6 w-6 text-guardian-red mr-2" />
              Contacto técnico
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#222222] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Soporte telefónico</h3>
                <div className="flex items-start mb-4">
                  <Phone className="h-5 w-5 text-guardian-red mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">+54 3624 123456</p>
                    <p className="text-gray-400 text-sm">Lunes a Viernes: 8:00 - 20:00</p>
                    <p className="text-gray-400 text-sm">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Nuestro equipo de soporte técnico está disponible para ayudarte con cualquier consulta o problema que
                  puedas tener con tu sistema de seguridad.
                </p>
              </div>
              <div className="bg-[#222222] p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Soporte por correo</h3>
                <div className="flex items-start mb-4">
                  <Mail className="h-5 w-5 text-guardian-red mr-3 mt-1" />
                  <div>
                    <p className="text-gray-300">soporte@guardianelectronico.com</p>
                    <p className="text-gray-400 text-sm">Tiempo de respuesta: 24-48 horas</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  Envíanos un correo detallando tu consulta o problema. Incluye tu nombre, número de cliente y una
                  descripción detallada para que podamos ayudarte mejor.
                </p>
              </div>
            </div>
            <div className="bg-guardian-red/10 p-6 rounded-lg mt-8">
              <h3 className="text-xl font-bold mb-4">Emergencias</h3>
              <p className="text-gray-300 mb-4">
                Para emergencias relacionadas con tu sistema de seguridad, comunícate inmediatamente con nuestra línea
                de emergencias disponible las 24 horas:
              </p>
              <div className="flex items-center justify-center bg-guardian-red p-4 rounded-lg">
                <Phone className="h-6 w-6 mr-2" />
                <span className="text-xl font-bold">+54 3624 654321</span>
              </div>
            </div>
          </div>
        )}
      </section>
    </PageLayout>
  )
}
