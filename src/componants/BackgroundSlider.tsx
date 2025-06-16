import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Slide = {
  url: string;
  title: string;
  subtitle: string;
};

type BackgroundSliderProps = {
  imgs?: Slide[];
};

const defaultImages: Slide[] = [
  {
    url: "https://slidechef.net/wp-content/uploads/2023/11/GEAR-BACKGROUND.jpg",
    title: "",
    subtitle: "",
  },
  {
    url: "https://t3.ftcdn.net/jpg/02/88/80/38/360_F_288803822_0CJ8L3gr6w6nGnUeje6pCllCX7s986xz.jpg",
    title: "",
    subtitle: "",
  },
];

const BackgroundSlider = ({ imgs = defaultImages }: BackgroundSliderProps) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % imgs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, imgs.length]);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: -1,
        overflow: "hidden",
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={imgs[current].url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            backgroundImage: `url(${imgs[current].url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "start",
            alignItems: "center",
            color: "white",
            textShadow: "0 0 8px rgba(0,0,0,0.7)",
            padding: "20px",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            style={{
              fontSize: "2.5rem",
              margin: 5,
              textAlign: "center",
            }}
          >
            {imgs[current].title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            exit={{ opacity: 0, filter: "blur(10px)" }}
            style={{
              fontSize: "1.2rem",
              marginTop: "10px",
              textAlign: "center",
              maxWidth: "80%",
            }}
          >
            {imgs[current].subtitle}
          </motion.p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BackgroundSlider;
