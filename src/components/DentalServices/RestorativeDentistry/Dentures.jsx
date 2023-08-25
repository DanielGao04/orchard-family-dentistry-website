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
                    <p class="text-lg text-blue-300">BEAUTIFUL & HEALTHY SMILE</p>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-5xl">
                    Dentures
                    </h2>
                        
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 dark:text-white md:text-2xl">
                    If you’ve lost teeth from decay, injury or periodontal (gum) disease, dentures are the solution..
                    </h2>
                    <p class="mt-3 text-gray-500 dark:text-gray-300 md:text-lg">
                    Whether you need partial or full dentures, they’re essential not only to improve the look of your smile but also your oral health. In addition to allowing you to eat as if you had never lost your teeth, dentures also protect against facial sagging that would otherwise occur & cause a more aged appearance. Dentures can also improve your speech. Denture maintenance combined with a regular regimen of proper brushing can guarantee you’ll lead a more comfortable & healthy life.
                    </p>
    
                   
                </div>
            </div>
        </div>
    </section>
  );
};

export default Xray2;
