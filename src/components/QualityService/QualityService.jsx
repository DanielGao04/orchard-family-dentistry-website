import React, { useState, useEffect } from "react";
import family1 from "../../images/family1.jpg"

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

    // Mobile Screen
    <section>
      <div className={`md:hidden relative overflow-hidden bg-sky-200 transform  transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <img className="w-full" src={family1} alt="Quality Service" />
        <div className={`absolute inset-0 flex flex-col justify-center px-5 py-12 ext-center md:text-left bg-opacity-75 bg-white`}>
          <h1 className={`text-3xl text-blue-900 mb-4 text-center`}>
            Trusted, Personalized & Affordable Dental Care
          </h1>
          <p className={`text-base text-blue-900 leading-relaxed text-center`}>
            At Orchard Family Dentistry, our caring team is dedicated to providing the highest level of convenience and personalized care for your entire family. We offer a range of modern dentistry services and aim to keep you healthy throughout your life.
          </p>
        </div>
      </div>

      {/* Desktop Screen */}
      <div className={`hidden md:flex bg-cover bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`flex flex-col py-10 justify-center md:w-3/4`}>
          <h1 className={`mx-auto w-4/5 pb-5 text-6xl text-blue-900 text-center`}>
            Trusted, Personalized & Affordable Dental Care for Your Whole Family
          </h1>
          <p className={`mx-auto w-4/5 text-2xl text-blue-900 pt-2 whitespace-wrap text-center`}>
            At Orchard Family Dentistry, it’s the mission of our caring team to provide
            the highest level of convenience & personalized care for your entire
            family. We are your one-stop location for all aspects of safe &
            modern dentistry & we want to do our part to keep you healthy through
            your entire life!
          </p>
        </div>
        <img className={`md:w-1/4 h-auto w-1/3 object-cover`} src={family1} alt="" />
      </div>
      </section>

  );
};

export default QualityService;
