import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
        programming and developing to
          <br />  move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/project3.jpg" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Projects</motion.b> Ideas
          </h1>
        </div>
        
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Portfolio</h2>
          <p>
          A sleek portfolio website crafted with React and Framer Motion, featuring captivating animations and smooth transitions. Showcasing projects elegantly with interactive elements and engaging hover effects. Personalized sections like About Me and Contact, inviting visitors to connect effortlessly. Responsively designed for seamless browsing across devices, maintaining visual excellence.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Tindog</h2>
          <p>
          Tindog is a playful and engaging website inspired by the popular dating app Tinder, but with a twist – it's designed for matching dogs with potential playmates or even romantic partners! The website features a vibrant and cheerful design, with colorful illustrations of dogs and playful animations throughout. Users can create profiles for their furry friends, complete with photos, descriptions, and preferences.
          </p>
          <a href="https://github.com/UtkarshBais13/Tindog">
          <button>Go</button>
          </a>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Educational web</h2>
          <p>
          Welcome to our educational hub, where learning knows no bounds. Our responsive website adapts seamlessly to your device, ensuring access to valuable resources on the go. Explore diverse subjects and interactive content designed to inspire curiosity and foster growth. Join a vibrant community of learners and educators, connecting and collaborating from anywhere. Embark on a journey of discovery and lifelong learning with us.
          </p>
          <button>Go</button>
        </motion.div>
        
      </motion.div>
    </motion.div>
  );
};

export default Services;
