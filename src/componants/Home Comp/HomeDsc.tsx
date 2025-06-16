import { motion } from "framer-motion";

function HomeDsc() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 0, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: -80, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
      }}
    >
      <h1
        style={{
          textAlign: "right",
          color: "white",
          fontSize: "2rem",
        }}
      >
        Technical support guide
      </h1>
      <p
        style={{
          textAlign: "right",
          color: "white",
          fontSize: ".9rem",
          direction: "ltr",
          margin: 0,
        }}
      >
        Your comprehensive network guide for managing
        <br /> and troubleshooting network infrastructure
      </p>
    </motion.div>
  );
}

export default HomeDsc;
