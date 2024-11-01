import React from "react";
import { AiOutlineFacebook } from "react-icons/ai";
import HeroImg from "../assets/Profile.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        AOS.init({duration:2500})
    })

    return (
        <section className="bg-primary px-5 text-white py-32">
            <div className="container mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between"  data-aos="fade-up">
                <div className="hero-info pb-5 md:pb-0">
                    <h1 className="text-4xl lg:text-6xl">
                        Hi, <br />I am <span className="text-accent">a</span> <br /> Backend Developer
                    </h1>

                    <p className="py-5">
                        I am proficient in Laravel, PHP, MySQL, and Bootstrap CSS
                    </p>

                    <div className="flex py-5">
                        <a
                            href="https://www.facebook.com/"
                            className="pr-4 inline-block text-accent hover:text-white"
                        >
                            {" "}
                            <AiOutlineFacebook size={40} />{" "}
                        </a>
                    </div>

                    <a
                        href="/#projects"
                        className=" btn bg-accent  border-2 border-[#7477FF] text-white px-6 py-3 hover:bg-transparent"
                    >
                        See Projects
                    </a>
                </div>

                <div className="hero-img">
                    <img
                        src={HeroImg}
                        alt="coding illustration"
                        className="lgw-[80%] ml-auto"
                    />
                </div>
            </div>
        </section>
    )
}

export default Hero;