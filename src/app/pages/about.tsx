export default function About() {
  return (
    <main className="bg-gradient-to-b from-[var(--highlight)] to-[var(--background)] py-16 text-[var(--primary)]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Me Section */}
          <section id="about" className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg text-center">
              I'm Michelle, a Systems Design Engineering student at the
              University of Waterloo. I'm passionate about technology and
              exploring how it can be used to solve real-world problems.
            </p>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4">Tech Stack</h2>
            <ul className="text-lg">
              <li>JavaScript, React</li>
              <li>Node.js, Express</li>
              <li>Python</li>
              <li>Git & GitHub</li>
              <li>SQL, MongoDB</li>
            </ul>
          </section>

          {/* Experience Section */}
          <section id="experience" className="flex flex-col items-center">
            <h2 className="text-3xl font-semibold mb-4">Experience</h2>
            <p className="text-lg text-center">
              I've completed co-ops as a full-stack developer, where I built web
              applications using React, Node.js, and MongoDB. I'm currently
              looking for new opportunities to expand my skill set.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
