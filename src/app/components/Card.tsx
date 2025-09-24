"use client";
import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  subtitle?: string;
  image?: string;
  type?: string;
  skills?: string[];
  description?: string[];
};

export default function ExperienceCard({
  title,
  subtitle,
  image,
  type,
  skills,
  description,
}: CardProps) {
  return (
    <div
      className="relative bg-gradient-to-b from-[var(--tertiary)] to-[var(--background)] 
    rounded-sm shadow-sm p-5 flex flex-col gap-3 hover:shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
    >
      {/*front side*/}
      <div className="flex flex-col">
        <p className="text-lg font-bold text-[var(--primary)]">{title}</p>
        {subtitle && (
          <p className="text-sm text-[var(--secondary)] mt-1">{subtitle}</p>
        )}
        {image && (
          <Image
            src={image}
            alt={`${title} image`}
            width={500}
            height={150}
            className="w-full h-32 object-contain"
          />
        )}
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap mt-2">
            {skills.map((tag, idx) => (
              <span key={idx} className="px-2 py-1 text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
        )}
        {type && (
          <div className="flex">
            <span className="ml-auto">{type}</span>
          </div>
        )}
      </div>
      {/*back side*/}
      <div>
        {description?.map((line) => (
          <div>
          • {line}
        </div>
      ))}
      </div>
    </div>
  );
}
