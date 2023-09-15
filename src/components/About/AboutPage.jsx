import React from "react";
import image from "./About.module.css";
import person from "../../assets/images/background/vanlife.jpg";
import { Footer } from "../../components";

const styles = {
  about: "flex flex-col justify-center items-center ",
  aboutDiv: "px-6 py-[45px] sm:max-w-[600px] lg:max-w-[800px] xl:max-w-[950px]",
  aboutText: "font-semibold leading-10 text-3xl md:text-4xl lg:text-5xl",
  aboutParagraph: "text-base md:text-lg mt-5",
  imgDiv:
    " flex w-full max-w-full justify-center align-center relative h-[200px] md:h-[300px] lg:h-[300px] xl:h-[600px] bg-center bg-cover",
  exploreDiv: "bg-[#FFCC8D] py-10 px-5 mt-10 lg:px-6 rounded-sm",
  exploreText: "font-bold text-2xl md:text-3xl xl:text-4xl",
  exploreBtn:
    "bg-black text-white px-4 py-2 rounded-lg mt-5 md:text-xl xl:text-2xl xl:mt-8 hover:bg-slate-700",
};

const AboutPage = () => {
  return (
    <section className={styles.about}>
      <div className={styles.imgDiv}>
        <img className={image.image} src={person} alt="" />
      </div>

      <div className={styles.aboutDiv}>
        <h2 className={styles.aboutText}>
          Don’t squeeze in a sedan when you could relax in a van.
        </h2>
        <p className={styles.aboutParagraph}>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className={styles.aboutParagraph}>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>

        <div className={styles.exploreDiv}>
          <h3 className={styles.exploreText}>Your destination is waiting.</h3>
          <h3 className={styles.exploreText}>Your van is ready.</h3>
          <button className={styles.exploreBtn}>Explore our vans</button>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
