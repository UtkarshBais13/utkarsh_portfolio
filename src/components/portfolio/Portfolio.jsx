import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "C++ Programmer",
    img: "https://www.startertutorials.com/blog/wp-content/uploads/2016/09/C_Plus_Plus_Progrramming_Language.jpg",
    desc: "Utilize your expertise to design algorithms, implement data structures, and optimize performance. Collaborate with teams to develop innovative applications, ensuring reliability and maintainability. With a keen eye for detail and problem-solving skills",
  },
  {
    id: 2,
    title: "Frontend web-development",
    img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlcryHWUb8QxKH4ARcJxlL4NDLo0fbQD0zsQVDgxUtG__QKlImlAnrxRaOz2_TgoANFxdD3tW9_MHvFntlcnmFrEqHtr-PJfAGXG0ODZo1w0jag9xlcpe1T_BrTFz2ONZevWv-IrMYnD4/w1200-h630-p-k-no-nu/The+Complete+Front-End+Web+Development+Course+best+Udemy+course.jpg",
    desc: " where creativity meets functionality. Armed with expertise in HTML, CSS, and JavaScript,  sculpt visually stunning and interactive user interfaces. Harness the power of frameworks like React, Bootstrap, and Tailwind to streamline development and enhance user experience. Elevate  designs with seamless animations using Framer Motion, captivating audiences with fluid transitions and engaging effects. With a keen eye for design and a passion for innovation, craft immersive digital experiences that leave a lasting impression..",
  },
  {
    id: 3,
    title: "DSA",
    img: "https://www.shutterstock.com/image-vector/dsa-letter-logo-design-illustration-600nw-2309157673.jpg",
    desc: "Mastering the art of problem-solving and algorithmic thinking with proficiency in Data Structures and Algorithms (DSA).Ability to analyze complex problems, identify optimal solutions, and implement efficient algorithms.",
  },
  {
    id: 4,
    title: "DBMS and SQL",
    img: "https://www.interviewbit.com/blog/wp-content/uploads/2021/08/dbms.jpg",
    desc: "Exploring  Database Management Systems (DBMS) and SQL, where data organization and manipulation are key. the ability to design, implement, and optimize database structures to efficiently store and retrieve data. developing a deep understanding of relational database concepts, normalization techniques, and database modeling principles. With mastery over SQL (Structured Query Language)",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Skills</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
