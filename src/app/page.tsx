"use client";
import Link from "next/link";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from "react-icons/fa";
import Card from "./components/Card";
import { experiences } from "./info";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gradient-to-b from-[var(--highlight)] to-[var(--tertiary)] text-[var(--primary)] flex justify-center items-center flex-col py-4">
        <h1 className="text-5xl font-bold mb-2">Michelle Tan</h1>
        <p className="text-lg font-medium text-[var(--secondary)]">
          Systems Design Engineering @ UWaterloo
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="https://linkedin.com/in/michelletan03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-xl" />
          </Link>
          <Link
            href="https://github.com/miblankspace"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-xl text-[var(--primary)]" />
          </Link>
          <Link href="mailto:my2tan@uwaterloo.ca">
            <FaEnvelope className="text-xl" />
          </Link>
          <Link
            href="https://drive.google.com/file/d/1FNcAudaWC9THI5hyt77YpaDJeWf3OQHY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFilePdf className="text-xl" />
          </Link>
        </div>
      </header>
      <div className="flex-1 py-12 px-40 bg-gradient-to-b from-[var(--background)] to-[var(--highlight)]">
        <div className="grid grid-cols-4 gap-8">
          {experiences.map((exp, idx) => (
            <Card
              key={idx}
              title={exp.title}
              subtitle={exp.subtitle}
              image={exp.image}
              type={exp.type}
              skills={exp.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
