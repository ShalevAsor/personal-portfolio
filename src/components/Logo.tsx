import React from "react";
import { motion } from "framer-motion";

const Logo = ({ className = "" }) => {
  // Animation variants for continuous animation
  const pathVariants = {
    initial: {
      pathLength: 0,
      opacity: 0.2,
    },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
        opacity: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        },
      },
    },
  };

  // Animation variants for the bracket movement
  const bracketVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: [0, 2, 0],
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  };

  return (
    <div className={`relative ${className}`}>
      <motion.svg
        viewBox="0 0 100 50"
        className="w-12 h-8 text-secondary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        initial="initial"
        animate="animate"
      >
        {/* Left bracket */}
        <motion.path
          d="M20 5L10 25L20 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={bracketVariants}
        />

        {/* Right bracket */}
        <motion.path
          d="M80 5L90 25L80 45"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={bracketVariants}
        />

        {/* S path */}
        <motion.path
          d="M45 15C45 15 35 20 30 20C25 20 25 15 30 15C35 15 35 35 30 35C25 35 25 30 25 30"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />

        {/* A path */}
        <motion.path
          d="M55 35L65 15M65 15L75 35M58 28H72"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={pathVariants}
        />

        {/* Optional: Add a subtle dot between S and A */}
        <motion.circle
          cx="50"
          cy="25"
          r="1.5"
          fill="currentColor"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 0],
            transition: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      </motion.svg>

      {/* Interactive hover effect */}
      <div className="absolute inset-0 bg-gradient-secondary opacity-0 hover:opacity-10 transition-opacity duration-300 rounded-lg" />
    </div>
  );
};

export default Logo;
