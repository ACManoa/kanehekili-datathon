import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Code } from "@/components/ui/code";
import styles from "./page.module.css";
import Header from "../components/Header";

function Gradient({
  conic,
  className,
  small,
}: {
  small?: boolean;
  conic?: boolean;
  className?: string;
}): JSX.Element {
  return (
    <span
      className={[
        styles.gradient,
        conic ? styles.glowConic : undefined,
        small ? styles.gradientSmall : styles.gradientLarge,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

export default function Page(): JSX.Element {
  return (
    <>
      <section className={styles.main}>
        <Header />
        <div className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.logos}>
              <div className={styles.logoGradientContainer}>
                <Gradient className={styles.logoGradient} conic small />
              </div>
              <div className={styles.logo}>
                <Image
                  alt=""
                  height={180}
                  priority
                  src="/Datathon_Logo.jpg"
                  width={180}
                />
              </div>
            </div>
            <Gradient className={styles.backgroundGradient} conic />
            <h1
              style={{ color: `#dcf4f5` }}
              className="font-bold text-4xl flex flex-row"
            >
              Kanehekili
              <div className="text-2xl">Datathon</div>
            </h1>
          </div>
        </div>
      </section>

      <div className={styles.infomain} id="title">
        <div className="grid grid-cols-2 grid-rows-2 gap-3">
          <div className="p-4">
            <div className={styles.description}>
              <h1 className="text-5xl">What is Datathon</h1>
            </div>

            <div className={styles.description}>
              <p>
                Datathon, similar to a hackathon, is a weekend-long competition
                where students collaborate in teams to develop a data science
                project that solves a problem announced at the event. A
                weekend-long event where students collaborate in teams to
                develop a data science project that solves a problem presented
                at the competition.
              </p>
            </div>
          </div>

          <div className="p-4"></div>
          <div className="p-4"></div>
          <div className="p-4">
            <div className={styles.description}>
              <h1 className="text-5xl">What is Kanehekili</h1>
            </div>

            <div className={styles.description}>
              <p>
                Kanehekili is the name of the demi-god of thunder in Hawaiian
                culture. An example of Kane worship in the name of one of these
                lesser deities is illustrated in the description given by
                Kamakau of the place held by Kane-hekili (Kane in the thunder)
                as an aumakua on the island of Maui. Kane-hekili as god of
                thunder is associated with Kane-wawahi-lani (Kane breaking
                through heaven), Ka-uila-nui-maka-keha‘i-i-ka-lani (Lightning
                flashing in the heavens), Ka-hoali‘i, and other gods whose names
                suggest the lively phenomena of a thunderstorm. Kane is one of
                the four main male gods in Hawaiian culture” fresh water god
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infomain}>
        <div className={`${styles.PartnerContainer}`}>
          <h1 className="text-7xl font-bold">Event Information</h1>
          <div className={styles.description}>
            <p>
              ACM at University of Hawaii at Manoa is proud to announce their
              first Datathon that will take place on{" "}
              <span className="text-lime-400 text-2xl font-bold">
                March 9 and March 10 2024{" "}
              </span>
              at UH Manoa registrations will open on{" "}
              <span className="text-lime-400 text-2xl font-bold">
                January 12
              </span>
              . Students of all levels of Data Science knowledge are encouraged
              to participate. There will be three levels in which teams can
              compete in: beginner, intermediate, and advanced, and workshops
              will be available for participants to attend throughout the event
              to supplement your data science skills. In teams of 4,
              participants will analyze and interpret data and present your
              project after 24 hours of creation and our panel of graders will
              select winners who will be awarded at the closing ceremony.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.infomain}>
        <div className={`${styles.PartnerContainer}`}>
          <h1 className="text-7xl font-bold">Location</h1>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4">
          <div>
            <iframe
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed/v1/place?q=Pacific%20Ocean%20Science%20%26%20Technology%2C%20Honolulu%2C%20HI%2C%20USA&key=AIzaSyAouQbhvuyRHjPtmNwCAYlozcyrYtjGF0M"
            ></iframe>
          </div>
          <div>
            <div className={styles.description}>
              <h1 className="text-5xl">
                There will be signs outside the building to guide you
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infomain} id ="partner">
        <div className={`${styles.PartnerContainer}`}>
          <h1 className="text-7xl font-bold">Partners</h1>
        </div>

        <div className="grid grid-cols-4 grid-rows-1 gap-4">
          <div className="justify-center items-center">
            <div className={styles.heroContent}>
              <div className={styles.logos}>
                <div className={styles.logoGradientContainer}>
                  <Gradient className={styles.logoGradient} conic small />
                </div>

                <div className={styles.logo}>
                  <Image
                    alt=""
                    height={190}
                    priority
                    src="/acm_Logo_New.png"
                    width={180}
                  />
                </div>
              </div>
              <Gradient className={styles.backgroundGradient} conic />
            </div>
          </div>

          <div className="p-4">
            {" "}
            <div className="justify-center items-center">
              <div className={styles.heroContent}>
                <div className={styles.logos}>
                  <div className={styles.logoGradientContainer}>
                    <Gradient className={styles.logoGradient} conic small />
                  </div>

                  <div className={styles.logo}>
                    <Image
                      alt=""
                      height={190}
                      priority
                      src="/ICS_logo_big.jpg"
                      width={180}
                    />
                  </div>
                </div>
                <Gradient className={styles.backgroundGradient} conic />
              </div>
            </div>
          </div>

          <div className="p-4">
            {" "}
            <div className="justify-center items-center">
              <div className={styles.heroContent}>
                <div className={styles.logos}>
                  <div className={styles.logoGradientContainer}>
                    <Gradient className={styles.logoGradient} conic small />
                  </div>

                  <div className={styles.logo}>
                    <Image
                      alt=""
                      height={190}
                      priority
                      src="/natsci_logo.png"
                      width={180}
                    />
                  </div>
                </div>
                <Gradient className={styles.backgroundGradient} conic />
              </div>
            </div>
          </div>
          <div className="p-4">
            {" "}
            <div className="justify-center items-center">
              <div className={styles.heroContent}>
                <div className={styles.logos}>
                  <div className={styles.logoGradientContainer}>
                    <Gradient className={styles.logoGradient} conic small />
                  </div>

                  <div
                    className={`${styles.logo} items-center flex justify-center`}
                  >
                    <h1 className="text-7xl font-bold">NSA</h1>
                  </div>
                </div>
                <Gradient className={styles.backgroundGradient} conic />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
