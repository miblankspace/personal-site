import Link from "next/link";

type Project = {
  title: string;
  description?: string;
  githubLink?: string;
  images?: string[];
};

const projects: Project[] = [
  {
    title: "Henry the Healthcare Chatbot",
  },
];

export default function Projects() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--highlight)] text-[var(--primary)] shadow-sm flex items-center w-full">
        <div className="ml-10 px-6 py-4 flex justify-start">
          <Link
            href="/"
            className="font-medium hover:text-[var(--secondary)]  transition-colors"
          >
            Home
          </Link>
        </div>
        <p className="text-sm flex justify-end">
          note: this is a special page that will not show up on the hompage! 🤫
          press the back button to come back anytime
        </p>
      </header>
      <main
        id="projects"
        className="py-36 bg-gradient-to-b from-[var(--highlight)] to-[var(--background)] text-[var(--primary)]"
      >
        <div className="w-full mx-auto max-w-5xl">
          <p className="text-sm flex mb-6">
            Available for internship from September 2025 to April 2026
          </p>
          <div className="flex gap-4 items-center">
            <h1 className="text-xl">Projects</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {projects.map((x, idx) => (
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
    </>
  );
}
