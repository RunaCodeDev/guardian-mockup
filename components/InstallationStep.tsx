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
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-guardian-red text-white font-bold">
          {number}
        </div>
        {!isLast && (
          <div
            className="w-1 bg-gray-700 flex-grow my-2"
            style={{ height: "calc(100% - 2.5rem)" }}
          ></div>
        )}
      </div>

      <div className="flex-1 pb-8">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}
