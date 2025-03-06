
import { contactData } from "@/constants";
import React from "react";
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: <FaGithub className="w-5 h-5 md:w-7 md:h-7 text-white" />,
      label: "GitHub",
      value: contactData.github,
      link: `https://github.com/${contactData.github}`,
    },
    {
      icon: <FaEnvelope className="w-5 h-5 md:w-7 md:h-7 text-white" />,
      label: "Email Address",
      value: contactData.email,
      link: `mailto:${contactData.email}`,
    },
    {
      icon: <FaMapMarkerAlt className="w-5 h-5 md:w-7 md:h-7 text-white" />,
      label: "Address",
      value: contactData.address,
    },
  ];

  return (
    <div className="flex flex-col space-y-8">
      {" "}
      {contactMethods.map((method, index) => (
        <div key={index} className="flex items-center space-x-4">
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-700 flex items-center justify-center">
            {method.icon}
          </div>

          <div>
            <h1 className="text-lg md:text-xl text-white font-bold">
              {method.label}
            </h1>
            <h1 className="text-base md:text-lg text-white text-opacity-70">
              {method.link ? (
                <a
                  href={method.link}
                  className="hover:text-opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {method.value}
                </a>
              ) : (
                method.value
              )}
            </h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactInfo;