"use client";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react"; //npm install embla-carousel-react
import Autoplay from "embla-carousel-autoplay"; //npm install embla-carousel-autoplay
import styles from "../styles/page.module.css";
import fEco from "../../public/eco1.jpg";
import sEco from "../../public/eco2.jpg";
import tEco from "../../public/eco3.jpg";

// This component implements an automatic image carousel using Embla Carousel, with images sliding every 3 seconds and looping continuously.

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>
        <div className={styles.embla__slide}>
          <Image src={fEco} alt="ecografia 1" />
        </div>
        <div className={styles.embla__slide}>
          <Image src={sEco} alt="ecografia 2" />
        </div>
        <div className={styles.embla__slide}>
          <Image src={tEco} alt="ecografia 3" />
        </div>
      </div>
    </div>
  );
}
