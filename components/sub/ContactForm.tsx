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

  const validateForm = () => {
    const { firstName, lastName, email, phoneNumber, role, message } = formData;

    if (!firstName.trim() || !lastName.trim()) {
      toast.error("First and last name are required.");
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }

    if (phoneNumber.length < 10) {
      toast.error("Phone number must be at least 10 digits.");
      return false;
    }

    if (!role) {
      toast.error("Please select a role.");
      return false;
    }

    if (!message.trim()) {
      toast.error("Message cannot be empty.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

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
          toast.success(
            `Hey ${formData.firstName}! Your message was sent successfully.`
          );
          console.log("SUCCESS!", response.status, response.text);

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
          toast.error("Failed to send message. Please try again.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
      <ToastContainer />

      <h1 className="text-bg text-2xl md:text-3xl lg:text-[2.5rem] font-bold">
        Let&apos;s Work Together!
      </h1>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Feel free to reach out if you’re looking for a developer with a keen eye
        for detail, excellent problem-solving skills, and a love for coding.
      </p>

      <form className="mt-8 w-full  z-50" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            required
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder-gray-600 px-6 py-3 rounded-md border border-gray-200 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            value={formData.lastName}
            required
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder-gray-600 px-6 py-3 rounded-md border border-gray-200 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            required
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder-gray-600 px-6 py-3 rounded-md border border-gray-200 outline-none w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            required
            value={formData.phoneNumber}
            onChange={handleChange}
            className="flex-1 z-50 bg-black text-white placeholder-gray-600 px-6 py-3 rounded-md border border-gray-200 outline-none w-full"
          />
        </div>

        <div>
          <select
            name="role"
            value={formData.role}
            required
            onChange={handleChange}
            className="relative w-full z-50 mt-5 bg-black text-white px-4 py-3.5 rounded-md border border-gray-200 outline-none"
          >
            <option value="" disabled>
              Select an Option
            </option>
            <option value="As a Client">As a Client</option>
            <option value="As a Frontend Developer">As a Frontend Developer</option>
            <option value="As a Backend Developer">As a Backend Developer</option>
            <option value="As a Full Stack Developer">As a Full Stack Developer</option>
          </select>
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="relative w-full z-50 mt-5 bg-black text-white px-4 py-3.5 rounded-md border border-gray-200 outline-none"
          rows={7}
          required
          placeholder="Message"
        ></textarea>

        <div className="mt-4">
          <button
            type="submit"
            className="relative cursor-pointer px-8 z-50 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
