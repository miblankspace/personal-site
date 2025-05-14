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
    
    After securing the authentication process, I excessively logged and observed inconsistencies in real-time user refresh patterns, which allowed me to determine the root cause. An edge case with timer unmount during hard refresh caused access tokens to expire, triggering overlapping refresh requests (due to the pre-existing axios 401 error handling), which resulted in token collisions. The fix involved implementing smarter intervals based on the saved time state to handle edge cases during unmount/remount and throttling parallel requests from axios, eliminating the timeout issue and making sessions much more reliable.      
   
    I took ownership of several new features including the cross-reference management and import logic important for EDI workflows, and EDI file downloads, working closely with PdM to define design requirements and handle edge cases. I also led the UI/UX audit with the Director of UX and created reusable components for consistency across the user platform. I presented these new features at company-wide demos.`,
    images: ["/edisoft1.jpg", "/edisoft2.jpeg"],
  },
  {
    company: "BDO",
    role: "Full-Stack Developer",
    dates: "May 2024 - Aug 2024",
    description: `Working in a team of two, another other co-op student and I spearheaded the full-cycle upgrade of old beneficial ownership and tax information/exchange systems from Angular version 6 to 17. This included replacing deprecated packages, resolving security vulnerabilities, and fixing critical functionality of various nature to ensure compatibility, stability, and improved performance of the application. For each major upgrade, we ran smoke and regression tests to catch breaking changes early. `,
  },
  {
    company: "Dayforce (Ceridian)",
    role: "Backend Developer",
    dates: "Sep 2023 - Dec 2023",
    description: `As a backend developer on the Dayforce Wallet Gateway team, I worked on both existing systems and new feature development. I built RESTful APIs for the “Instant Transfer” service, enabling Wallet users to access on-demand pay within minutes. I also contributed to the Dayforce Wallet Rewards program, where I reduced storage costs by 50GB by optimizing logging — migrating from the audit trail to Application Insights. My work involved a microservice architecture leveraging Kafka as a message queue for event-driven communication.

    Additionally, I developed and deployed a health check API using C# and ASP.NET Core to monitor critical dependencies for the employee referral program. This included SQL Server databases, external HTTP services, and Kafka, enabling rapid detection of system issues. Throughout the term, I actively participated in the Agile development lifecycle, including daily scrum, sprint planning, backlog refinement, retrospectives, design reviews, and demos. `,
    images: ["/dayforce1.png", "/dayforce2.png"],
  },
  {
    company: "From Art to Heart Society",
    role: "Chief Transformation Officer",
    dates: "Feb 2021 - Aug 2022",
    description: `At From Art to Heart, I helped grow our mission to make music accessible into a worldwide program. Working with the executive team, I supported international outreach and marketing efforts that brought in over 135 piano students and 70 youth volunteers across more than 10 countries.

    As a piano program director, I managed all things Ontario: interviewing piano teacher candidates, pairing them with students, and coordinating lessons across the region. I also trained new teachers, created ready-to-use email templates to streamline communication, and occasionally sat in on lessons to ensure a consistent, high-quality experience.

    Outside of direct programming, I worked behind the scenes to keep operations running smoothly. I handled a steady stream of questions and concerns from both teachers and families, built systems using Google Sheets, Forms, and Zapier to automate workflows, and helped organize program finances.

    As Chief Transformation Officer, I kicked off a new project: a free instrument rental program for students without access to their own instruments. I drafted the initial concept, explored grant opportunities, and reached out to potential partners like Long & McQuade to get the ball rolling.`,

    images: ["/fromart2heart1.jpg"],
  },
  {
    company: "JFSS HOSA - Future Health Professionals",
    role: "President",
    dates: "Jul 2021 - Jul 2022",
    description: `I co-ran our HOSA chapter, coordinating every facet of club operations—from finance and communications to marketing and member training. Managing a team of 75 (training leads, execs, general members) meant prioritizing a wide range of tasks, troubleshooting hiccups on the fly, and ensuring everyone had the support and resources to succeed.

    Our club prepared members to compete in 14 medical events. I taught core medical terminology concepts and ran mock quizzes, and our efforts paid off—28 members placed in the top 10 nationally, and I earned an 8th-place finish in the forensic science event.

    I’m still passionate about medicine and the application of medical technology, and I’m eager to keep exploring how tech can transform healthcare—and maybe work on the next lifesaving gadget someday!`,
    images: ["/hosa1.png"],
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
                        width={250}
                        height={200}
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
