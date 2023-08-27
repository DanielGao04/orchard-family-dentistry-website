import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/OrchardFarm.jpg";

const SedationDentistry = () => {
  const [,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
  
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                    <p class="text-lg text-blue-300">Amazingly Comfortable Sedation</p>
    
                    <h2 class="block mt-4 text-4xl md:text-5xl font-semibold text-gray-800">
                    Sedation Dentistry
                    </h2>
                        
                    <h2 class="block mt-4 text-3xl md:text-3xl font-semibold text-gray-800">
                    Wake up to a more healthy & beautiful smile with amazingly comfortable sedation dentistry. We care for patients who:
                    </h2>
                    <ul class="list-disc list-inside">
                <li class="mb-3 mt-5">
                Are afraid of needles & shots.                
                </li>
                <li class="mb-3">
                Have had bad experiences before.
                </li>
                <li class="mb-3">
                Have not been to the dentist in a long time.
                </li>
                <li class="mb-2">
                Always gag when having dental work done.
                </li>
                <li class="mb-2">
                Just can’t seem to get numb.
                </li >
                <li class="">
                  Feel their teeth are too far gone for traditional
                </li>
                <p className="text-md ml-5">treatment</p>
            </ul>
    
                   
                </div>
            </div>
        </div>
    </section>
  );
};

export default SedationDentistry;
