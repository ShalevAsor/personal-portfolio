"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Rocket } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const skills = [
  {
    category: "Programming",
    icon: Code2,
    items: [
      "C++",
      "Java",
      "JavaScript",
      "TypeScript",
      "C",
      "Kotlin",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Tools & Frameworks",
    icon: Rocket,
    items: ["Firebase", "Supabase", "Next.js", "React.js", "Git", "Unix/Linux"],
  },
  {
    category: "Databases",
    icon: Database,
    items: ["MySQL", "MongoDB"],
  },
];

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full space-y-8"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Summary Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="border border-border bg-[#1a1f2e] shadow-lg">
            <CardContent className="p-6">
              <div className="space-y-4">
                <h2 className="text-xl text-blue-400 font-semibold">Summary</h2>
                <div className="space-y-4 text-gray-400">
                  <p>
                    Recent B.Sc. graduate in Computer Science and Mathematics
                    from Ariel University with a deep passion for frontend
                    development and user experience.
                  </p>
                  <p>
                    Proficient in React.js, Next.js, and modern frontend
                    frameworks, I specialize in building performant web
                    applications with clean, maintainable code.
                  </p>
                  <p>
                    My expertise spans from crafting pixel-perfect user
                    interfaces to implementing sophisticated algorithms.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {skills.map((skillSet, index) => (
              <motion.div
                key={skillSet.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * (index + 1) }}
              >
                <Card className="border border-border bg-[#1a1f2e]">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <skillSet.icon className="w-5 h-5 text-blue-400" />
                      <h3 className="text-lg text-white">
                        {skillSet.category}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillSet.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-sm bg-[#2a2f3e] text-gray-400 hover:bg-blue-400/10 hover:text-blue-400 transition-colors duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
