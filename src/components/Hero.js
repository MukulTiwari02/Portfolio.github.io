import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Hero = ({ darkMode }) => {
  const innerWidth = window.innerWidth;
  const particles = innerWidth > 640 ? 250 : 150;

  const particlesInit = async (main) => {
    await loadSlim(main);
  };

  const [particlesColor, setParticlesColor] = useState("");

  useEffect(() => {
    const getParticlesColor = () => {
      const body = document.getElementsByTagName("body")[0];
      return getComputedStyle(body)
        .getPropertyValue("--secondary-color")
        .trim();
    };

    const color = getParticlesColor();
    setParticlesColor(color === "black" ? "#000" : color);

    const observer = new ResizeObserver(() => {
      const newColor = getParticlesColor();
      if (newColor !== particlesColor) {
        if (newColor === "black") setParticlesColor("#000");
        else setParticlesColor(newColor);
      }
    });

    observer.observe(document.documentElement);

    return () => {
      observer.disconnect();
    };
  }, [darkMode]);

  return (
    <div className="hero relative select-none" id="hero">
      <div className="absolute opacity-80 top-0 left-0 w-full h-full z-[1]">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: false,

            fpsLimit: 120,
            particles: {
              number: {
                value: particles,
              },
              collisions: {
                enable: true,
              },
              color: {
                value: particlesColor,
              },
              size: {
                value: 2,
              },
              move: {
                enable: true,
                speed: 2,
              },
              links: {
                enable: true,
                color: particlesColor,
                opacity: 0.7,
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                onClick: {
                  enable: true,
                  mode: "push",
                },
              },
              modes: {
                repulse: {
                  distance: 150,
                },
                push: {
                  quantity: 4,
                },
              },
            },
          }}
          className="relative top-0 left-0 w-full h-full"
        />
      </div>
      <h1 className="z-5">Hi</h1>
      <h2 className="z-5">My name is Mukul Tiwari</h2>
      <h2 className="z-5">
        I am a &nbsp;
        <span>
          <Typewriter
            options={{
              strings: [
                "FULL STACK WEB DEVELOPER",
                "MERN STACK DEVELOPER",
                "SOFTWARE DEVELOPER",
              ],
              autoStart: true,
              loop: true,
              pauseFor: 1500,
              deleteSpeed: 16.66,
              delay: 16.66,
              cursor: "|",
              skipAddStyles: true,
            }}
          />
        </span>
      </h2>

      <div className="flex gap-5 z-50 justify-center items-center">
        <a
          href="https://drive.google.com/file/d/1QmVPjNp1UGDbCo8HMPdcM6_pfdJnMiO2/view?usp=sharing"
          target="_blank"
          className="py-10 flex items-center"
        >
          <button
            type="button"
            className="text-white flex gap-2 z-20  bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 active:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:active:ring-gray-700 dark:border-gray-700"
          >
            <div className="sm:text-base flex justify-center uppercase w-full text-sm flex-grow">
              Download CV
            </div>
            <div className="h items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="size-2 sm:w-5 sm:h-5 w-4 h-4"
              >
                <path d="M10.75 2.75a.75.75 0 0 0-1.5 0v8.614L6.295 8.235a.75.75 0 1 0-1.09 1.03l4.25 4.5a.75.75 0 0 0 1.09 0l4.25-4.5a.75.75 0 0 0-1.09-1.03l-2.955 3.129V2.75Z" />
                <path d="M3.5 12.75a.75.75 0 0 0-1.5 0v2.5A2.75 2.75 0 0 0 4.75 18h10.5A2.75 2.75 0 0 0 18 15.25v-2.5a.75.75 0 0 0-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5Z" />
              </svg>
            </div>
          </button>
        </a>
        <a href="#About">
          <button
            style={{ color: "var(--secondary-color)" }}
            type="button"
            className="flex gap-2 z-20  border border-gray-800 hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:hover:text-white/50 dark:hover:bg-gray-100 dark:focus:ring-gray-800"
          >
            <div className="sm:text-base flex justify-center uppercase text-sm w-full flex-grow">
              About Me
            </div>
            <div className="h-full flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4 sm:w-6 sm:h-6 w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
                />
              </svg>
            </div>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
