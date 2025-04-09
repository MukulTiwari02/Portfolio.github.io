import React from "react";
import projectArray from "../Assets/projects";

const Projects = () => {
  const [currentSelectedProject, setCurrentSelectedProject] = React.useState(
    projectArray[0]
  );

  return (
    <section className="scroll-mt-[10rem] sm:scroll-mt-[13rem]" id="Projects">
      <h1
        className="text-xl sm:text-[2.5rem] w-full text-center mb-10"
        style={{ color: "var(--secondary-color" }}
      >
        Crafted With Code
      </h1>
      <div className="projects w-full mb-16 h-[500px] flex">
        <div className="project-list text-white h-full max-w-[50%] sm:flex-grow px-5 sm:px-20">
          <h1
            className="text-xl sm:text-4xl sm:-mt-6"
            style={{ color: "var(--secondary-color" }}
          >
            Projects
          </h1>
          <div className="flex flex-col gap-0.5 mt-5 h-full overflow-x-hidden">
            {projectArray.map((project) => (
              <button
                onClick={() => {
                  if (currentSelectedProject.name !== project.name)
                    return setCurrentSelectedProject(project);
                }}
                className={
                  "transition-none flex flex-col gap-2 sm:flex-row text-sm sm:text-xl text-left p-3 sm:p-6 hover:bg-green-500 " +
                  (currentSelectedProject.name === project.name
                    ? "bg-green-500"
                    : " bg-[rgb(231,104,65)]")
                }
              >
                <div>{project.name}</div>
                <a
                  target="_blank"
                  className="ml-auto text-black"
                  href={project.codeLink}
                >
                  Code
                </a>
              </button>
            ))}
          </div>
        </div>

        <div className="project-container text-white h-full w-[50%] relative">
          <div className="h-full w-[220%] sm:w-[180%]  -translate-x-[30%] sm:-translate-x-[25%] scale-[0.40] sm:scale-[0.45] absolute top-0 left-0 flex justify-center items-center">
            {currentSelectedProject.link !== "" && (
              <a
                href={currentSelectedProject.link}
                target="_blank"
                className="absolute block hover:scale-105 transition-all -bottom-60 z-10 left-[6%] sm:left-[2%]  text-lg sm:text-3xl text-white w-fit py-3 px-4 sm:py-5 sm:px-6 rounded-xl bg-[rgb(231,104,65)]"
              >
                Full Screen
              </a>
            )}

            <div className="relative w-[1920px] h-[1080px] rounded-3xl  bg-[#1f1f1f] shadow-xl shadow-gray-800 border-[12px] border-[#333] flex flex-col overflow-hidden">
              <div className="h-12 bg-[#2c2c2c] flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-white ml-4">Live Preview</span>
              </div>

              {currentSelectedProject.link !== "" && (
                <iframe
                  src={currentSelectedProject.link}
                  title="AI Developer Chat Project"
                  className="flex-1 w-full h-full border-none"
                  allowFullScreen
                ></iframe>
              )}
              {currentSelectedProject.link === "" && (
                <img
                  src="https://media.istockphoto.com/id/1404059706/vector/website-page-not-found-error-404-oops-worried-robot-character-peeking-out-of-outer-space.jpg?s=612x612&w=0&k=20&c=DvPAUof9UsNuNqCJy2Z7ZLLk75qDA3bbLXOOW_50wAk="
                  alt="Deployment Not Found"
                  className="flex-1 sm:w-full sm:h-full border-none sm:object-cover object-scale-down"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
