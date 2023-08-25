import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../../images/dental.jpg";
import Orchard2 from "../../../images/OrchardFarm.jpg";
import crown from "../../../images/crown.png";
import denture from "../../../images/denture.png";
import dentalimplant from "../../../images/dental-implant.png";
import toothcolour from "../../../images/teethcolour.png";
import veneers from "../../../images/dental-veneer.png";
import mercury from "../../../images/mercury free.png";
import whitening from "../../../images/tooth-whitening.png";
import xray from "../../../images/x-ray.png";
import sedation from "../../../images/sedation.png";
import jaw from "../../../images/jaw.png";

const Xray2 = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
  
    <section class="bg-white dark:bg-gray-900">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                    <p class="text-lg text-blue-300">We offer in-office digital x-rays for your convenience</p>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-5xl">
                    Digital X-Rays
                    </h2>
                        
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-2xl">
                    Digital x-rays are computer-generated images.
                    </h2>
                    <p class="mt-3 text-gray-500 dark:text-gray-300 md:text-lg">
                    These images require up to 90% less radiation than with conventional film-type x-rays. Instead of using the traditional silver-oxide x-ray film, which must be developed & then fixed in caustic & environmentally damaging solutions, the new system takes pictures via a small electronic sensor. A picture of the tooth is instantaneously transmitted onto the monitor in the treatment room so we can see your teeth & surrounding structures immediately.
                    </p>
    
                   
                </div>
            </div>
        </div>
    </section>
  );
};

export default Xray2;
