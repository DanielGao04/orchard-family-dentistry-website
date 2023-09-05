import React, { useState, useEffect } from "react";
import MesialImpaction from "../../../images/Mesial.png";
import HorizontalImpaction from "../../../images/Horizontal.png";
import VerticalImpaction from "../../../images/Vertical.png";
import DistalImpaction from "../../../images/Distal.png";

const WisdomTeethRemoval = () => {
  const [,setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  },[]);

  return (
  
    <section class="py-10 md:py-20 bg-white">
    <div class="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
        <div class="bg-sky-200 bg-cover p-[7%] ">
            <h2 class="w-full text-3xl font-bold text-left sm:text-4xl md:text-5xl"> Why Do Wisdom Teeth Have to Be Removed so Often?</h2>
            <p class="w-full pt-5 mx-2 mt-2 text-2xl text-left text-gray-700 intro sm:max-w-5xl">Wisdom teeth are considered third molars and are the last four teeth to emerge after all other adult teeth have grown in. This typically occurs between the ages of 17 and 25-years-old. Wisdom teeth are located at the very end of the molars on the top, bottom, and both sides of the mouth. Ages ago, when people ate raw foods in their natural state, wisdom teeth were important for chewing. Today, food is cut, chopped, pureed, and cooked, so wisdom teeth are not needed. </p>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex flex-col md:mx-auto justify-center mt-5 mb-8 md:mt-0 md:w-10/12 sm:pr-16">
                <h3 class="mt-2 text-3xl md:text-center sm:text-left md:text-5xl">Four types of impacted wisdom teeth</h3>
                <p class="mt-5 text-2xl text-gray-700 text md:text-center">When there isn’t enough room in the back of the mouth, wisdom teeth may not be able to erupt or emerge, and they become impacted. There are four types of impacted wisdom teeth</p>
            </div>
        </div>


        <div className="border-solid p-5 md:p-24 border-2 border-gray-100 rounded-lg">
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img class="rounded-lg shadow-xl" src={MesialImpaction} alt="Mesial Impaction"/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Mesial Impaction</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">When the teeth remain partially trapped under the gums and come in on an angle pointing towards the front of the mouth, it’s referred to as a mesial impaction.</p>
            </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img class="rounded-lg shadow-xl" src={HorizontalImpaction} alt="Horizontal Impaction"/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Horizontal Impaction</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">When wisdom teeth come in completely sideways, it’s called horizontal impaction and is the most painful kind of impacted teeth.</p>
            </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img class="rounded-lg shadow-xl" src={VerticalImpaction} alt="Vertical Impaction"/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Vertical Impaction</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left">If a wisdom tooth comes up in the correct position but remains under the gum-line, it’s a vertical impaction.</p>
            </div>
        </div>
        <div class="flex flex-col mb-8 animated fadeIn sm:flex-row">
            <div class="flex items-center mb-8 sm:w-1/2 md:w-5/12">
                <img class="rounded-lg shadow-xl" src={DistalImpaction} alt="Distal Impaction"/>
            </div>
            <div class="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
                <h3 class="mt-2 text-2xl sm:text-left md:text-4xl">Distal Impaction</h3>
                <p class="mt-5 text-lg text-gray-700 text md:text-left"> Like the mesial impaction, a distal impaction means the tooth comes up partially and on an angle, but it points towards the back of the mouth.</p>
            </div>
        </div>
        </div>


        <div className="flex bg-cover  transform transition-transform duration-1500 justify-center py-10">
          <div className="px-auto md:w-4/5">
          <h1 className="my-5 text-5xl md:mb-8 md:text-6xl text-blue-900 text-leftpb-1">
          Orchard Family Dentistry Can Remove Painful Wisdom Teeth
          </h1>
        
          <p className="my-1 text-2xl text-blue-900 text-left mb-5">
          Orchard Family Dentistry conducts a full examination of your wisdom teeth, including x-rays, to evaluate the position of the teeth and which ones may need to be pulled. While some people need all four teeth pulled, some may only need one, two, or three taken out. When you come in for a tooth extraction, Orchard Family Denistry's friendly and experienced staff make sure you’re comfortable and will administer soothing anesthesia or sedation. State-of-the-art equipment allows for precise removal of each tooth to minimize discomfort.          </p>
          <p className="my-1 text-2xl text-blue-900 text-left">
          Wisdom teeth removal does not require an overnight stay, and once you’ve recovered and the pain is under control, you can return home. Our caring staff will provide after-care instructions and contact information in case of any problems. Recovery takes about a week, and a staff member will check with you to see how you’re doing. Don’t ignore the pain caused by impacted wisdom teeth. Let Orchard Family Dentistry do an examination and evaluation of your wisdom teeth for possible removal to prevent additional health issues and pain.         
          </p>
        </div>
      </div>

    </div>
</section>
  );
};

export default WisdomTeethRemoval;
