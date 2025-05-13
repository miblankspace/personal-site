"use client";
import { useState } from "react";
import Image from "next/image";

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
    description: `I worked on a small team developing a soon-to-launch EDI automation platform which streamlines how businesses exchange and manage electronic documents. I contributed to both new feature development and bug fixes across the user platform and automation service.
      
    One of the trickiest challenges I tackled was a mysterious timeout bug — users were getting logged out randomly, with no consistent steps to reproduce. What started as a simple fix turned into a full authentication overhaul. I separated the idle timeout from the token refresh logic and rebuilt the auth system to properly handle refresh token rotation, including database redesign to support multi-session management. 
    
    After securing the authentication process, I excessively logged and observed inconsistencies in real-time user refresh patterns, which led me to the root cause. An edge case with timer unmount during hard refresh caused access tokens to expire, triggering overlapping refresh requests (due to the pre-existing axios 401 error handling), which resulted in token collisions. The fix involved implementing smarter intervals based on the saved time state to handle edge cases during unmount/remount and throttling parallel requests from axios, eliminating the timeout issue and making sessions much more reliable.      
   
    I took ownership of several new features including the cross-reference management and import logic important for EDI workflows, and EDI file downloads, working closely with PdM to define design requirements and handle edge cases. I also led the UI/UX audit with the Director of UX and created reusable components for consistency across the user platform.`,
    images: ["/edisoft1.jpg", "/edisoft2.jpeg"],
  },
  {
    company: "BDO",
    role: "Full-Stack Developer",
    dates: "May 2024 - Aug 2024",
    description: `Coming Soon! `,
  },
  {
    company: "Dayforce (Ceridian)",
    role: "Backend Developer",
    dates: "Sep 2023 - Dec 2023",
    description: `Coming Soon! `,
  },
  {
    company: "From Art to Heart Society",
    role: "Chief Transformation Officer",
    dates: "Feb 2021 - Aug 2022",
    description: `Coming Soon! `,
  },
  {
    company: "JFSS HOSA",
    role: "President",
    dates: "Jul 2021 - Jul 2022",
    description: `Coming Soon!`,
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
              <div className="flex flex-col mt-5 ml-8 gap-6">
                <p className="whitespace-pre-line text-base text-[var(--primary)] flex-[3]">
                  {exp.description}
                </p>
                {exp.images && exp.images.length > 0 && (
                  <div className="flex flex-wrap gap-4 mb-4">
                    {exp.images.map((image, idx) => (
                      <Image
                        key={idx}
                        src={image}
                        alt="Experience Image"
                        width={300}
                        height={100}
                        className="border-2 border-[var(--primary)] rounded-lg object-cover max-h-40"
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
