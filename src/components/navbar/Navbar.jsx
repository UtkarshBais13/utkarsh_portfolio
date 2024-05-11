import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          UTKARSH BAIS
        </motion.span>
        <div className="social">
          <a href="https://github.com/UtkarshBais13">
            <img src="/git.png" alt="" />
          </a>
          <a href="https://www.instagram.com/utkarsh_singh_bais/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/utkarsh-bais-248b40224/">
            <img src="/linkdin2.png" alt="" />
          </a>
          <a href="https://leetcode.com/u/utkarsh_bais/">
            <img src="/leetcode.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
