import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  img: string;
  title: string;
  description: string;
  link: string;
}

export default function FeatureCard({
  img,
  title,
  description,
  link,
}: FeatureCardProps) {
  return (
    <div className="bg-[#222222] p-6 rounded-lg">
      <div className="h-48 mb-4 flex items-center justify-center">
        <Image
          src={img}
          alt={title}
          width={200}
          height={150}
          className="object-contain"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link
        href={link}
        className="inline-flex items-center text-sm hover:underline"
      >
        Ver más <ArrowRight className="ml-1 h-4 w-4" />
      </Link>
    </div>
  );
}
