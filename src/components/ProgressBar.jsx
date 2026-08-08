import { motion, useScroll, useSpring } from "framer-motion";
import "./ProgressBar.css";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });

  return <motion.div className="progress-bar" style={{ scaleX }} aria-hidden="true" />;
}
