"use client";
import { useState } from "react";
import Link from "next/link";
export default function About() {
  return (
    <main
      id="about"
      className="scroll-mt-36 bg-gradient-to-b from-[var(--highlight)] to-[var(--background)] text-[var(--primary)] flex items-center justify-center"
    >
      <div className="w-full max-w-5xl">
        <h1 className="text-xl">About Me!</h1>
        <div className="flex flex-row">
          <div className="flex flex-col flex-1">
            <h2 className="text-lg font-semibold">Experience</h2>
            <p className="text-base">
              Previous SWE intern @ Edisoft, Dayforce, BDO
            </p>
            <div className="flex mt-1 mb-4">
              <Link
                href="#experience"
                className="text-sm mt-0.5 underline underline-offset-5 hover:text-[var(--secondary)] transition-colors"
              >
                meow meow meow
              </Link>
              <span className="ml-1">⬇️</span>
            </div>
          </div>
          <div className="flex flex-col flex-[1.5]">
            <div className="flex flex-row gap-4 items-center">
              <h2 className="text-lg font-semibold">Tech Stack</h2>
            </div>
            <>
              <p className="text-base mb-2">
                <span className="font-semibold">Languages:</span> C#,
                JavaScript, TypeScript, Python, SQL, C/C++, CSS, MATLAB
              </p>
              <p className="text-base mb-2">
                <span className="font-semibold">Libraries/Frameworks:</span>{" "}
                React, Redux, Angular, Next.js, ASP.NET Core, EF Core, MUI
              </p>
              <p className="text-base mb-2">
                <span className="font-semibold">Tools:</span> SQL Server, SSMS,
                Git, Azure, Jira, Figma
              </p>
            </>
          </div>
        </div>
        <h2 className="text-lg font-semibold">Hobbies</h2>
        <p className="text-base">
          💃🏻 Dance 🎹 Piano 🏓 Ping Pong 🎱 Pool ⛸️ Skating 👾 Anime & Games{" "}
        </p>
      </div>
    </main>
  );
}
