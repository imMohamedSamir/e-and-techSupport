import { motion } from "framer-motion";

function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: -50, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <text
        alignmentBaseline="central"
        style={{ color: "white", fontSize: ".9rem" }}
      >
        To deliver the best quality of service, we have a teams of
        professionals.
      </text>
    </motion.div>
  );
}
export default AnimatedBox;
