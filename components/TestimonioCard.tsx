import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="group relative p-1 rounded-xl bg-gradient-to-br from-guardian-red via-[#333] to-[#222] transition-all duration-300 hover:scale-105">
      <div className="bg-[#222222] p-8 rounded-lg flex flex-col h-full relative z-10 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-guardian-red opacity-5 rounded-full group-hover:scale-150 transition-all duration-500"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-guardian-red opacity-5 rounded-full group-hover:scale-150 transition-all duration-500"></div>

        {/* Quote icon with animation */}
        <div className="mb-6 relative">
          <svg
            className="h-10 w-10 text-guardian-red mb-4 transform group-hover:scale-110 transition-transform duration-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          {/* Quote text with improved typography */}
          <p className="text-gray-300 italic text-lg leading-relaxed">
            {quote}
          </p>
        </div>

        {/* Author info with improved layout */}
        <div className="mt-auto flex items-center pt-4 border-t border-gray-800">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 ring-2 ring-guardian-red ring-offset-2 ring-offset-[#222222]">
            <Image
              src={avatar}
              alt={author}
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-bold text-lg">{author}</p>
            <p className="text-guardian-red text-sm">{role}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
