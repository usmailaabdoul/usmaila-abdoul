import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
  return (
    <section className="section-wrapper" id="experience">
      <SectionHeader title="Experience" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.title} {...item} />
      ))}
    </section>
  );
};

const experience = [
  {
    title: "GitStart Community (YC S19)",
    position: "Project Manager & Software Engineer",
    time: "2021 - Present",
    location: "Global · Remote",
    description:
      `Lead a team of 6 developers to successfully build and ship features for a software project, using the latest of NextJS App 
      router and React for efficient server-side and client-side rendering, and building performant 
      API endpoints with Express and NestJS, with relational and non relation databases`,
    tech: [
      "React",
      "NextJS",
      "React Native",
      "Typescript",
      "GitHub",
      "NodeJS",
      "Express",
      "MongoDB",
      "Postgres",
    ],
  },
  {
    title: "The Sports Media Agency",
    position: "Frontend Developer",
    time: "2022 - 2024",
    location: "London · Remote",
    description:
      `Utilized the latest Angular version to enhance sports media agency websites, boosting performance by up to 20% through methods 
      like server-side rendering and pre-rendering in Angular Universal, while implementing unique features and ensuring code quality 
      through rigorous testing and peer code reviews.`,
    tech: ["Angular", "Typescript", "Figma", "GraphQL"],
  },
  {
    title: "Digital Renter",
    position: "Frontend Developer",
    time: "2019 - 2021",
    location: "Buea, Southwest, Cameroon · On-site",
    description:
      `Developed and launched the Digital Rental cross-platform mobile application, achieving over 1000 downloads on the Play Store, 
      also build a Facebook Messenger bot with NodeJS to reduce customer service costs and time by 25%, driving more traffic to the website, and enable 
      customer property requests without assistance, alongside designing and building cross-platform applications using React Native,
       while providing coaching and support to colleagues.`,
    tech: [
      "React",
      "React Native",
      "Redux",
      "Figma",
      "Node",
    ],
  },
];
