import React from "react";
import { projectsData } from "@/data/projectsData";
import ProjectsTree from "@/components/ProjectsTree";
import SectionTitle from "@/components/SectionTitle";
export default function ProjectsPage() {
  return (
    <main className="relative min-h-full">
      <div className="max-w-4xl mx-auto px-6 pt-24 relative z-10">
        {/* Section Title */}
        <div className="mb-2">
          <div className="inline-flex flex-col mb-4">
            <SectionTitle text="Projects." />
            {/* <h1 className="text-4xl sm:text-5xl font-bold mb-6 ">About.</h1> */}
          </div>
        </div>

        <ProjectsTree projects={projectsData} />
      </div>
    </main>
  );
}
