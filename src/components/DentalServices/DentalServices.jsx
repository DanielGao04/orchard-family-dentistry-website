import React, { useState, useEffect } from "react";
import qualityServiceImg from "../../images/dental.jpg";

const DentalServices = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="bg-cover">

      {/* First Animated Section */}
      <div className={`flex bg-cover bg-sky-100 transform transition-transform duration-1500 ${animate ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className={`px-40 flex flex-col justify-center md:w-3/4`}>
          <h1 className={` text-4xl text-blue-900 font-semibold text-left`}>
          TREAT YOURSELF TO
          </h1>
          <h1 className={`my-3 text-5xl text-blue-900 font-semibold text-left`}>
          Dental Care Services:
          </h1>
          <p className="text-3xl text-blue-900 py-8 whitespace-wrap text-left">
          At Taunton Village Dental, we offer an array of different dental care services that we can provide for your family right here in Oshawa, ON. From preventive cleanings to dental implants & dentures, Taunton Village Dental is the place to go for all of your dental needs & in one convenient location. Please take your time to view & read more about all the dental services below that our patients can receive.
          </p>
        </div>
        <img className={`md:w-1/8 h-1/8 lg:h-1/2 w-1/2`} src={qualityServiceImg} alt="" />
      </div>


      {/* Student Discounts Banner */}
      <div className="py-4 text-blue-900 text-center px-80">
        <h1 className="text-4xl font-semibold mt-20 mb-5">The professionals on our dental care team have dedicated their careers to providing the best care possible to our patients.</h1>
        <p className="text-blue-400 text-2xl font-semibold">
          While this page lists most of the dental care services we provide, please know that we are continuously educating ourselves on the latest dental care techniques, technologies & materials to provide you with the most advanced dental care available. All treatment decisions at our practice come from conversations between you & your dentist, & we are happy to offer dental care beyond the treatments listed here to fit your individual needs. If you have questions about any of our dental care services, please do not hesitate to ask.
        </p>
      </div>

      {/* Divider */}
      <div className="py-4 text-blue-900 text-center px-80">
        <h1 className="text-4xl font-semibold mt-20 mb-5">Preventive Dental Care for the Entire Family</h1>
        <p className="text-blue-400 text-2xl font-semibold">
        At Taunton Village Dental, we practice dentistry for the whole family. From preventive education & regular hygiene to identifying & caring for dental issues that may arise, your continued oral health is our top priority.
        </p>
      </div>

      {/* Divider */}
      <div className="py-4 text-blue-900 text-center px-80">
        <h1 className="text-4xl font-semibold mt-20 mb-5">Restorative Dental Care</h1>
        <p className="text-blue-400 text-2xl font-semibold">
        We offer restorative dental care. We know that even when you do everything right, something can go wrong. If you are suffering from a dental problem, we are here to help. Modern technology, combined with the in-depth experience of our clinical team, can assure you of a successful & long-lasting result. Whether the cause is accident or disease, we can restore your smile.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-1/3">
            <ul>
              <li>
                <a href="/DentalServices/RestorativeDentistry/Crowns">
                <h1 className = "text-2xl">Crowns</h1>
                </a>
                <p className="text-1xl font-semibold">
                Crowns cover & support a tooth with a large filling when there isn’t enough tooth left.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul>
              <li>
                <a href="/DentalServices/RestorativeDentistry/Dentures">
                <h1 className = "text-2xl">Dentures</h1>
                </a>
                <p className="text-1xl font-semibold">
                If you’ve lost teeth from decay, injury or periodontal (gum) disease, dentures are the solution.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul>
              <li>
                <a href="/DentalServices/RestorativeDentistry/DentalImplants">
                <h1 className = "text-2xl">Dental Implants</h1>
                </a>
                <p className="text-1xl font-semibold">
                Dental implants are man-made replacements for natural teeth & are essentially permanent, attached teeth that replace partials, bridges or dentures.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="py-4 text-blue-900 text-center px-80">
        <h1 className="text-4xl font-semibold mt-20 mb-5">Cosmetic Dental Care</h1>
        <p className="text-blue-400 text-2xl font-semibold">
        Having a great smile can make a huge difference in the way you look & feel. Taunton Village Dental offers a complete range of cosmetic dental care treatments to create the confident smile you’ve always wanted. We begin with a detailed smile assessment, discussing with you which aspects you like & dislike about your smile. Once our assessment is complete, we will discuss with you treatment options to help your smile look more natural, youthful & healthy.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-1/4">
            <ul>
              <li>
                <a href="/DentalServices/CosmeticDentist/ToothColouredDentistry">
                <h1 className = "text-2xl">Tooth-Coloured Dentistry</h1>
                </a>
                <p className="text-1xl font-semibold">
                Modern tooth-coloured fillings made of durable resin or porcelain can be bonded to your teeth for a stronger & more natural-looking effect.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul>
              <li>
                <a href="/DentalServices/CosmeticDentist/PorcelainVeneers">
                <h1 className = "text-2xl">Porcelain Veneers</h1>
                </a>
                <p className="text-1xl font-semibold">
                Excellent alternative to crowns & can perfect your smile by masking stains, hiding chips, correcting misalignment & creating uniformity.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul>
              <li>
                <a href="/DentalServices/CosmeticDentist/MercuryFreeDentistry">
                <h1 className = "text-2xl">Mercury-Free Dentistry</h1>
                </a>
                <p className="text-1xl font-semibold">
                New & advanced fillings made of tooth-coloured materials that contain no metals or mercury.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/4">
            <ul>
              <li>
                <a href="/DentalServices/CosmeticDentist/TeethWhitening">
                  <h1 className = "text-2xl">Teeth Whitening</h1>
                </a>
                <p className="text-1xl font-semibold">
                Now you can have significantly whiter teeth in a matter of a few days using advanced teeth whitening techniques.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="py-4 text-blue-900 text-center px-80 mb-24">
        <h1 className="text-4xl font-semibold mt-20 mb-5">General Dental Care</h1>
        <p className="text-blue-400 text-2xl font-semibold">
        The dentists of Taunton Village Dental have extensive experience in the diagnosis, treatment, management & coordination of dental care services to care for their patients & their families. General dental care includes everything from preventive education & regular visits to fillings, crowns, bridges & more. Moreover, the dentists provide care for both kids & adults, & know how best to care for both. At Taunton Village Dental, your continued oral health is our top priority.
        </p>
        <div className="mt-8 flex justify-center">
          <div className="w-1/3">
            <ul>
              <li>
                <a href="/DentalServices/GeneralDentistry/DigitalXRays2">
                <h1 className = "text-2xl">Digital X-Rays</h1>
                </a>
                <p className="text-1xl font-semibold">
                These images require up to 90% less radiation than with conventional film-type x-rays.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul>
              <li>
                <a href="/DentalServices/GeneralDentistry/SedationDentistry">
                  <h1 className = "text-2xl">Sedation Dentistry</h1>
                </a>
                <p className="text-1xl font-semibold">
                Wake up to a more healthy & beautiful smile with amazingly comfortable sedation dentistry.
                </p>
              </li>
            </ul>
          </div>
          <div className="w-1/3">
            <ul>
              <li>
                <a href="">
                  <h1 className = "text-2xl">TMD (Jaw Pain) Therapy</h1>
                </a>
                <p className="text-1xl font-semibold">
                Commonly misdiagnosed or overlooked, a subtle misalignment in the temporomandibular joint can be a common & significant source of head & neck pain.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
        

          
        </div>

  );
};

export default DentalServices;
