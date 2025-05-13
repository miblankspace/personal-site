"use client";
import { useState } from "react";

type Experience = {
  company: string;
  role: string;
  dates: string;
  description?: string;
  images?: string[];
};

const experiences: Experience[] = [
  {
    company: "Edisoft",
    role: "Software Developer",
    dates: "Jan 2025 - Apr 2025",
  },
  {
    company: "BDO",
    role: "Full-Stack Developer",
    dates: "May 2024 - Aug 2024",
    description:
      "Developed internal tools with React and ASP.NET. Helped modernize UI components and optimize database queries.",
  },
  {
    company: "Dayforce",
    role: "Backend Developer",
    dates: "Sep 2023 - Dec 2023",
    description:
      "Worked on backend APIs in .NET Core for Dayforce's payroll platform. Wrote integration tests, debugged legacy services, and learned to fear SQL deadlocks.",
  },
  {
    company: "From Art to Heart Society",
    role: "Chief Transformation Officer",
    dates: "Feb 2021 - Aug 2022",
  },
  {
    company: "JFSS HOSA",
    role: "President",
    dates: "Jul 2021 - Jul 2022",
  },
];

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main
      id="experience"
      className="pt-36 bg-gradient-to-b from-[var(--background)] to-[var(--highlight)] text-[var(--primary)]"
    >
      <div className="w-full max-w-5xl mx-auto">
        <h1 className="text-xl">Experience</h1>
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="border-b border-[var(--tertiary)] py-4 transition-all"
          >
            <div
              className="flex items-center cursor-pointer gap-4"
              onClick={() => toggle(idx)}
            >
              <span className="text-lg select-none">
                {openIndex === idx ? "▾" : "▸"}
              </span>
              <p className="text-md font-semibold">
                {exp.role} @ {exp.company}
              </p>
              <p className="text-sm text-[var(--secondary)] ml-auto">
                {exp.dates}
              </p>
            </div>
            {openIndex === idx && (
              <>
                <p className="mt-5 ml-8 text-base text-[var(--primary)]">
                  {exp.description}
                </p>
                {exp.images && exp.images.length > 0 && (
                  <div className="flex gap-2 mt-2">
                    {exp.images.map((image, idx) => (
                        <div key={idx}>
                          {image}
                        </div>
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
