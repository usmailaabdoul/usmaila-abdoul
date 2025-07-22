import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail, AiFillContacts, AiFillPhone } from "react-icons/ai";
import { BiCurrentLocation } from "react-icons/bi";
import Link from "next/link";

export const Contact = () => {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <div className={styles.contactCopy}>
            <p>
              Shoot me an email if you want to connect! You can also find me on{" "}
              <Link
                href="https://www.linkedin.com/in/usmaila-abdoul-moumini-475486183/"
                target="_blank"
                rel="nofollow"
              >
                Linkedin
              </Link>{" "}
              or{" "}
              <Link href="https://twitter.com/Abdoul_usma_ila" target="_blank" rel="nofollow">
                Twitter
              </Link>{" "}
              if that&apos;s more your speed.
            </p>
            <div style={{marginTop: '2.4rem'}} className={styles.contactEmail}>
              <AiFillContacts size="2rem" />
              <p style={{fontSize: '15px'}}>Usmaila Abdoul Moumini</p>
            </div>
            <div style={{marginTop: '5px'}} className={styles.contactEmail}>
              <AiFillPhone size="2rem" />
              <p style={{fontSize: '15px'}}>+237 691 21 21 73</p>
            </div>
            <div style={{marginTop: '5px'}} className={styles.contactEmail}>
              <BiCurrentLocation size="2rem" />
              <p style={{fontSize: '15px'}}>Buea town, Buea, South West Cameroon.</p>
            </div>
          </div>
        </Reveal>
        <Reveal width="100%">
          <Link href="mailto:usmaila.abdoul@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>usmaila.abdoul@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
};
