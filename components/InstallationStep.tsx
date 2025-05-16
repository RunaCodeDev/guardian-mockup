import React from "react";

interface InstallationStepProps {
  number: number;
  title: string;
  description: string;
  isLast?: boolean;
}

export default function InstallationStep({
  number,
  title,
  description,
  isLast = false,
}: InstallationStepProps) {
  return (
    <div className="flex group">
      <div className="flex flex-col items-center mr-6">
        {/* Number circle with hover effect */}
        <div className="relative">
          {/* Pulse animation for the outer ring */}
          <div className="absolute -inset-1 rounded-full bg-guardian-red opacity-30 group-hover:opacity-70 blur-sm group-hover:blur-md transition-all duration-300"></div>

          {/* Main number circle */}
          <div className="relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-guardian-red to-red-800 text-white font-bold text-xl shadow-lg group-hover:shadow-guardian-red/50 transition-all duration-300">
            {number}
          </div>
        </div>

        {/* Connector line with animation */}
        {!isLast && (
          <div
            className="relative w-1 flex-grow my-3"
            style={{ height: "calc(100% - 3.5rem)" }}
          >
            <div className="absolute inset-0 bg-gray-700 group-hover:bg-gray-600 transition-colors duration-300"></div>
            <div
              className="absolute inset-0 bg-gradient-to-b from-guardian-red via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ height: "40%" }}
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-guardian-red via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ top: "60%", height: "40%" }}
            ></div>
          </div>
        )}
      </div>

      <div className="flex-1 pb-12 pt-2">
        {/* Title with hover effect */}
        <h3 className="lg:text-2xl font-bold mb-3 group-hover:text-guardian-red transition-colors duration-300">
          {title}
        </h3>

        {/* Description with improved typography */}
        <div className="bg-[#222222] p-5 rounded-lg shadow-md group-hover:shadow-guardian-red/10 transition-all duration-300">
          <p className="text-gray-300 lg:text-xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
