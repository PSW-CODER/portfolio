import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({duration:2500})
  })

  return (
    <section className="bg-secondery px-5 py-32" id="contact">
      <div className="text-center md:w-[60%] mx-auto text-white" data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[200px] mx-auto border-indigo-600 pb-2">
          Contact Me
        </h2>
        <p>
          I am currently open for a fulltime Backend Developer role. If you
          want to discuss about that feel free to email me or call me.
        </p>

        <p className="py-2">
          <span className="font-bold">Email:</span> pyaesone096553@gmail.com
        </p>
        <p className="py-2">
          <span className="font-bold">Phone:</span> +95 9764866949
        </p>
      </div>
    </section>
  );
};

export default Contact;