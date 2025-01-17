import React from "react";
import avatar from "./images/talent.jpg";
const Section = () => {
  return (
    <div className="lg:flex flex-row max-w-full items-center p-5 sm:p-10 justify-around gap-3">
      <div className="m-auto relative ">
        <h1 className="m-auto text-2xl font-extrabold md:text-4xl lg:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-600 from-sky-400">
            Senior
          </span>{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-red-600 from-sky-400">
            Full Stack
          </span>{" "}
          <span className="underline underline-offset-3 decoration-8 decoration-blue-600 dark:decoration-blue-600">
            Developer
          </span>
        </h1>
      </div>
      <img className="rounded-t-lg" src={avatar} alt="avatar" width="200px" height="200px"/>
    </div>
  );
};

export default Section;
