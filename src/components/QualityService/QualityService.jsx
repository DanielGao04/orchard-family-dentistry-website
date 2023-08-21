import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../images/dental.jpg";

const QualityService = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Customize the threshold value as needed
      const threshold = windowHeight * 0.3;

      if (scrollTop > threshold) {
        setAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`flex bg-cover bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
        <h1 className={`my-5 text-6xl text-blue-900 text-center`}>
          Trusted, Personalized & Affordable Dental Care for Your Whole Family
        </h1>
        <p className={`text-3xl text-blue-900 py-8 whitespace-wrap text-center`}>
          At Lake Tahoe Dental, it’s the mission of our caring team to provide
          the highest level of convenience & personalized care for your entire
          family. We are your one-stop location for all aspects of safe &
          modern dentistry & we want to do our part to keep you healthy through
          your entire life!
        </p>
      </div>
      <img className={`md:w-1/8 h-1/8 lg:h-1/3 w-1/3`} src={qualityServiceImg} alt="" />
    </div>
  );
};

export default QualityService;
