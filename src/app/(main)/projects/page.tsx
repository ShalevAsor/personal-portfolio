import React from "react";
import { projectsData } from "@/data/projectsData";
import ProjectsTree from "@/components/ProjectsTree";

export default function ProjectsPage() {
  return (
    <main className="relative min-h-full">
      <div className="max-w-4xl mx-auto px-6 pt-24 relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Projects.</h1>

        <ProjectsTree projects={projectsData} />
      </div>
    </main>
  );
}
