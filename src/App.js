import React, { useState } from "react";
import { HotKeys } from "react-hotkeys";
import { motion } from "framer-motion";

import "./styles.css";
import ListItem from "./ListItem.js";
import Canvas from "./Canvas.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const variants = {
    open: { x: "-20rem" },
    closed: { x: "0px" }
  };

  const toggleMenu = React.useCallback(() => {
    console.log("tooglemenu");
    m;
    setIsOpen(!isOpen);
  });

  const keyMap = {
    TOGGLE_MENU: "m"
  };

  const handlers = {
    TOGGLE_MENU: toggleMenu
  };

  return (
    <HotKeys keyMap={keyMap} handlers={handlers}>
      <div className="container fullscreen" id="fullsccreen">
        {/* {state && (  )} */}
        <motion.div>
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={variants}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 40
            }}
            drag="x"
            dragConstraints={{ left: -340, right: 0 }}
          >
            <div className="navbar">
              <div className="slider" onClick={() => setIsOpen(!isOpen)}>
                <span>menu</span>
              </div>

              <div className="header font-title">Moodoard</div>

              <ul>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
              </ul>
              <div className="footer ont-secondary" />
            </div>
          </motion.div>

          <Canvas />
        </motion.div>

        {/* <button onClick={() => setIsOpen(!isOpen)}>Toggle</button> */}
      </div>
    </HotKeys>
  );
}
export default App;
