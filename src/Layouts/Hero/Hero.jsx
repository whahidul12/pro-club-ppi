import React, { useEffect, useRef } from "react";
import "./Hero.css";
import HeroCard from "../../Components/HeroCard/HeroCard";
import hero_1 from "../../assets/Images/hero-section-img/hero-1.png";
import hero_2 from "../../assets/Images/hero-section-img/hero-2.jpg";
import hero_3 from "../../assets/Images/hero-section-img/hero-3.jpg";
import hero_4 from "../../assets/Images/hero-section-img/hero-4.jpg";
import hero_5 from "../../assets/Images/hero-section-img/hero-5.png";
import hero_6 from "../../assets/Images/hero-section-img/hero-6.jpg";
import hero_7 from "../../assets/Images/hero-section-img/hero-7.jpg";
import hero_8 from "../../assets/Images/hero-section-img/hero-8.jpg";
import hero_9 from "../../assets/Images/hero-section-img/hero-9.jpg";
import hero_10 from "../../assets/Images/hero-section-img/hero-10.jpg";

const heroImgArr = [
  hero_1,
  hero_2,
  hero_3,
  hero_4,
  hero_5,
  hero_6,
  hero_7,
  hero_8,
  hero_9,
  hero_10,
];

export default function Hero() {
  const nextBtnRef = useRef(null);
  const prevBtnRef = useRef(null);
  const carouselRef = useRef(null);
  const listRef = useRef(null);
  const runningTimeRef = useRef(null);

  const timeRunning = 3000; // animation class duration
  const timeAutoNext = 7000; // when to auto-advance

  const runTimeOutRef = useRef(null);
  const runNextAutoRef = useRef(null);

  useEffect(() => {
    const nextBtn = nextBtnRef.current;
    const prevBtn = prevBtnRef.current;
    const carousel = carouselRef.current;
    const list = listRef.current;
    const runningTime = runningTimeRef.current;

    function resetTimeAnimation() {
      if (!runningTime) return;
      runningTime.style.animation = "none";
      // trigger reflow
      // >eslint-disable-next-line no-unused-expressions
      runningTime.offsetHeight;
      runningTime.style.animation = "runningTime 7s linear 1 forwards";
    }

    function showSlider(type) {
      if (!list || !carousel) return;
      const sliderItemsDom = list.querySelectorAll(".item");
      if (type === "next") {
        list.appendChild(sliderItemsDom[0]);
        carousel.classList.add("next");
      } else {
        list.prepend(sliderItemsDom[sliderItemsDom.length - 1]);
        carousel.classList.add("prev");
      }

      if (runTimeOutRef.current) clearTimeout(runTimeOutRef.current);
      runTimeOutRef.current = setTimeout(() => {
        carousel.classList.remove("next");
        carousel.classList.remove("prev");
      }, timeRunning);

      if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);
      runNextAutoRef.current = setTimeout(() => {
        if (nextBtn) nextBtn.click();
      }, timeAutoNext);

      resetTimeAnimation();
    }

    function onNext() {
      showSlider("next");
    }
    function onPrev() {
      showSlider("prev");
    }

    if (nextBtn) nextBtn.addEventListener("click", onNext);
    if (prevBtn) prevBtn.addEventListener("click", onPrev);

    // initial auto advance
    runNextAutoRef.current = setTimeout(() => {
      if (nextBtn) nextBtn.click();
    }, timeAutoNext);

    resetTimeAnimation();

    return () => {
      if (nextBtn) nextBtn.removeEventListener("click", onNext);
      if (prevBtn) prevBtn.removeEventListener("click", onPrev);
      if (runTimeOutRef.current) clearTimeout(runTimeOutRef.current);
      if (runNextAutoRef.current) clearTimeout(runNextAutoRef.current);
    };
  }, []);

  return (
    <div className="carousel z-0" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {heroImgArr.map((img) => (
          <HeroCard img={img} />
        ))}
      </div>

      <div className="arrows">
        <button className="prev" ref={prevBtnRef}>
          &lt;
        </button>
        <button className="next" ref={nextBtnRef}>
          &gt;
        </button>
      </div>

      <div className="timeRunning" ref={runningTimeRef}></div>
    </div>
  );
}
