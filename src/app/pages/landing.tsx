import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

export default function Landing() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[var(--background)] to-[var(--highlight)] text-[var(--primary)] px-6">
      <div className="flex flex-col-reverse sm:flex-row items-center justify-between gap-8 max-w-5xl w-full">
        <div className="flex flex-col gap-4 max-w-md text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold">Michelle Tan</h1>
          <p className="text-lg font-medium text-[var(--secondary)]">
            Systems Design Engineering 3A @ UWaterloo
          </p>
          <p className="text-base text-[var(--primary)]">
            {`Hi, I'm Michelle - an eng student exploring my place in tech. I've worked in software dev, dabbled in hardware, and am always eager to learn and take on new challenges. ^_^`}
          </p>
          <div className="flex gap-4 justify-center sm:justify-start flex-wrap mt-2">
            <Link
              href="https://github.com/miblankspace"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </Link>
            <Link
              href="https://linkedin.com/in/michelletan03"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
            </Link>
            <Link href="mailto:my2tan@uwaterloo.ca" className="button">
              <FaEnvelope className="text-xl" />
            </Link>
            <Link
              href="https://drive.google.com/file/d/1mGMXJb33U8Zd45_KumAvVq1VljIl8qJl/view?usp=sharing"
              className="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf className="text-xl" />
              Resume
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center w-full sm:w-1/2">
          <div className="w-full aspect-square max-w-xs bg-[var(--highlight)] text-[var(--primary)] flex items-center justify-center rounded-lg">
            <Image
              src="/profile-cat-nobg.png"
              alt="Profile Image"
              width={150}
              height={150}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
