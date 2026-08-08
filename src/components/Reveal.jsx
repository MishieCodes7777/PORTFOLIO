import { motion, useReducedMotion } from "framer-motion";

/**
 * Fades + lifts its children into view once, when scrolled to.
 * Respects prefers-reduced-motion: renders statically if motion is reduced.
 */
export default function Reveal({ children, delay = 0, as = "div", className }) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;

  if (reduce) {
    const Tag = as;
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
