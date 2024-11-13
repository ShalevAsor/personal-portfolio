"use client";

import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";

const Background = () => {
  const { theme } = useTheme();
  const pathname = usePathname();

  const getBackgroundText = () => {
    const path = pathname.split("/")[1];
    return path || "home";
  };

  return (
    <>
      {/* Base gradient background */}
      <div className="fixed inset-0 transition-colors duration-300 bg-background">
        <div
          className="absolute inset-0"
          style={{
            background:
              theme === "dark"
                ? `
                linear-gradient(130deg, var(--background-start) 0%, var(--background-end) 100%),
                radial-gradient(circle at top left, var(--primary-dark) 0%, transparent 50%),
                radial-gradient(circle at bottom right, var(--accent-dark) 0%, transparent 50%),
                radial-gradient(circle at center, var(--secondary-dark) 0%, transparent 70%)`
                : `
                linear-gradient(130deg, var(--background-start) 0%, var(--background-end) 100%),
                radial-gradient(circle at top left, var(--primary-light) 0%, transparent 50%),
                radial-gradient(circle at bottom right, var(--accent-light) 0%, transparent 50%),
                radial-gradient(circle at center, var(--secondary-light) 0%, transparent 70%)`,
            backgroundBlendMode: "overlay",
            opacity: theme === "dark" ? 0.15 : 0.1,
          }}
        />
      </div>

      {/* Grid overlay - Updated for better visibility */}
      <div
        className="fixed inset-0 transition-opacity duration-300"
        style={{
          backgroundImage: `
            linear-gradient(${
              theme === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)"
            } 1px, transparent 1px),
            linear-gradient(to right, ${
              theme === "dark"
                ? "rgba(255, 255, 255, 0.1)"
                : "rgba(0, 0, 0, 0.1)"
            } 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
          // Increased opacity
          opacity: theme === "dark" ? 0.2 : 0.15,
        }}
      />

      {/* Background text */}
      <div
        className="fixed bottom-[-15%] left-1/2 transform -translate-x-1/2
                   text-[25vw] font-extrabold whitespace-nowrap uppercase
                   pointer-events-none z-0 transition-colors duration-300"
        style={{
          color: "var(--foreground)",
          opacity: theme === "dark" ? 0.03 : 0.02,
        }}
        aria-hidden="true"
      >
        {getBackgroundText()}
      </div>

      {/* Additional gradient overlays for depth */}
      <div
        className="fixed inset-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            theme === "dark"
              ? `
              radial-gradient(circle at 25% 25%, 
                 var(--primary-dark) 0%, 
                 transparent 50%),
              radial-gradient(circle at 75% 75%, 
                 var(--accent-dark) 0%, 
                 transparent 50%)
            `
              : `
              radial-gradient(circle at 25% 25%, 
                 var(--primary-light) 0%, 
                 transparent 50%),
              radial-gradient(circle at 75% 75%, 
                 var(--accent-light) 0%, 
                 transparent 50%)
            `,
          opacity: theme === "dark" ? 0.08 : 0.05,
        }}
      />
    </>
  );
};

export default Background;
