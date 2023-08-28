import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/OrchardFarm.jpg";

const Xray2 = () => {
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
                    <p class="text-lg text-blue-300">We offer in-office digital x-rays for your convenience</p>
    
                    <h2 class="block mt-4 text-3xl md:text-5xl font-semibold text-gray-800">
                    Digital X-Rays
                    </h2>
                        
                    <h2 class="block mt-2 md:mt-4 md:text-3xl font-semibold text-gray-800">
                    Digital x-rays are computer-generated images.
                    </h2>
                    <p class="mt-3 text-gray-500 md:text-lg">
                    These images require up to 90% less radiation than with conventional film-type x-rays. Instead of using the traditional silver-oxide x-ray film, which must be developed & then fixed in caustic & environmentally damaging solutions, the new system takes pictures via a small electronic sensor. A picture of the tooth is instantaneously transmitted onto the monitor in the treatment room so we can see your teeth & surrounding structures immediately.
                    </p>
    
                   
                </div>
            </div>
        </div>
    </section>
  );
};

export default Xray2;
