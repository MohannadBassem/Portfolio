import { TbBrandDjango } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { AiOutlineDiscord } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <AiOutlineDiscord className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaReact className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandDjango className="text-7xl text-[#092E20]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaNodeJs className="text-7xl text-[#3c873a]" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaPython className="text-7xl text-[#FFDE57]" />
        </div>
        
      </div>
    </div>
  );
};

export default Technologies;
