"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [alertMessage, setAlertMessage] = useState("")
  const [alertType, setAlertType] = useState<"success" | "error" | "">("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      const data = await res.json()
  
      if (!res.ok) {
        setAlertType("error")
        setAlertMessage(data.error || "Error al enviar el mensaje")
        return
      }
  
      setAlertType("success")
      setAlertMessage(data.message || "Mensaje enviado con éxito!")
      setFormData({ name: "", email: "", message: "" })
    } catch (error) {
      setAlertType("error")
      setAlertMessage("Ocurrió un error al enviar el mensaje")
      console.error(error)
    }
  }
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contáctame</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">¡Hablemos!</h3>

              <p className="text-lg text-muted-foreground mb-8">
              Estoy siempre abierto a nuevas oportunidades y motivado por impulsar proyectos innovadores. Si querés contactarme, no dudes en enviarme un mensaje a través del formulario o escribirme por correo electrónico. Estoy disponible y con muchas ganas de aportar valor y seguir creciendo profesionalmente
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>francisconatale9@gmail.com</span>
                </div>


                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Guatimozin, Cordoba</span>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Envíame un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderé lo antes posible.</CardDescription>
                <div className={`
  relative mb-4 p-4 rounded-lg border-l-4 shadow-sm transition-all duration-300
  ${alertType === "success" 
    ? "bg-emerald-50 border-emerald-400 text-emerald-800" 
    : "bg-red-50 border-red-400 text-red-800"
  }
`}>
  <div className="flex items-center">
    <div className="flex-shrink-0 mr-3">
      {alertType === "success" ? (
        <svg className="w-5 h-5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
        </svg>
      ) : (
        <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"/>
        </svg>
      )}
    </div>
    <p className="font-medium text-sm">
      {alertMessage}
    </p>
  </div>
</div>
              </CardHeader>

  
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input name="name" placeholder="Tu nombre" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Tu email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tu mensaje"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
