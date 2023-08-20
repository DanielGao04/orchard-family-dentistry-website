import React from "react";
import Orchard2 from "../../images/Orchard2.jpg";

const QualityService = () => {
  return (
    <div>
      {/* Top Words Section */}
      <div className="flex bg-cover bg-sky-300 transform transition-transform duration-1500 justify-center py-20" style={{ backgroundImage: `url(${Orchard2})` }}>
        <div className="md: w-4/5 py-20">
          <h1 className="my-5 text-7xl text-white font-semibold text-center pb-10">
            We Are Lake Tahoe’s Most Trusted & Comprehensive Dental Care Provider
          </h1>
          <h2 className="my-5 text-2xl text-blue-200 font-semibold text-center px-60">
            At our community-focused practice, your comfort & satisfaction come first. We look forward 
            to meeting you soon & developing a relationship with you to build the bridge toward long-term 
            trust & successful dental care. Lake Tahoe Dental invites you to see why our patients can’t stop 
            smiling!
          </h2>
        </div>
      </div>

      {/* Why We're Different Section */}
      <div className="flex bg-cover transform transition-transform duration-1500 justify-center py-7">
        <div className="px-40 md:w-3/4">
          <h1 className="my-5 text-4xl text-blue-900 font-semibold text-center">
            Why We're Different
          </h1>
          <div className="mt-10 space-y-8">
            <DifferenceCard
              title="A Trusted Tradition of Dental Care"
              content="Our professionals put your comfort & satisfaction first to make it easier to get the dental care you deserve. We believe in making dental care comfortable, affordable & accessible for you & your entire family."
            />

            <DifferenceCard
              title="Dentistry That Fits Any Budget"
              content="We aim to stop dental problems before they become severe & costly. Along with your regular home care routine, seeing us every six months for teeth cleanings & exams is the best way to prevent dental problems. As part of our commitment to helping our patients maintain optimal oral health, we will make sure you pay as little out-of-pocket as possible for your preventive care."
            />

            <DifferenceCard
              title="We Won’t Make You Miss Work or School"
              content="Taking time off from work or school for your dental appointments isn’t just a massive inconvenience—it’s a barrier to seeing the dentist on a regular basis. At Lake Tahoe Dental, we have lifted this barrier by opening our schedule on weekday evenings & weekends. Now there’s no need to miss work to get your teeth cleaned!"
            />
          </div>
        </div>
      </div>

      {/* Secondary Words Section */}
      <div className="flex bg-cover bg-sky-200 transform transition-transform duration-1500 justify-center py-10">
        <div className="px-40 md:w-3/4">
          <h1 className="my-5 text-4xl text-blue-900 font-semibold text-center pb-3">
            Lake Tahoe Dental Staff Put Your Comfort & Safety First
          </h1>
          <p className="my-5 text-2xl text-green-900 font-semibold text-center px-20">
            Our exceptional, friendly staff is our greatest asset. All of our dental assistants & hygienists are licensed professionals who pride themselves on their current dental techniques & outstanding patient communication. With unmatched quality & integrity, they are dedicated to achieving the best possible results for you & your family.
          </p>
        </div>
      </div>


      <div className="flex bg-cover transform transition-transform duration-1500 justify-center">
        <div className="px-40 md:w-3/4">
          <h1 className="my-9 text-6xl text-blue-900 font-semibold text-center py-10">
            Meet Our Doctors
          </h1>
        </div>
      </div>

      {/* Employees Section */}
      <div className="flex justify-center py-10">
        <div className="max-l-4xl max-w-7xl grid grid-cols-1 gap-6 md:grid-cols-4 mx-auto">
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content="David Hu"
          />

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content="Dominic"
          />

          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content="David Hu"
          />
          
          <EmployeeCard
            imgSrc="https://tecdn.b-cdn.net/img/new/standard/nature/182.jpg"
            content="David Hu"
          />
          {/* Add more EmployeeCard components here */}
        </div>
      </div>
    </div>
  );
};

const EmployeeCard = ({ imgSrc, content }) => (
  <div className="block max-w-[18rem] bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mx-8">
    <div className="relative overflow-hidden bg-cover bg-no-repeat">
      <img className="h-full w-full rounded-t-lg" src={imgSrc} alt="" />
    </div>
    <div className="p-6">
      <p className="text-2xl text-blue-900 text-center text-neutral-600 dark:text-neutral-200">{content}</p>
    </div>
  </div>
);

const DifferenceCard = ({ title, content }) => (
  <div className="bg-white rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 p-6">
    <h2 className="text-2xl text-blue-900 font-semibold mb-4">{title}</h2>
    <p className="text-base text-neutral-600 dark:text-neutral-200">{content}</p>
  </div>
);

export default QualityService;
