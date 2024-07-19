"use client";

import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import logoImage from "../../public/banner.png";
import CountdownTimer from "../components/CountdownTimer";
import EmblaCarousel from "../components/EmblaCarousel";
import styles from "../styles/page.module.css";

// This component represents the homepage, featuring a logo image that fades in when loaded, a countdown timer (imported from a separate module), a carousel  (imported from a separate module), and a link to access videos.

export default function HomePage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <>
      <Head>
        <title>NJEF 2025 Nouvelles Journées d'Echographie Foetale</title>
        <meta name="description" content="Created by Zaid" />
      </Head>
      <div className={styles.primaryContainer}>
        <div className={styles.imageContainer}>
          <Image
            src={logoImage}
            alt="NJEF 2025 Logo"
            width={912}
            height={316}
            className={`${styles.logoimage} ${
              imageLoaded ? styles.loaded : ""
            }`}
            onLoadingComplete={handleImageLoad}
          />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.mainTitle}>À vos agendas !</h2>
          <p className={styles.paragraphOne}>
            Chers Amis, <br />
            Le prochain congrès NJEF se déroulera les :{" "}
            <span className={styles.paragraphOneSpan}>
              31 janvier - 1er et 2 février 2025
            </span>
          </p>
          <br />
          <p className={styles.paragraphTwo}>Le foetus, c'est le CFEF !</p>
          <br />
          <p className={styles.paragraphThree}>A bientôt,</p>
          <p className={styles.paragraphFour}>
            Le bureau du CFEF <br />
            Les organisateurs
          </p>
          <br />
          <CountdownTimer />
          <EmblaCarousel />
          <div className={styles.button}>
            <a href="https://cfef.org/NJEF.php" className={styles.videoLink}>
              Accès aux vidéos des éditions précédentes
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
