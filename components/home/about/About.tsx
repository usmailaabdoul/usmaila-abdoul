import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import { AiOutlineArrowRight } from "react-icons/ai";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="About" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Hey! I&apos;m Usmaila, a project manager and software engineer based in Buea, South West, Cameroon. 
              With a fervent commitment to excellence, I bring a wealth of experience in leading diverse teams 
              and crafting innovative solutions in the ever-evolving landscape of technology.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Currently, I lead a dynamic team at GitStart Community, overseeing project development and 
              crafting strategic initiatives aimed at enhancing project efficiency and outcomes.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Previously, at The Sports Media Agency and Digital Renter, I revitalized websites with Angular, 
              built cross-platform mobile apps with React Native. These experiences have honed my skills, 
              allowing me to tackle challenges with creativity and expertise.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              I&apos;m passively looking for new positions where I can merge my love for code 
              with my love pixel perfect design and great user interfaces. If you think
              you&apos;ve got an opening that I might like, let&apos;s connect
              🔗
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>My links</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
