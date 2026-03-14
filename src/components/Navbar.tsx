import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import "./styles/Navbar.css";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis;

const Navbar = () => {
 useEffect(() => {
  lenis = new Lenis({
    duration: 1.2,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  let links = document.querySelectorAll(".header ul a");

  links.forEach((elem) => {
    let element = elem as HTMLAnchorElement;

    element.addEventListener("click", (e) => {
      e.preventDefault();

      let section = element.getAttribute("data-href");

      if (section) {
        const target = document.querySelector(section) as HTMLElement | null;

if (target) {
  lenis.scrollTo(target);
}
      }
    });
  });

  return () => {
    lenis.destroy();
  };
}, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          MT
        </a>

        <a
          href="mailto:mayurthorat147@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          mayurthorat147@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;