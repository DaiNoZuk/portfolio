import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

function Projects() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1 }}
        className="my-20 text-center text-4xl"
      >
        Project
      </motion.h2>
      <div className="">
        {PROJECTS.map((project, index) => (
          <div
            key={index}
            className="mb-8 flex flex-col flex-wrap justify-center items-center lg:justify-center"
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full  lg:flex  items-center justify-center lg:justify-center gap-2"
            >
                <img
                  src={project.image}
                  alt={project.title}
                  width={index == 1 || index == 5 ? 200 : 300}
                  height={index == 1 || index == 5 ? 50 : 250}
                  className={`mb-6 rounded object-fill ${index == 1 || index == 5 ?'w-[14rem] h-[28rem]':'w-[22rem] h-52'} `}
                />
              
              <img
                src={project.image2}
                alt={project.title}
                width={index == 1 || index == 5 ?200:300}
                height={index == 1 || index == 5 ?50:250}
                className={`mb-6 rounded object-fill hidden lg:block ${index == 1 || index == 5 ?'w-[14rem] h-[28rem]':'w-[22rem] h-52'} `}
              />
              <img
                src={project.image3}
                alt={project.title}
                width={index == 1 || index == 5 ?200:300}
                height={index == 1 || index == 5 ?50:250}
                className={`mb-6 rounded object-fill hidden lg:block ${index == 1 || index == 5 ?'w-[14rem] h-[28rem]':'w-[22rem] h-52'} `}
              /> 
              <img
                src={project.image4}
                alt={project.title}
                width={index == 1 || index == 5 ?200:300}
                height={index == 1 || index == 5 ?50:250}
                className={`mb-6 rounded object-fill hidden lg:block ${index == 1 || index == 5 ?'w-[14rem] h-[28rem]':'w-[22rem] h-52'} `}
              /> 
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl "
            >
              <h6 className="mb-6 font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-500"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
