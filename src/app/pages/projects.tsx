"use client";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import Toggle from "@/app/components/toggle";

type Project = {
  title: string;
  type: "software" | "hardware";
  description?: string;
  githubLink?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Henry the Healthcare Chatbot",
    type: "software",
  },
  {
    title: "Colour band filter organ",
    type: "hardware",
  },
];

export default function Projects() {
  const [isSoftware, setIsSoftware] = useState<boolean>(true);
  return (
    <main
      id="projects"
      className="py-36 bg-gradient-to-b from-[var(--highlight)] to-[var(--background)] text-[var(--primary)]"
    >
      <div className="w-full mx-auto max-w-5xl">
        <div className="flex gap-4 items-center">
          <h1 className="text-xl">Projects</h1>
          <Toggle
            option1="software"
            option2="hardware"
            isOption1={isSoftware}
            setIsOption1={setIsSoftware}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
          {projects
            .filter((x) => x.type === (isSoftware ? "software" : "hardware"))
            .map((x, idx) => (
              <div
                key={idx}
                className="border border-[var(--tertiary)] p-4 rounded-lg shadow-lg transition-all bg-[var(--background)] text-[var(--primary)] hover:shadow-xl"
              >
                <h2 className="text-md">{x.title}</h2>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
}
