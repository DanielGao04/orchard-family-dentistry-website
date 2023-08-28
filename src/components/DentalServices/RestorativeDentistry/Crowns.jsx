import React, { useState, useEffect } from "react";
import Orchard2 from "../../../images/crowns.jpg";

const Crowns = () => {
  const [ ,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
  
    <section class="bg-white">
        <div class="container px-6 py-5 mx-auto mb-12">
            <div class="mt-8 lg:-mx-6 lg:flex lg:items-center">
                <img class="object-cover w-full lg:mx-6 lg:w-2/4 rounded-xl h-78 lg:h-200" src={Orchard2}alt=""/>
    
                <div class="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6">
                    <p class="text-lg text-blue-300">FILL GAPS & RESTORE YOUR SMILE</p>
    
                    <h2 class="block mt-4 text-4xl md:text-5xl font-semibold text-gray-800">
                    Oshawa Dental Crowns
                    </h2>
                        
                    <h2 class="block mt-4 md:text-3xl font-semibold text-gray-800">
                    Crowns cover & support a tooth with a large filling when there isn’t enough tooth left.
                    </h2>
                    <p class="mt-3 text-gray-500 md:text-lg">
                    It can be used to attach a bridge, protect a weak tooth from breaking or restore one that’s already broken. A crown is a good way to cover teeth that are discoloured or badly shaped as well, or to cover a dental implant. A crown can make your tooth stronger & improve its appearance.
                    </p>
    
                   
                </div>
            </div>
        </div>
    </section>
  );
};

export default Crowns;
