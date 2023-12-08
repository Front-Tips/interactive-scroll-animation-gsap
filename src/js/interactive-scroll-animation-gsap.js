/* ------------ Libraries ----------- */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* --------- Register Plugin -------- */
gsap.registerPlugin(ScrollTrigger);

/* ---------- GSAP timeline --------- */
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".scroll",
      start: "top top",
      end: "bottom bottom",
      scrub: 1, // smooth scrolling
    },
  })
  // move upwards by an amount
  // equal to 75% of its own height
  .fromTo(".intro__bg", { y: 0 }, { y: "-75%" }, 0);
