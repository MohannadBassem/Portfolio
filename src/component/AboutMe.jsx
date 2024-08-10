import AboutMePic from "../assets/AboutMe.jpg";
import AboutMePic2 from "../assets/programming.gif";

import { ABOUT_ME } from "../constants";

const AboutMe = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-630 animate-pulse"> Me</span>
      </h1>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex items-center justify-center">
            <img
              src={AboutMePic2}
              alt="Mohannad Bassem"
              className="h-auto max-w-full rounded-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-lg">{ABOUT_ME}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
