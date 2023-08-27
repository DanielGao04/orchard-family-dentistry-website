import React, { useState, useEffect } from "react";

import Orchard2 from "../../images/OrchardFarm.jpg";


const Invisaline = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">

                    <p class="text-lg text-blue-300">
                    You can get that beautiful, straighter smile!                   
                    </p>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 md:text-5xl">
                    What Orthodontics and Invisalign Can Do for Your Smile
                    </h2>
    
                    <h2 class="block mt-4 text-6xl font-semibold text-gray-800 md:text-2xl">
                    The family-own dental practice of Taunton Village Dental in Oshawa offers complete orthodontics and restorative dentistry that will have you smiling from ear to ear!          
                    </h2>

                    <p class="mt-3 text-gray-500 md:text-lg">
                    The office is open seven days a week with early morning, late evening, and weekend appointments available so you will always have convenience with your dental care. Treatment options for orthodontics include Invisalign, traditional metal braces, clear braces, braces put behind the teeth, so they are hidden (lingual braces), temporary anchoring devices, and retainers. We serve both children and adults in their orthodontic needs.
                    Here is more information about our orthodontic options and treatments.
                    </p>    

                </div>
            </div>
        </div>
    </section>
  );
};

export default Invisaline;
