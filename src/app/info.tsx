enum ExperienceType {
  Work = "💼",
  Project = "🛠️",
  Education = "🎓",
}

export const experiences = [
  {
    title: "Software Dev @ Geotab",
    subtitle: "Sep 2025 - Present",
    image: "/geotab.jpg",
    type: ExperienceType.Work,
    skills: [
      "C#",
      ".NET Core",
      "TypeScript",
      "PostgreSQL",
      "XUnit",
      "Selenium",
      "Jest",
    ],
  },
  {
    title: "Software Dev @ Edisoft",
    subtitle: "Jan 2025 - Apr 2025",
    image: "/edisoft.avif",
    type: ExperienceType.Work,
    skills: [
      ".NET Core",
      "SQL Server",
      "C#",
      "React",
      "Redux",
      "EF Core",
      "JavaScript",
    ],
  },
  {
    title: "Backend Dev @ Dayforce",
    subtitle: "Sep 2023 - Dec 2023",
    image: "/dayforce.png",

    type: ExperienceType.Work,
    skills: ["C#", ".NET Core", "Moq", "SQL", "Apache Kafka"],
  },
  {
    title: "Software Dev @ BDO",
    subtitle: "May 2024 - Aug 2024",
    image: "/bdo.png",

    type: ExperienceType.Work,
    skills: ["Angular", ".NET"],
  },
  {
    title: "Mobile App",
    subtitle: "Ongoing Personal Project",
    type: ExperienceType.Project,
    skills: ["React Native", "TypeScript", "Figma"],
  },
  {
    title: "Gait Better",
    subtitle: "Wearable Gait Analysis Device",
    image: "/gaitbetter.png",
    type: ExperienceType.Project,
    skills: [
      "C++",
      "ESP32 Nano",
      "I²C",
      "Power Management",
      "Circuit Design",
      "Prototyping",
      "Sensor Integration",
    ],
  },
  {
    title: "Henry the Healthcare Chatbot",
    image: "/henry.png",
    type: ExperienceType.Project,
    skills: ["Azure App Service", "Azure Cognitive Services"],
  },
  {
    title: "Vehicle Sticker Inspection",
    subtitle: "Toyota Innovation Challenge",
    type: ExperienceType.Project,
    skills: ["OpenCV", "Python"],
  },
  {
    title: "University of Waterloo",
    subtitle: "3rd Year Systems Design Engineering",
    type: ExperienceType.Education,
  },
];
