"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { FiMaximize2, FiArrowUpRight } from "react-icons/fi";

const HenryDetails = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <div className="flex items-center gap-2">
        <Link
          href="https://drive.google.com/file/d/1zWLI23jtPEeJ4uxqntQbl5h5l8aW5qq1/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--secondary)] font-medium flex items-center gap-1 mr-6"
        >
          See pitch slides <FiArrowUpRight className="inline w-4 h-4" />
        </Link>
        <Link
          href="https://github.com/miblankspace/HealthBotContainer"
          target="_blank"
          className="text-[var(--secondary)] font-medium flex items-center gap-1"
        >
          See web container <FiArrowUpRight className="inline w-4 h-4" />
        </Link>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">Problem</h3>
        <p>
          Misinformation about COVID-19 contributed to over 2,800 Canadian
          deaths and over $300M in hospital and ICU visits.{" "}
          <em>(Council of Canadian Academies)</em>
        </p>
        <p className="mt-2">
          Many people rely on unverified online sources for medical advice,
          leading to panic, misdiagnosis, and delayed care. There’s a gap
          between reliable information and accessible tools, especially for
          users without a medical background.
        </p>
        <p className="mt-2">
          Presented case study and demoed chatbot to a Microsoft Technical
          Specialist, earning the highest evaluation.
        </p>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">Features</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>Symptom checking</li>
          <li>Medical information retrieval</li>
          <li>Live handoff to a nurse</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">Process</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Data sources:
            <ul className="list-disc list-inside ml-5">
              <li>
                International Classification of Diseases (ICD) from the World
                Health Organization
              </li>
              <li>Infermedica for symptom checking</li>
              <li>U.S. National Library of Medicine for disease information</li>
            </ul>
          </li>
          <li>
            Trained and evaluated:
            <ul className="list-disc list-inside ml-5">
              <li>Conversational models via Azure’s Language Studio</li>
              <li>Medical logic with Azure Health Bot Service</li>
            </ul>
          </li>
          <li>Designed chatbot conversation logic tree with a CLU model</li>
          <li>Deployed bot GUI to Azure App Service (99.95% uptime)</li>
          <li>Monitored user sessions and feedback</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--primary)] mb-2">
          Demo Image (bot no longer deployed)
        </h3>
        <div className="flex gap-4">
          <Image
            src="/henry1.png"
            alt="Henry chatbot demo"
            width={400}
            height={200}
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

const ToyotaDetails = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <div className="flex items-center gap-2">
        <Link
          href="https://drive.google.com/drive/folders/1M34DZ5JdJWL8WMrnjXxR0U21JMlrwlTg?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--secondary)] font-medium flex items-center gap-1 mr-6"
        >
          See folder <FiArrowUpRight className="inline w-4 h-4" />
        </Link>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">Problem</h3>
        <p>
          The TMMC Engineering project team aims to automate peeling and
          applying stickers using vision-integrated robotics. However, they need
          a reliable inspection system to:
        </p>
        <ul className="list-disc list-inside space-y-1 mt-2">
          <li>Confirm all 7 stickers are applied by the robot.</li>
          <li>
            Ensure each sticker fully covers the body hole with at least 3mm
            margin from the edges.
          </li>
          <li>
            Verify stickers are flush against the surface, with no wrinkles.
          </li>
          <li>
            Complete inspection of all stickers within 15 seconds (camera
            movement time excluded).
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-[var(--primary)]">Solution</h3>
        <p>
          Captured images of various sticker placements and trained a deep
          learning YOLOv5 model to accurately detect and inspect sticker quality
          and positioning.
        </p>
      </div>

      <div>
        <h3 className="font-semibold text-[var(--primary)] mb-2">Demo Video</h3>
        <video controls className="rounded-xl shadow-md max-w-full w-[600px]">
          <source src="/toyota_sticker_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

const GaitAnalysisDetails = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <h3 className="text-[var(--primary)]">Problem Definition</h3>
      <p className="mb-2">
        As the population of older adults increases, there is a growing need for
        a non-intrusive, intuitive, at-home solution that allows this
        demographic to consistently monitor their gait and proactively detect
        potential health issues. Traditional gait assessments fail to meet these
        needs due to a shrinking healthcare workforce and lack of viable at-home
        solutions.
      </p>
      <p>
        <em>
          The medium fidelity prototype of this project is currently in
          development.
        </em>
      </p>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">
          Requirements & Constraints
        </h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Accurate pressure measurement from foot loading and unloading for
            valid gait data.
          </li>
          <li>Fast sensor processing for real-time fall detection.</li>
          <li>
            Comfortable insole thickness target: 2-3mm to fit common footwear
            and barefoot-style shoes.
          </li>
          <li>
            Simple, intuitive interface with non-intrusive alerts (soft light,
            texts) for users and caregivers.
          </li>
          <li>
            Durable, water-absorbent outer surface to protect electronics and
            maintain comfort.
          </li>
          <li>Lightweight device to minimize fall risk.</li>
          <li>
            Impact-resistant to withstand up to 3,164 N (2.8× body weight of
            95th percentile older adult male).
          </li>
          <li>
            Embedded electronics with any extras housed separately on shoe.
          </li>
          <li>
            Safe operating temperature below 43℃, no electric shock risk (IEC
            standards).
          </li>
          <li>Battery lasts ≥8 hours with ideally in-shoe recharging.</li>
          <li>
            Manufacturing cost ≤ $50 per insole, development timeframe of 4
            months.
          </li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold text-[var(--primary)] mb-2">
          Project Timeline
        </h3>
        <Image
          src="/gait-timeline.png"
          alt="Project timeline for gait analysis device"
          width={600}
          height={300}
          className="rounded-xl shadow-md"
        />
      </div>
    </div>
  );
};

const AlarmFatigueDetails = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <h3 className="text-[var(--primary)]">Problem Definition</h3>
      <p className="mb-4">
        Hospitals use many electronic devices to monitor patients and provide
        life support. These devices generate alarms to alert clinicians of
        issues or failures. However, the sheer number of alarms creates a noisy
        and stressful environment, causing alarm fatigue. Clinicians become
        desensitized to alarms. This desensitization leads to slower responses
        and missed critical alerts, which can seriously harm patient care.
      </p>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">Research Plan</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>
            Objective: To investigate alarm fatigue in healthcare and recommend
            improvements to make alarm systems safer and less mentally taxing.
          </li>
          <li>
            Scope & Focus Areas:
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Causes and impacts of alarm fatigue</li>
              <li>Psychological toll and patient outcomes</li>
              <li>Experiences from clinicians and patients</li>
              <li>Evaluation of existing solutions and future design ideas</li>
            </ul>
          </li>
          <li>
            Methods: Brief literature review, clinical observations, and
            interviews with consented healthcare professionals and patients.
          </li>
          <li>
            Interview Topics: False alarm frequency, prioritization, mental
            load, system flaws, and suggestions for improvement.
          </li>
          <li>
            Data Collection: Track alarm types/frequency, document responses,
            transcribe interviews, and extract key insights.
          </li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold text-[var(--primary)]">
          Users and Personas
        </h3>
        <div className="grid grid-cols-2 gap-3">
          <Image
            src="/users.png"
            alt="User Archetypes"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <Image
            src="/persona1.png"
            alt="Persona 1"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <Image
            src="/persona2.png"
            alt="Persona 2"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <Image
            src="/persona3.png"
            alt="Persona 3"
            width={400}
            height={250}
            className="rounded-xl"
          />
        </div>
        <h3 className="font-semibold text-[var(--primary)] mt-6">Prototypes</h3>
        <div className="grid grid-cols-2 gap-2">
          <Image
            src="/prototype1.png"
            alt="Prototype Image 1"
            width={400}
            height={250}
            className="rounded-xl"
          />
          <Image
            src="/prototype2.png"
            alt="Prototype Image 2"
            width={600}
            height={250}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

const MusicExperimentDetails = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <div className="flex items-center gap-2">
        <Link
          href="https://create.piktochart.com/output/53717435-aps-culminating"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--secondary)] font-medium flex items-center gap-1 mr-6"
        >
          See infographic <FiArrowUpRight className="inline w-4 h-4" />
        </Link>
      </div>
      <p>
        Please see infographic for details about experiment research, design, execution, results, and analysis.
      </p>
    </div>
  );
};

const MediaJournalDetails = () => {
  return (
    <div className="space-y-6 text-sm leading-relaxed">
      <p>
        <em>Mobile app still in development, github link private</em>
      </p>
      <h3 className="text-[var(--primary)]">Wireframe</h3>
      <Image
        src="/journal-prototype.png"
        alt="Media Journal Wireframe"
        width={600}
        height={400}
        className="rounded-xl shadow-md"
      />
    </div>
  );
};

type Project = {
  title: string;
  description: string;
  detailsComponent: React.FC;
};

const projects: Project[] = [
  {
    title: "Henry the Healthcare Chatbot",
    description:
      "Conversational AI prototype to combat \nmedical misinformation.",
    detailsComponent: HenryDetails,
  },
  {
    title: "Sticker Inspection Application\n(Toyota Innovation Challenge)",
    description:
      "Computer vision system to monitor sticker placement on vehicles in real time.",
    detailsComponent: ToyotaDetails,
  },
  {
    title: "Gait Analysis Device for Older Adults",
    description:
      "Wearable insole prototype that captures gait data to identify fall risks and mobility issues. \n(In Development)",
    detailsComponent: GaitAnalysisDetails,
  },
  {
    title: "Alarm Fatigue Investigation and\nSystem Design",
    description:
      "Hospital alarm system prototype to reduce desensitization and improve patient safety.",
    detailsComponent: AlarmFatigueDetails,
  },
  {
    title: "Music, Emotion, and Perception Psychology Experiment",
    description:
      "Experiment and study on how music influences emotional state and perception.",
    detailsComponent: MusicExperimentDetails,
  },
  {
    title: "Media Journal App",
    description:
      "Mobile journaling app to capture life through photos, videos, and audio. \n(In Development)",
    detailsComponent: MediaJournalDetails,
  },
];

export default function Hoyoverse() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--highlight)] text-[var(--primary)] shadow-sm flex items-center w-full">
        <div className="ml-10 px-6 py-4 flex justify-start">
          <Link
            href="/"
            className="font-medium hover:text-[var(--secondary)] transition-colors"
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
                onClick={() => setSelectedProject(x)}
                className="border border-[var(--secondary)] p-4 rounded-lg shadow-lg transition-all bg-gradient-to-b from-[var(--background)] to-[var(--highlight)] text-[var(--primary)] hover:shadow-xl cursor-pointer relative"
              >
                <FiMaximize2 className="absolute top-5 right-4 text-[var(--secondary)] w-4 h-4 mb-6" />
                <h2 className="whitespace-pre-wrap text-md">{x.title}</h2>
                <p className="whitespace-pre-wrap text-sm mb-2">
                  {x.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-[var(--background)] text-[var(--primary)] rounded-2xl w-[70%] h-[70%] p-8 relative shadow-xl overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 text-[var(--primary)] hover:text-[var(--secondary)] cursor-pointer text-2xl"
              >
                ×
              </button>
              <h2 className="text-xl">{selectedProject.title}</h2>
              <selectedProject.detailsComponent />
            </div>
          </div>
        )}
      </main>
    </>
  );
}
