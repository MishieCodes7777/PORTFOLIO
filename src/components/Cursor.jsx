import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

/**
 * Custom cursor. Only mounts on devices with a real pointer, so touch users
 * never get a stray dot stuck in the corner (the old bug).
 */
export default function Cursor() {
  const dotRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setEnabled(query.matches && !reduce.matches);

    update();
    query.addEventListener("change", update);
    reduce.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      reduce.removeEventListener("change", update);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const dot = dotRef.current;
    if (!dot) return;

    let frame = 0;

    const move = (e) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      });
    };

    // Delegated hover detection: works for elements added after mount,
    // and needs no per-element listener cleanup.
    const isInteractive = (target) =>
      target instanceof Element &&
      target.closest("a, button, .status, .card--hover");

    const over = (e) => {
      if (isInteractive(e.target)) dot.classList.add("is-hovering");
    };
    const out = (e) => {
      if (isInteractive(e.target)) dot.classList.remove("is-hovering");
    };
    const leaveWindow = () => dot.classList.add("is-hidden");
    const enterWindow = () => dot.classList.remove("is-hidden");

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseover", over);
    document.addEventListener("mouseout", out);
    document.addEventListener("mouseleave", leaveWindow);
    document.addEventListener("mouseenter", enterWindow);
    document.body.classList.add("has-custom-cursor");

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over);
      document.removeEventListener("mouseout", out);
      document.removeEventListener("mouseleave", leaveWindow);
      document.removeEventListener("mouseenter", enterWindow);
      document.body.classList.remove("has-custom-cursor");
    };
  }, [enabled]);

  if (!enabled) return null;

  return <div className="cursor" ref={dotRef} aria-hidden="true" />;
}
