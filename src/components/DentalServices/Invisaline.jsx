import React, { useState, useEffect } from "react";

import Orchard2 from "../../images/invisalign.jpg";


const Invisaline = () => {
  const [,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                
                <img class="shadow-2xl object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                    <p class="text-lg text-blue-300">
                    You can get that beautiful, straighter smile!                   
                    </p>
    
                    <h2 class="mb-3 md:mb-0 text-4xl font-semi-bold">
                    What Invisalign Can Do for Your Smile
                    </h2>
    
                    <h2 class="mb-6 text-2xl">
                    The family-owned dental practice of Orchard Family Dentistry in Burlington offers complete restorative dentistry that will have you smiling from ear to ear!          
                    </h2>

                    <p class="mb-6 pb-2 text-neutral-500 text-xl">
                    The office is open seven days a week with early morning, late evening, and weekend appointments available so you will always have convenience with your dental care. Treatment options for orthodontics include Invisalign.
                    </p>    
                </div>
            </div>
        </div>

      <div className="flex bg-cover bg-sky-100 transform transition-transform duration-1500 justify-center py-12 md:py-16">
        <div className="px-10 md:px-0 md:w-3/5">
          <h1 className="mb-5 text-5xl text-blue-900 md:font-semibold text-center pb-1">
            Invisalign
          </h1>
          <p className="my-1 text-xl md:text-2xl text-blue-900 text-center">
            Invisalign is a great option for both teens and adults who don't want everyone to see they are having orthodontic work done. Rather than using the highly visible wires and brackets, Invisalign uses clear aligners. They are customized, removable, and mostly undetectable. This option can be more expensive than other options and could mean a longer treatment plan but is the right choice for those who want to look good in pictures and don't want anyone to know about their treatment.          
          </p>
        </div>
      </div>
    </section>
  );
};

export default Invisaline;
