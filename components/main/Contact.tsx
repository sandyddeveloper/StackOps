import React from "react";
import ContactForm from "../sub/ContactForm";
import ContactInfo from "../sub/ContactInfo";
import TextUs from "../sub/ContactUsText";

const Contact = () => {
  return (
    <>
    <TextUs />
    <div id="contact" data-aos="fade-up" className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="grid grid-cols-1 xl:grid-cols-2 w-[90%] sm:w-[80%] mx-auto items-center gap-10 mt-10">
        <div>
          <ContactForm />
        </div>
        <div className="xl:mx-auto">
          <ContactInfo />
        </div>
      </div>
    </div>
    </>
  );
};

export default Contact;