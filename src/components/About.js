import React from "react";
import AboutImg from "../assets/Profile.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
    useEffect(() => {
        AOS.init({duration:2500})
    })

    return (
        <section className="bg-secondery text-white px-5 py-32" id="about">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between gap-3" data-aos="fade-up">
                <div className="about-info">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        About Me
                    </h2>

                    <p className="pb-5">
                        Hi, My name is Pyae Sone Win. I am a
                        Backend Developer. I build websites using Laravel PHP framework with Bootstrap and Tailwind CSS.
                    </p>

                    <p className="pb-5">
                        I am proficient Backend skills like PHP, Laravel and MySQL. 
                    </p>

                    <p className="pb-5">In Fontend I know HTML, CSS, JavaScript, React, Bootstrap, and Tailwind CSS.</p>
                    <p>
                        I have achieved SQA Advenced Diploma from KMD.
                    </p>
                </div>

                <div className="about-img">
                    <img
                        src={AboutImg}
                        alt="coding illustration"
                        className="lgw-[80%] md:ml-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default About;