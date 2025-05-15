"use client"

import type React from "react"

import { useState } from "react"
import PageLayout from "@/components/page-layout"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage(null)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Simulate successful submission
    setIsSubmitting(false)
    setSubmitMessage({
      type: "success",
      text: "¡Gracias por contactarnos! Te responderemos a la brevedad.",
    })

    // Reset form
    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      mensaje: "",
    })
  }

  return (
    <PageLayout title="Contacto" subtitle="Estamos aquí para ayudarte">
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium mb-2">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-guardian-red"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-guardian-red"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium mb-2">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-guardian-red"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-[#222222] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-guardian-red"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-guardian-red text-white px-6 py-3 rounded-full hover:bg-red-700 transition-colors disabled:opacity-70"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
              {submitMessage && (
                <div
                  className={`mt-4 p-4 rounded-lg ${
                    submitMessage.type === "success" ? "bg-green-900/30" : "bg-red-900/30"
                  }`}
                >
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
            <div className="bg-[#222222] p-6 rounded-lg mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-guardian-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Dirección</h3>
                    <p className="text-gray-300">Av. Ejemplo 1234, Resistencia, Chaco, Argentina</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-guardian-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Teléfono</h3>
                    <p className="text-gray-300">+54 3624 123456</p>
                    <p className="text-gray-300">+54 3624 654321 (Emergencias)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-guardian-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Correo electrónico</h3>
                    <p className="text-gray-300">info@guardianelectronico.com</p>
                    <p className="text-gray-300">soporte@guardianelectronico.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-guardian-red mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold mb-1">Horario de atención</h3>
                    <p className="text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="text-gray-300">Sábados: 9:00 - 13:00</p>
                    <p className="text-gray-300">Monitoreo: 24/7</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-[#222222] p-2 rounded-lg h-64">
              {/* Placeholder for map */}
              <div className="w-full h-full bg-gray-700 rounded flex items-center justify-center">
                <p className="text-gray-400">Mapa de ubicación</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
