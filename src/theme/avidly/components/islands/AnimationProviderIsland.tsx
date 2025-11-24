"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimationProviderIsland() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let ctx: gsap.Context;

    const initAnimations = () => {
      ctx = gsap.context(() => {
        // Wait for fonts to load and DOM to be ready
        if (document.fonts && document.fonts.ready) {
          document.fonts.ready.then(() => {
            setTimeout(createAnimations, 100);
          });
        } else {
          setTimeout(createAnimations, 500);
        }
      });
    };

    const createAnimations = () => {
      // === Fade In Up ===
      gsap.utils.toArray<HTMLElement>(".fadeInUp").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { y: 60, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Fade In Down ===
      gsap.utils.toArray<HTMLElement>(".fadeInDown").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { y: -60, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Fade In Left ===
      gsap.utils.toArray<HTMLElement>(".fadeInLeft").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { x: -60, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Fade In Right ===
      gsap.utils.toArray<HTMLElement>(".fadeInRight").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { x: 60, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Fade In (opacity only) ===
      gsap.utils.toArray<HTMLElement>(".fadeIn").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { autoAlpha: 0 },
          {
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Zoom In ===
      gsap.utils.toArray<HTMLElement>(".zoomIn").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { scale: 0.8, autoAlpha: 0 },
          {
            scale: 1,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "back.out(1.7)",
          }
        );
      });

      // === Heading Line (original theme style) ===
      gsap.utils.toArray<HTMLElement>(".heading-line").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { y: 30, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.7,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Heading Chars (simplified without SplitText plugin) ===
      gsap.utils.toArray<HTMLElement>(".heading-chars").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { y: 20, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
            duration: 0.8,
            delay,
            ease: "power2.out",
          }
        );
      });

      // === Image Anim Left ===
      gsap.utils.toArray<HTMLElement>(".img-anim-left").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { xPercent: -8, clipPath: "inset(0 100% 0 0)", opacity: 0 },
          {
            xPercent: 0,
            clipPath: "inset(0 0% 0 0)",
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // === Image Anim Right ===
      gsap.utils.toArray<HTMLElement>(".img-anim-right").forEach((el) => {
        const delay = parseFloat(el.dataset.delay || "0");
        gsap.fromTo(
          el,
          { xPercent: 8, clipPath: "inset(0 0 0 100%)", opacity: 0 },
          {
            xPercent: 0,
            clipPath: "inset(0 0 0 0%)",
            opacity: 1,
            duration: 1.2,
            ease: "power2.out",
            delay,
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // === Stagger Animation (for lists) ===
      gsap.utils.toArray<HTMLElement>(".stagger-item").forEach((container) => {
        const children = container.querySelectorAll(".stagger-child");
        const staggerDelay = parseFloat(container.dataset.staggerDelay || "0.1");

        if (children.length > 0) {
          gsap.fromTo(
            children,
            { y: 50, autoAlpha: 0 },
            {
              y: 0,
              autoAlpha: 1,
              scrollTrigger: {
                trigger: container,
                start: "top 95%",
                toggleActions: "play none none none",
              },
              duration: 0.8,
              stagger: staggerDelay,
              ease: "power2.out",
            }
          );
        }
      });

      // === Parallax Effect ===
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0.5");
        gsap.to(el, {
          y: () => -(window.innerHeight * speed),
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });

      // === Color Change (simplified) ===
      gsap.utils.toArray<HTMLElement>(".color-change").forEach((el) => {
        gsap.fromTo(
          el,
          { color: "#161616" },
          {
            color: "#6366f1",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              scrub: true,
            },
          }
        );
      });

      // === Translate Y Effect ===
      gsap.utils.toArray<HTMLElement>(".translateY10").forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40 },
          {
            y: 0,
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    };

    // Initialize on component mount
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initAnimations);
    } else {
      initAnimations();
    }

    // Refresh ScrollTrigger on window resize
    const handleResize = () => {
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      if (ctx) ctx.revert();
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("DOMContentLoaded", initAnimations);
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return null; // This component doesn't render anything
}

