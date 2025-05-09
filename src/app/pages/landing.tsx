"use client";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--background)] to-[var(--highlight)] text-[var(--primary)] px-6 py-12 sm:py-24">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 max-w-5xl w-full">
        {/* Text Section */}
        <div className="flex flex-col gap-4 max-w-md text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold">Michelle Tan</h1>
          <p className="text-lg font-medium text-[var(--secondary)]">
            Systems Design Engineering 3A @ UWaterloo
          </p>
          <p className="text-base text-[var(--primary)]">
            I’m an engineering student still exploring where I fit in to the
            tech world.
          </p>

          {/* Social Links (Icons only) */}
          <div className="flex gap-4 justify-center sm:justify-start flex-wrap mt-2">
            <a
              href="https://github.com/miblankspace"
              className="bg-[var(--secondary)] text-[var(--tertiary)] p-3 py-2 rounded flex items-center gap-2 hover:shadow-md transition-shadow hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
            <a
              href="https://linkedin.com/in/michelletan03"
              className="bg-[var(--secondary)] text-[var(--tertiary)] p-3 py-2 rounded flex items-center gap-2 hover:shadow-md transition-shadow hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a
              href="mailto:my2tan@uwaterloo.ca"
              className="bg-[var(--secondary)] text-[var(--tertiary)] p-3 py-2 rounded flex items-center gap-2 hover:shadow-md transition-shadow hover:text-white"
            >
              <FaEnvelope className="text-xl" />
            </a>
            <a
              href="/resume.pdf" // <-- update this with your resume file path
              className="bg-[var(--secondary)] text-[var(--tertiary)] p-3 py-2 rounded flex items-center gap-2 hover:shadow-md transition-shadow hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf className="text-xl" />
              Resume
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex items-center justify-center w-full sm:w-1/2">
          <div className="w-full aspect-square max-w-xs bg-[var(--highlight)] text-[var(--primary)] flex items-center justify-center rounded-lg">
            image
          </div>
        </div>
      </div>
    </main>
  );
}
