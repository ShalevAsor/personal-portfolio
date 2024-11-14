import React from "react";
import { projectsData } from "@/data/projectsData";
import ProjectsTree from "@/components/ProjectsTree";
import SectionTitle from "@/components/SectionTitle";
export default function ProjectsPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 mt-20 md:mt-0">
        <div className="mb-8">
          <SectionTitle text="Projects." />
        </div>
        <div className="flex items-center justify-center">
          <ProjectsTree projects={projectsData} />
        </div>
      </div>
    </div>
  );
}
