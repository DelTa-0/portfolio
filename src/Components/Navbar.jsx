import gsap from "gsap";
import React from "react";
import { TfiDownload } from "react-icons/tfi";
import resume from "../../cv node Madhav.pdf";
function Navbar() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const mouseenter = () => {
    gsap.to(".leftnavtexts h1", {
      y: "-100%",
      duration: 0.5,
      ease: "expo.out",
    });
  };
  const mouseleave = () => {
    gsap.to(".leftnavtexts h1", {
      y: "0%",
      duration: 0.5,
      ease: "expo.out",
    });
  };
  return (
    <div className="w-full backdrop-blur-sm fixed flex items-center justify-between px-6 md:px-12 z-[200] top-0 left-0 h-24 ">
      <div className="leftnav">
        <div
          onMouseEnter={mouseenter}
          onMouseLeave={mouseleave}
          className="leftnavtexts cursor-pointer overflow-hidden h-16"
        >
          <h1 className="h-full flex items-center  w-full">
            <span className="text-[4.5vw] sm:text-[3vw] md:text-[3vw] lg:text-[1.95vw] text-white font-[satoshilight] ">
              {" "}
              Madhav Aryal
            </span>
          </h1>
          <h1 className="h-full flex items-center  w-full">
            <span className="text-white text-[1.9vw]">Portfolio 2025</span>
          </h1>
        </div>
      </div>
      <div className="rightnav">
        <div className="rightnavcontainer flex items-center gap-12 ">
          <div className="links cursor-pointer w-fit">
            <button
              onClick={() => scrollTo("about")}
              className="text-white leading-[1.15] md:text-[2.4vw] lg:text-[1.3vw] font-[satoshilight]"
            >
              About
            </button>
            <div className="w-0 h-[0.15vw] underline2"></div>
          </div>
          <div className="links mr-[-1vw] cursor-pointer w-fit">
            <button
              onClick={() => scrollTo("work")}
              className="text-white leading-[1.15] md:text-[2.4vw] lg:text-[1.3vw] font-[satoshilight]"
            >
              Work
            </button>
            <div className="w-0 h-[0.15vw] underline2"></div>
          </div>
          <div className="links mr-[-1vw] cursor-pointer w-fit">
            <button
              onClick={() => scrollTo("contact")}
              className="text-white leading-[1.15] md:text-[2.4vw] lg:text-[1.3vw] font-[satoshilight]"
            >
              Contact
            </button>
            <div className="w-0 h-[0.15vw] underline2"></div>
          </div>
          <a
            href={resume}
            download
            className="resumelink  md:text-white bg-white md:bg-transparent text-black   cursor-pointer rounded active:scale-[0.95] hover:text-black hover:bg-white px-6 py-3 flex items-center gap-4 w-fit"
          >
            <div className="icon text-md  md:text-md ">
              {" "}
              <TfiDownload />{" "}
            </div>
            <div className="anotherlink">
              <h1 className=" leading-[1.15]  text-[3.6vw] sm:text-[2.5vw] md:text-[2.4vw] lg:text-[1.3vw] font-[satoshilight]">
                Resume
              </h1>
              <div className="w-0 h-[0.15vw] underline2"></div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
