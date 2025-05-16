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
    <div className="bg-[#222222] p-8 rounded-lg flex flex-col h-full">
      <div className="mb-6">
        <svg
          className="h-8 w-8 text-guardian-red mb-2"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-300 italic">{quote}</p>
      </div>
      <div className="mt-auto flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <Image
            src={avatar}
            alt={author}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        </div>
        <div>
          <p className="font-bold">{author}</p>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
}
