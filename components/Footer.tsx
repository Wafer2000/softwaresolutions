import { FaLocationArrow } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-10 "
        />
      </div>

      <div className="flex flex-col items-center bg-transparent">
        <h1 className="heading lg:max-w-[45vw] text-black">
          ¿Estás listo para llevar <span className="text-[#f0c200]">tu</span> presencia digital al siguiente nivel?
        </h1>
        <p className="text-black md:mt-10 my-5 text-center bg-transparent">
          Comuníquese con nosotros hoy y analicemos cómo podemos ayudarlo a alcanzar sus objetivos.
        </p>
        <a href="mailto:contact@jsmastery.pro">
          <button className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden p-[1px] focus:outline-none">
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className='inline-flex h-full w-full cursor-pointer items-center justify-center bg-[#f0c200] bg-opacity-70 border-2 border-[#FFBD59] border-opacity-50 px-7 text-sm font-medium text-white backdrop-blur-2xl gap-2'>
              Mantengámonos en contacto
            </span>
          </button>
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
