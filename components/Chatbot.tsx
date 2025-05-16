"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, RotateCcw } from "lucide-react";

interface Message {
  type: "user" | "bot";
  content: string;
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const clearChat = () => {
    setMessages([]);
  };

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentMessage.trim() || isLoading) return;

    const userMessage = currentMessage.trim();
    setMessages((prev) => [...prev, { type: "user", content: userMessage }]);
    setCurrentMessage("");
    setIsLoading(true);

    try {
      const response = await fetch(
        "https://n8n.runa-code.com/webhook/botGuardian",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + btoa("guardian:123456"),
          },
          body: JSON.stringify({ userInput: userMessage }),
        }
      );

      const data = await response.json();
      setMessages((prev) => [...prev, { type: "bot", content: data.output }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: "Lo siento, hubo un error al procesar tu mensaje.",
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {/* Botón flotante del chat */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-guardian-red hover:bg-red-700 text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Ventana del chat */}
      {isOpen && (
        <div className="bg-[#1a1a1a] border border-guardian-red/20 rounded-lg shadow-xl w-[320px] h-[400px] flex flex-col">
          {/* Header del chat */}
          <div className="flex items-center justify-between p-4 border-b border-guardian-red/20">
            <h3 className="text-white font-semibold">Chat Guardian</h3>
            <div className="flex gap-2">
              <button
                onClick={clearChat}
                className="text-gray-400 hover:text-white transition-colors"
                title="Limpiar chat"
              >
                <RotateCcw size={20} />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Mensajes */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.type === "user"
                      ? "bg-guardian-red text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-800 text-gray-100 rounded-lg p-3">
                  Escribiendo...
                </div>
              </div>
            )}
            <div ref={messagesEndRef} /> {/* Elemento para el auto-scroll */}
          </div>

          {/* Input del mensaje */}
          <form
            onSubmit={sendMessage}
            className="p-4 border-t border-guardian-red/20"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
                placeholder="Escribe tu mensaje..."
                className="flex-1 bg-gray-800 text-white rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-guardian-red"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="bg-guardian-red hover:bg-red-700 text-white rounded-full p-2 transition-colors disabled:opacity-50"
              >
                <Send size={20} />
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
