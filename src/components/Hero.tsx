import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-full flex items-center justify-center px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col items-start text-left">
          <div className="mb-2 text-lg sm:text-xl font-mono opacity-80">
            Hi, I&apos;m
          </div>

          <h1
            className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-2 font-sans text-secondary`}
          >
            Shalev Asor
          </h1>

          <h2 className="text-lg sm:text-xl font-mono text-primary mb-4">
            Frontend Developer
          </h2>

          <div className="space-y-4 text-base sm:text-lg font-sans leading-relaxed opacity-80">
            <p>
              Computer Science & Mathematics graduate with a focus on algorithm
              design and full-stack development. I spend my time building{" "}
              <Link
                href="/projects"
                className="text-foreground underline underline-offset-4 decoration-primary hover:text-primary transition-colors duration-300"
              >
                innovative projects
              </Link>{" "}
              and crafting efficient solutions.
            </p>
          </div>

          <Link
            href="/about"
            className="flex items-center mt-4 text-base sm:text-lg font-sans text-foreground hover:text-primary transition-colors duration-300"
          >
            <span>See More About Me</span>
            <span className="inline-block ml-2 animate-[moveRight_1s_ease-in-out_infinite]">
              →
            </span>
          </Link>

          <div className="flex justify-start space-x-4 mt-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/shalevasor"
              className="text-foreground opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://linkedin.com/in/shalev-asor"
              className="text-foreground opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:shalevasor@gmail.com"
              className="text-foreground opacity-70 hover:opacity-100 hover:text-primary transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
