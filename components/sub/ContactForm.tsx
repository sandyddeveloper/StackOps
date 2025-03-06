"use client"

const ContactForm = () => {
  return (
    <div className="bg-[#140c1c] rounded-lg p-4 sm:p-10">
 

      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
        Let&apos;s Work Together!
      </h1>

      <p className="text-gray-200 mt-3 lg:text-base text-xs md:text-sm">
        Feel free to reach out if you’re looking for a developer with a keen eye
        for detail, excellent problem-solving skills, and a love for coding. I
        specialize in frontend and backend technologies, and I am ready to take
        on new challenges. Let&apos;s talk about your project!
      </p>

      <form
        className="mt-8 block w-full overflow-hidden"
        
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div className="flex mt-5 flex-col md:flex-row items-center justify-between gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            className="flex-1 bg-black text-white placeholder:text-gray-600 px-6 py-3 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none w-full"
          />
        </div>
        <div>
          <select
            name="role"
            className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
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
          className="w-full mt-5 bg-black text-white placeholder:text-gray-600 px-4 py-3.5 rounded-md border-[1.5px] border-gray-200 border-opacity-15 outline-none"
          rows={7}
          placeholder="Message"
        ></textarea>
        <div className="mt-4">
          <button
            type="submit"
            className="px-8 py-3.5 bg-[#7947df] text-white hover:bg-[#5c2fb7] transition-all duration-150 rounded-full"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;