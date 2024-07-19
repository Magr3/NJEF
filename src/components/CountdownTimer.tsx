"use client";
import { useEffect, useState } from "react"; // Imports hooks
import styles from "../styles/page.module.css";

// This component displays a countdown timer to a specific date, updating every second and showing the remaining days, hours, and minutes, or a message if the timer has expired. It also manages visibility and announces updates for accessibility.

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 });
  const [visible, setVisible] = useState(false);
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    const countDownDate = new Date("Jan 31, 2025 00:00:00").getTime();
    const x = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      if (distance < 0) {
        clearInterval(x);
        setExpired(true);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        setTimeLeft({ days, hours, minutes });
      }
    }, 1000);
    setTimeout(() => setVisible(true), 100);
    return () => clearInterval(x);
  }, []);

  return (
    <div
      className={`${styles.timerContainer} ${
        visible ? styles.visible : styles.hidden
      }`}
    >
      <h2 className={`${styles.title}`}>Compte à rebours...</h2>
      <div className={`${styles.flexContainer}`}>
        {expired ? (
          <div className={styles.timerBox}>
            <span className={styles.timeValue}>Le congrès a commencé!</span>
          </div>
        ) : (
          <>
            <div className={styles.timerBox}>
              <span className={styles.timeValue}>{timeLeft.days}</span>
              <span className={styles.timeLabel}>Jours</span>
            </div>
            <div className={styles.timerBox}>
              <span className={styles.timeValue}>{timeLeft.hours}</span>
              <span className={styles.timeLabel}>Heures</span>
            </div>
            <div className={styles.timerBox}>
              <span className={styles.timeValue}>{timeLeft.minutes}</span>
              <span className={styles.timeLabel}>Minutes</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
