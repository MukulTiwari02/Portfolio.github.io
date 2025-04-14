import React from "react";

const AboutText = () => {
  return (
    <div className="about-text">
      <h1>About Me</h1>
      <div className="space-y-6">
        <div className="flex items-center gap-x-5 text-2xl tracking-wide sm:leading-loose leading-normal font-mono">
          <strong className="text-3xl sm:text-2xl">✧</strong>
          <p>
            I am a final year B.Tech undergraduate at{" "}
            <span className="bold">NIT Silchar.</span>
          </p>
        </div>

        <div className="flex items-center gap-x-5 text-2xl tracking-wide sm:leading-loose leading-normal font-mono">
          <strong className="text-3xl sm:text-2xl">✧</strong>
          <p>
            I’m a <span className="bold">Software Developer</span> passionate
            about building solutions and solving complex problems.
          </p>
        </div>

        <div className="flex items-center gap-x-5 text-2xl tracking-wide sm:leading-loose leading-normal font-mono">
          <strong className="text-3xl sm:text-2xl">✧</strong>
          <p>
            I'm a <span className="bold">Full-Stack MERN Developer</span> driven
            by curiosity and continuous learning.
          </p>
        </div>

        <div className="flex items-center gap-x-5 text-2xl tracking-wide sm:leading-loose leading-normal font-mono">
          <strong className="text-3xl sm:text-2xl">✧</strong>
          <p>
            As a tech enthusiast, I'm always exploring new areas of interest and
            enjoying the process of learning along the way.
          </p>
        </div>

        <div className="flex items-center gap-x-5 text-2xl tracking-wide sm:leading-loose leading-normal font-mono">
          <strong className="text-3xl sm:text-2xl">✧</strong>
          <p>
            I'm deeply interested in learning about today's tech and the
            innovations shaping our future.
          </p>
        </div>

        <div className="flex items-center gap-x-5 text-2xl tracking-wide leading-relaxed font-mono">
          <strong className="text-3xl sm:text-2xl">✧</strong>
          <p>
            I look forward to collaborating with fellow tech enthusiasts and
            contributing meaningfully to the field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutText;
