import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/shalevasor",
      icon: Github,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/shalev-asor",
      icon: Linkedin,
    },
    {
      name: "Email",
      href: "mailto:your.email@example.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-center py-6 gap-4">
          {/* Copyright */}
          <span className="text-sm text-muted-foreground font-mono">
            © {currentYear} <span className="text-secondary">{"/"}</span>
            <span className="text-secondary">{"/"}</span> All rights reserved{" "}
            <span className="text-secondary">{"/"}</span>
            <span className="text-secondary">{"/"}</span>
            {" Shalev Asor"}
          </span>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative"
                  aria-label={link.name}
                >
                  <Icon
                    size={18}
                    className="text-muted-foreground transition-colors duration-300 group-hover:text-secondary"
                  />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-secondary transition-all duration-300 group-hover:w-full" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
