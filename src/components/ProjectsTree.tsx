"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/types";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import ProjectDetails from "@/components/ProjectDetails";

interface ProjectsTreeProps {
  projects: Project[];
}

// Define valid category types
type CategoryType = "web" | "mobile" | "algorithms";

// Define the categories object type
type CategoriesType = {
  [K in CategoryType]: Project[];
};

export default function ProjectsTree({ projects }: ProjectsTreeProps) {
  const [selectedCategory, setSelectedCategory] = useState<CategoryType | null>(
    null
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const treeRef = useRef<HTMLDivElement>(null);
  const [treeLines, setTreeLines] = useState<JSX.Element[]>([]);

  // Initialize categories with proper typing
  const categories: CategoriesType = {
    web: projects.filter((p) => p.category === "web"),
    mobile: projects.filter((p) => p.category === "mobile"),
    algorithms: projects.filter((p) => p.category === "algorithms"),
  };

  useEffect(() => {
    const updateTreeLines = () => {
      if (!treeRef.current) return;

      const treeRect = treeRef.current.getBoundingClientRect();
      const rootNode = treeRef.current.querySelector(".root-node");
      const categoryNodes = treeRef.current.querySelectorAll(".category-node");
      const projectNodes = treeRef.current.querySelectorAll(".project-node");

      const newTreeLines: JSX.Element[] = [];

      if (rootNode) {
        const rootRect = rootNode.getBoundingClientRect();
        categoryNodes.forEach((categoryNode) => {
          const categoryRect = categoryNode.getBoundingClientRect();
          const startX = rootRect.left + rootRect.width / 2 - treeRect.left;
          const startY = rootRect.bottom - treeRect.top;
          const endX =
            categoryRect.left + categoryRect.width / 2 - treeRect.left;
          const endY = categoryRect.top - treeRect.top;
          const midY = (startY + endY) / 2;

          newTreeLines.push(
            <path
              key={`root-${categoryNode.id}`}
              d={`M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`}
              fill="none"
              stroke="var(--primary)"
              strokeWidth="2"
            />
          );
        });
      }

      if (selectedCategory) {
        const selectedCategoryNode = Array.from(categoryNodes).find(
          (node) => node.id === selectedCategory
        );
        if (selectedCategoryNode) {
          const categoryRect = selectedCategoryNode.getBoundingClientRect();
          projectNodes.forEach((projectNode) => {
            const projectRect = projectNode.getBoundingClientRect();
            const startX =
              categoryRect.left + categoryRect.width / 2 - treeRect.left;
            const startY = categoryRect.bottom - treeRect.top;
            const endX =
              projectRect.left + projectRect.width / 2 - treeRect.left;
            const endY = projectRect.top - treeRect.top;
            const midY = (startY + endY) / 2;

            newTreeLines.push(
              <path
                key={`${selectedCategory}-${projectNode.id}`}
                d={`M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${midY}, ${endX} ${endY}`}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="2"
              />
            );
          });
        }
      }

      setTreeLines(newTreeLines);
    };

    updateTreeLines();
    window.addEventListener("resize", updateTreeLines);
    return () => window.removeEventListener("resize", updateTreeLines);
  }, [selectedCategory, projects]);

  const handleCategoryClick = (category: CategoryType) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setSelectedProject(null);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const getCategoryDisplayName = (category: CategoryType): string => {
    const categoryNames = {
      web: "Web Apps",
      mobile: "Mobile Apps",
      algorithms: "Algorithms",
    };
    return categoryNames[category];
  };

  return (
    <div ref={treeRef} className="relative w-full min-h-[450px]">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      >
        <AnimatePresence>{treeLines}</AnimatePresence>
      </svg>

      <div
        className="grid gap-8 justify-items-center relative"
        style={{ zIndex: 1 }}
      >
        <div className="root-node w-48 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold shadow-lg">
          My Projects
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mx-auto">
          {(Object.entries(categories) as [CategoryType, Project[]][]).map(
            ([category, categoryProjects]) => (
              <motion.button
                key={category}
                id={category}
                whileHover={{ scale: 1.05 }}
                onClick={() => handleCategoryClick(category)}
                className={cn(
                  "category-node w-full px-4 py-3 rounded-full font-medium shadow-lg transition-all",
                  "border-2",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-card hover:bg-card-hovered border-primary/20 text-foreground"
                )}
              >
                <div className="text-sm font-semibold">
                  {getCategoryDisplayName(category)}
                </div>
                <div className="text-xs opacity-75">
                  ({categoryProjects.length})
                </div>
              </motion.button>
            )
          )}
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
              {categories[selectedCategory].map((project: Project) => (
                <motion.div
                  key={project.id}
                  id={project.id}
                  whileHover={{ scale: 1.02 }}
                  className="project-node"
                >
                  <Card
                    className={cn(
                      "h-full transition-all cursor-pointer",
                      selectedProject?.id === project.id
                        ? "ring-2 ring-primary shadow-lg"
                        : "hover:shadow-md"
                    )}
                    onClick={() => handleProjectClick(project)}
                  >
                    <CardHeader>
                      <CardTitle className="text-lg font-bold">
                        {project.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {project.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {selectedProject && (
          <motion.div
            className="w-full max-w-4xl mx-auto mt-8"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <ProjectDetails project={selectedProject} />
          </motion.div>
        )}
      </div>
    </div>
  );
}
