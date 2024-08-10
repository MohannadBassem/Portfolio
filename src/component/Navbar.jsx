import logo from "../assets/Logo.png";
import { RiLinkedinLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>

      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a href="https://www.linkedin.com/in/mohannad-bassem/" target="_blank" rel="noopener noreferrer">
          <RiLinkedinLine />
        </a>
        <a href="https://github.com/MohannadBassem" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
