import React from "react";
import { Link } from "react-router-dom";

const Scheduling = () => {
  return (
    <div className="bg-cover">
      <div className="bg-sky-300 py-4 text-white text-center">
        <p className="text-2xl font-semibold">
          Book Your Dental Appointment Today! Call: (123) 456-7890
        </p>
      </div>
      <div className="px-16 md:px-48 py-16 mx-24">
        <div className="mx-24">
        <section className="mb-16">
          <h1 className="text-6xl font-semibold text-left text-blue-900 ">
            Scheduling
          </h1>
          <p className="mt-4 mb-10 text-2xl text-left text-blue-900">
          We don’t want there to be any obstacles between you & your family & great dental care. We have great hours & we are proud to offer our patients convenient appointments that fit even the busiest schedules.
          </p>
          <Link
            to="/appointment"
            className="bg-sky-600 px-3 py-3 items-center text-xs uppercase font-bold text-white hover:opacity-75"
          >
            Book Appointment
          </Link>
        </section>

        <section className="mb-16">
          <h2 className="text-5xl font-semibold text-left text-blue-900 ">
            Flexible Appointments
          </h2>
          <p className="mt-4 text-2xl text-left text-blue-900 ">
          We understand that many of our patients work or go to school full time. Our friendly staff always strives to provide appointment times that don’t require time off or missing class. To help you stay on top of your preventive care, we will pre-appoint you for your next appointment at each teeth cleaning visit. Reminders are sent ahead of your appointment so you don’t miss it!
          </p>
        </section>

        <section className="mb-16">
          <h2 className="text-5xl font-semibold text-left text-blue-900 ">
            Weekend Availability
          </h2>
          <p className="mt-4 text-2xl text-left text-blue-900 ">
          It seems like our patients are busier & busier lately. With all the running around that comes with modern life, it’s easy to let your obligation to your smile fall through the cracks. That’s why we’re committed to making dental care as convenient & accessible as possible by being a dentist that’s open on Saturdays & Sundays.
          </p>
          <p className="mt-4 text-2xl text-left text-blue-900 ">
          We believe that dentists that are open on weekends offer better access to preventive care, such as cleanings & exams. Better access to preventive care means fewer big dental problems in the future, which means less discomfort, pain & expense. We don’t want you to have to choose between work or school & keeping your smile healthy.
          </p>
        </section>
        </div>
      </div>
    </div>
  );
};

export default Scheduling;
