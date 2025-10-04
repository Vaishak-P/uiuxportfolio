import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [notification, setNotification] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm("service_t0eiphc", "template_71cng7x", form.current!, {
        publicKey: "YgX0p7inBVuFkzAGd",
      })
      .then(() => {
        setNotification({
          message: "Message sent successfully!",
          type: "success",
        });
        setTimeout(() => setNotification(null), 4000); // Hide after 4s
      })
      .catch((error) => {
        console.error("FAILED...", error.text);
        setNotification({
          message: "Failed to send message. Please try again.",
          type: "error",
        });
        setTimeout(() => setNotification(null), 4000);
      });
  };

  return (
    <div
      className="bg-pureBlack rounded-lg p-4 sm:p-10 relative"
      data-aos="fade-right"
      data-aos-duration="1000"
    >
      <h1
        className="text-bg text-2xl md:tex-3xl lg:text-4xl font-bold pb-3"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
      >
        Let’s collaborate and build something amazing!
      </h1>
      <p className="text-lowWhite opacity-80 mt-3 lg:text-base text-xs md:text-sm">
        {`Feel free to reach out for opportunities, projects,\n or just a tech chat.`}
      </p>

      {/* Notification Message */}
      {notification && (
        <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 px-6 py-3 
            rounded-md text-white font-semibold text-center shadow-lg transition-all duration-300 ${
              notification.type === "success"
                ? "bg-gradient-to-r from-[#38ef7d] to-[#11998e]"
                : "bg-[#ff4d4d]"
            }`}
        >
          {notification.message}
        </div>
      )}

      {/* Form */}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="mt-8 block w-full overflow-hidden"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
        data-aos-delay="200"
      >
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          required
          className="w-full bg-highDark text-lowWhite placeholder-gray-400 px-6 py-3 rounded-md mb-4 outline-none"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full  bg-highDark text-lowWhite placeholder-gray-400 px-6 py-3 rounded-md mb-4 outline-none"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="w-full  bg-highDark text-lowWhite placeholder-gray-400 px-6 py-3 rounded-md mb-4 outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full px-8 py-3.5 bg-gradient-to-r from-secondary to-primary text-lowWhite font-bold rounded-md hover:opacity-90 transition-all duration-150"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;





// ---------------------------------
// BEFORE EMAILJS IMPLEMENTATION 
// ---------------------------------
// import React, { useRef } from "react";
// import emailjs from "@emailjs/browser";


// const ContactForm = () => {
//   const form = useRef(null);

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
//         publicKey: "YOUR_PUBLIC_KEY",
//       })
//       .then(
//         () => {
//           console.log("SUCCESS!");
//         },
//         (error) => {
//           console.log("FAILED...", error.text);
//         }
//       );
//   };

//   return (
//     <div className="bg-highDark rounded-lg p-4 sm:p-10">
//       <h1 className="text-bg text-2xl md:tex-3xl lg:text-4xl font-bold pb-3">
//         Let’s collaborate and build something amazing!
//       </h1>
//       <p className="text-lowWhite mt-3 lg:text-base tex-xs md:text-sm">
//         Feel free to reach out for opportunities, projects, or just a tech chat.
//       </p>
//       <form
//         ref={form}
//         onSubmit={sendEmail}
//         className="mt-8 block w-full overflow-hidden"
//       >
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             className="flex-1 bg-pureBlack text-lowWhite 
//                     placeholder:text-lowWhite px-6 py-3 rounded-md border-secondary border-opacity-80 border-2
//                     outline-none w-full"
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="flex-1 bg-pureBlack text-lowWhite 
//                     placeholder:text-lowWhite px-6 py-3 rounded-md border-secondary border-opacity-80 border-2
//                     outline-none w-full"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex flex-col md:flex-row items-center justify-between gap-4">
//           <input
//             type="email"
//             placeholder="Email Address"
//             className="flex-1 bg-pureBlack text-lowWhite 
//                     placeholder:text-lowWhite px-6 py-3 rounded-md border-primary border-opacity-80 border-2
//                     outline-none w-full"
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             placeholder="Phone Number"
//             className="flex-1 bg-pureBlack text-lowWhite 
//                     placeholder:text-lowWhite px-6 py-3 rounded-md border-primary border-opacity-80 border-2
//                     outline-none w-full"
//             onChange={handleChange}
//           />
//         </div>
//         <div>
//           <select
//             defaultValue={"select"}
//             className="w-full mt-5 bg-pureBlack text-lowWhite placeholder:text-secondary px-4 py-3.5 rounded-md
//                 border-secondary border-opacity-80 border-2 outline-none"
//             onChange={handleChange}
//           >
//             <option value="select" disabled>
//               Select an option
//             </option>
//             <option value="frontend">Front End Development</option>
//             <option value="ui">User Interface Design</option>
//           </select>
//         </div>
//         <textarea
//           rows={7}
//           placeholder="Message"
//           className="w-full mt-5 bg-pureBlack text-lowWhite placeholder:text-lowWhite px-4 py-3.5 rounded-md 
//           border-primary border-opacity-80 border-2 outline-none"
//           onChange={handleChange}
//         ></textarea>
//         <div className="mt-4">
//           <button className="px-8 py-3.5 bg-gradient-to-r from-secondary to-primary text-highDark font-bold hover:opacity-90 transition-all duration-150 rounded-full">
//             Send Message
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default ContactForm;