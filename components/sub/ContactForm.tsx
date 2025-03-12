"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  role: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    role: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const convertToRecord = (data: FormData): Record<string, string> => {
      return Object.keys(data).reduce((acc, key) => {
        acc[key] = data[key as keyof FormData];
        return acc;
      }, {} as Record<string, string>);
    };

    emailjs
      .send(
        "service_29s4tec",
        "template_6f9o8vf",
        convertToRecord(formData),
        "Lta9zu_0_Byg-atUy"
      )
      .then(
        (response) => {
          // Show toast notification on success
          toast.success(
            `Hey ${formData.firstName}! I got your message, mate. I will contact you sooner.`
          );
          console.log("SUCCESS!", response.status, response.text);

          // Clear the form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            role: "",
            message: "",
          });
        },
        (error) => {
          // Show toast notification on error
          toast.error("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      {/* Toast Container */}
      <ToastContainer />

      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Work Together!
      </h1>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Feel free to reach out if you’re looking for a developer with a keen eye
        for detail, excellent problem-solving skills, and a love for coding. I
        specialize in frontend and backend technologies, and I am ready to take
        on new challenges. Let&apos;s talk about your project!
      </p>

      {/* Form */}
      <form
        className="mt-8 block w-full overflow-hidden z-50"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="relative z-[100]">
          <div>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none relative z-[101]"
            >
              <option value="" disabled>
                Select an Option
              </option>
              <option value="As a Client">As a Client</option>
              <option value="As a Frontend Developer">
                As a Frontend Developer
              </option>
              <option value="As a Backend Developer">
                As a Backend Developer
              </option>
              <option value="As a Full Stack Developer">
                As a Full Stack Developer
              </option>
            </select>
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none relative z-[101]"
            rows={7}
            placeholder="Message"
          ></textarea>

          <div className="mt-4">
            <button
              type="submit"
              className="cursor-pointer px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full relative z-[101]"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
