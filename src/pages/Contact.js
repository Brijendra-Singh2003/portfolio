import React, { useRef, useState } from "react";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import contactImage from "../assets/contact.png";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { useInView } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    from_name: "",
    to_name: "Brijendra Singh",
    message: "",
    email: "",
    phone: "",
  });
  const ref = useRef();
  const isInView = useInView(ref, { once: true });

  /**@param {React.ChangeEvent<HTMLInputElement>} e*/
  const handleChange = (e) => {
    setData((p) => {
      return { ...p, [e.target.name]: e.target.value };
    });
  };

  /**@param {React.FormEvent<HTMLFormElement>} e*/
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(data);

    emailjs
      .send(
        process.env.REACT_APP_YOUR_SERVICE_ID,
        process.env.REACT_APP_YOUR_TEMPLATE_ID,
        data,
        {
          publicKey: process.env.REACT_APP_YOUR_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setData({
            from_name: "",
            to_name: "Brijendra Singh",
            message: "",
            email: "",
            phone: "",
          });
          toast.success("Message sent");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.error("Error sending message");
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div id="contact" className="py-8 px-2 w-full">
      <div
        ref={ref}
        className="max-w-5xl w-full flex flex-col items-center mx-auto py-8"
      >
        <h1 className="text-5xl font-h text-center pb-8">
          Contact <span className="text-[#ee1963]">Me</span>
        </h1>
        <div
          className="w-full flex md:grid grid-cols-2 gap-4 flex-wrap items-center px-4 py-8 "
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.25s",
          }}
        >
          <img
            src={contactImage}
            alt=""
            className="max-w-96 w-full hidden md:block aspect-square object-contain mx-auto"
          />
          <form onSubmit={sendEmail} className="flex flex-col gap-6 p-4 w-full">
            <div className="flex w-full border border-gray-600 focus-within:border-[#ee1963] focus-within:text-[#ee1963] transition-all">
              <FaUserAlt className="h-6 w-6 m-4" />
              <input
                className="w-full bg-transparent outline-none text-black"
                type="text"
                placeholder="Name..."
                name="from_name"
                value={data.from_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full border border-gray-600 focus-within:border-[#ee1963] focus-within:text-[#ee1963] transition-all">
              <MdEmail className="h-6 w-6 m-4" />
              <input
                className="w-full bg-transparent outline-none text-black"
                type="email"
                placeholder="Email..."
                name="email"
                value={data.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex w-full border border-gray-600 focus-within:border-[#ee1963] focus-within:text-[#ee1963] transition-all">
              <FaPhoneAlt className="h-6 w-6 m-4" />
              <input
                className="w-full bg-transparent outline-none text-black"
                type="number"
                placeholder="Phone...(optional)"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                // required
              />
            </div>
            <div className="flex w-full border border-gray-600 focus-within:border-[#ee1963] focus-within:text-[#ee1963] transition-all">
              <AiFillMessage className="h-6 w-6 m-4" />
              <textarea
                className="py-4 w-full h-36 bg-transparent outline-none text-black"
                type="text"
                placeholder="Message..."
                name="message"
                value={data.message}
                onChange={handleChange}
                required
              />
            </div>
            <button
              disabled={loading}
              className="px-4 py-2 border bg-[#ee1963] hover:bg-[#ff387e] text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
