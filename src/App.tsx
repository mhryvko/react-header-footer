import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import RakutenHeader from "./components/rakuten/header/Header";
import NextHeader from "./components/next/header/Header";
import RakutenFooter from "./components/rakuten/footer/Footer";
import NextFooter from "./components/next/footer/Footer";
import Timer from "./components/Timer";

const App: React.FC = () => {
  const [showFirstSet, setShowFirstSet] = useState(true);
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  const handleTimerEnd = () => {
    setShowFirstSet((prev) => !prev);
  };

  const handleScroll = () => {
    setShowScrollToTop(window.scrollY > 200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const animationVariants = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
  };

  return (
    <div className="app">
      <div className="header-wrapper">
        <AnimatePresence mode="wait">
          {showFirstSet ? (
            <motion.div
              className="fixed-header"
              key="rakuten-header"
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <RakutenHeader />
            </motion.div>
          ) : (
            <motion.div
              className="fixed-header"
              key="next-header"
              variants={animationVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <NextHeader />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <main>
        <div className="content">
          <p>
            {[...Array(990)].map((_, i) => (
              <span key={i}>Lorem ipsum dolor sit amet. </span>
            ))}
          </p>
          <Timer onTimerEnd={handleTimerEnd} />
        </div>
      </main>
      <AnimatePresence mode="wait">
        {showFirstSet ? (
          <motion.div
            key="rakuten-footer"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <RakutenFooter />
          </motion.div>
        ) : (
          <motion.div
            key="next-footer"
            variants={animationVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <NextFooter />
          </motion.div>
        )}
      </AnimatePresence>
      {showScrollToTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
