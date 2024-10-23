import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abishek</h1>
        <p className={styles.description}>
          I'm a full-stack and AR/VR developer with 1 year of experience using React,
          NodeJS, Machine Learning, Unity, Blender. Reach out if you'd like to learn more!
        </p>
        <a href="#contact" className={styles.contactBtn}>
          Contact Me
        </a>
        <p className={styles.description}>
          +919629469933
        </p>
      </div>
      <img
        src={getImageUrl("about/me2.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
