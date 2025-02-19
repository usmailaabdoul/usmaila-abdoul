import Link from "next/link";
import Header from "@/components/header";
import Box from "@/components/ui/box";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/container";
import { FaGithub, FaLinkedin, FaXTwitter, FaGoogle, FaFileArrowDown } from "react-icons/fa6";
import Footer from "@/components/footer";
import { cn } from "@/lib/utils";
import { EXPERIENCES } from "@/constants";
import Experiences from "@/components/experiences";
import RecentActivities from "@/components/recent-activities";
import Hero from "./components/hero";
import Contact from "@/components/contact";
import Projects from "./components/projects";

export default function HomePageBody() {
  return (
    <>
      <div className="flex flex-col items-center">
        <Container className="">
          <Hero />

          <Box className="p-5 border-t-0 border-b-0"><div/></Box>

          <RecentActivities />

          <Experiences className="border-t-0 border-b-0"/>
          
          <Box crossPosition={['top-right', 'bottom-left']} className="py-5 border-b-0 border-t-0"><div/></Box>
          
          <Projects />

          <Box crossPosition={['top-right', 'bottom-left']} className="py-5 border-b-0 border-t-0"><div/></Box>

          <Contact />

          <Footer />
        </Container>
      </div>
    </>
  );
}
