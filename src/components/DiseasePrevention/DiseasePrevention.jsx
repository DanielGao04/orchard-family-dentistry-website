import React, { useState, useEffect } from "react";
import diseaseprevention from "../../images/diseaseprevention.jpg";

const QualityService = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      // Customize the threshold value as needed
      const threshold = windowHeight * 0.7;

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
    // Mobile 
    <section>
    <div className={`md:hidden relative overflow-hidden bg-sky-200 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
    <img className={`w-full`} src={diseaseprevention} alt="Quality Service" />
    <div className={`absolute inset-0 flex flex-col justify-center px-6 py-12 text-center bg-opacity-75 bg-white`}>
      <h1 className={`text-3xl text-blue-900 mb-4`}>
      Cleanings Brighten Your Smile & Help Prevent Disease
      </h1>
      <h2 className="my-5 text-3xl text-blue-900 text-center">
        Heart Disease • Strokes • Worsening Asthma • Worsening Diabetes • Pregnancy Complications • Alzheimer’s • Dementia
        </h2>
      <p className={`text-base text-blue-900 leading-relaxed`}>
      Sources: National Institute of Health, NYU, University of Pennsylvania Dental School, Journal of Alzheimer’s Disease, Penn Medicine, British Dental Journal & Many More.{" "}
      </p>
    </div>
  </div>
  
  {/* Desktop */}
    <div className={`hidden md:flex bg-cover bg-sky-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : 'translate-x-full'}`}>
    <img className="md:w-1/8 h-auto w-1/3 object-cover" src={diseaseprevention} alt=""/>
      <div className="w-1/2 mx-auto py-5 flex flex-col justify-center">
        <h1 className="my-5 text-6xl text-blue-900 text-center">
        Cleanings Brighten Your Smile & Help Prevent Disease
        </h1>
        <h2 className="my-5 text-3xl text-blue-900 text-center">
        Heart Disease • Strokes • Worsening Asthma • Worsening Diabetes • Pregnancy Complications • Alzheimer’s • Dementia
        </h2>
        <p className="text-2xl py-8 whitespace-wrap text-center">
        Sources: National Institute of Health, NYU, University of Pennsylvania Dental School, Journal of Alzheimer’s Disease, Penn Medicine, British Dental Journal & Many More.{" "}
        </p>
      </div>
      
    </div>
    </section>
  );
};

export default QualityService;