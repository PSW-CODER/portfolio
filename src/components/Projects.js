import React from "react";
import devlog from "../assets/Profile.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
    useEffect(() => {
        AOS.init({duration:2500})
    })

    const projects = [
        {
          img: devlog,
          title: "devlog",
          desc: " A multi author blog. Built with Node.js, MongoDB, React, Redux and Tailwind CSS ",
          live: "https://devlogg.onrender.com/",
          code: "https://github.com/Coderamrin/devlog",
        },
    ]; 

    return (
        <section className="bg-primary text-white px-5 py-32" id="projects">
            <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between" data-aos="fade-up">
                <div className="about-info mb-5">
                    <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-indigo-600 pb-2">
                        Projects
                    </h2>

                    <p className="pb-5">
                        These are some of my best projects. I have built these with Laravel and Bootstrap. Check them out.
                    </p>
                    
                    <div className="about-img"></div>
                </div>

                <div className="projects container mx-auto grid md:grid-cols-3 gap-10">
                    {projects.map((project, i) => {
                        return (
                            <div className="relative" key={i} data-aos="fade-up">
                                <img src={project.img} alt={project.title} />
                                <div className="flex absolute left-0 right-0 top-[13px] bottom-0 mx-auto w-[90%] h-[90%] bg-primary opacity-0 duration-500 justify-center flex-col hover:opacity-100">
                                    <p className="py-5 text-center font-bold px-2 text-white">
                                        {project.desc}
                                    </p>

                                    <div className="mx-auto">
                                        <a
                                            href={project.live}
                                            className="px-5 py-2 bg-blue-500 hover:bg-blue-600 mr-5 font-bold"
                                        >
                                            Live
                                        </a>
                                        <a
                                            href={project.code}
                                            className="px-5 py-2 bg-blue-700 hover:bg-blue-800 font-bold"
                                        >
                                            Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </section>
    )
}

export default Projects;