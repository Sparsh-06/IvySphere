import React, { useRef } from "react";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

const Navbar = () => {

  const AnimatedLinks = useRef(null);
  const AnimatedJoin = useRef(null);
  const AnimatedLogo = useRef(null);

  useGSAP(()=>{

    const tl = gsap.timeline({defaults: {ease: 'power3.inOut'}})

    tl.from(AnimatedLinks.current.children, {
      duration: 0.8,
      opacity: 0,
      y: 60,
      stagger: 0.1
    })

    gsap.from(AnimatedLogo.current, {
      duration: 1,
      opacity: 0,
      x: -100,
    })

    gsap.from(AnimatedJoin.current, {
      duration: 1,
      opacity: 0,
      x: 80,
    })
  })

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a class="flex items-center text-gray-900 mb-4 md:mb-0">
          <h2 className="text-2xl tracking-wider font-semibold" ref={AnimatedLogo}><span>{'<'}</span>IvySphere<span>{'/>'}</span></h2>
        </a>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center" ref={AnimatedLinks}>
          <a class="mr-5 hover:text-gray-900">About</a>
          <a class="mr-5 hover:text-gray-900">Services</a>
          <a class="mr-5 hover:text-gray-900">Dashboard</a>
          <a class="mr-5 hover:text-gray-900">Contact Us</a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" ref={AnimatedJoin}>
          Join Waitlist
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            class="w-4 h-4 ml-1"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
