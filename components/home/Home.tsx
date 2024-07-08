import React from "react";
import { SideBar } from "../nav/SideBar";
import { Hero } from "./hero/Hero";
import styles from "./home.module.scss";
import { Heading } from "../nav/Heading";
import { About } from "./about/About";
import { Projects } from "./projects/Projects";
import { Experience } from "./experience/Experience";
import { Contact } from "./contact/Contact";

export const Home = () => {
  return (
    <>
      <Hero />
      <About />
      {/* <Projects /> */}
      <Experience />
      <Contact />
      <div
        style={{
          height: "200px",
          background:
            "linear-gradient(180deg, var(--background), var(--background-dark))",
        }}
      />
      <div className="relative flex flex-1 flex-col space-y-8">
        <div className="absolute flex flex-col md:flex-row justify-center pl-48 md:pl-0 md:-mt-[400px] w-full">
          <div className="bg-[#1C9FE9] w-56 h-56 md:w-96 md:h-96 rounded-full blur-[70px] md:blur-[90px] mr-32 opacity-60"></div>
          <div className="bg-[#7000FF] w-56 h-56 md:w-96 md:h-96 rounded-full blur-[70px] md:blur-[90px] mt-12 opacity-60"></div>
        </div>
      </div>
    </>
  );
};
