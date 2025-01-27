import React from "react";
import { projectsData } from "@/data/projectsData";
import ProjectsTree from "@/components/ProjectsTree";
import PageLayout from "@/components/PageLayout";

export default function ProjectsPage() {
  return (
    <PageLayout title="Projects">
      <ProjectsTree projects={projectsData} />
    </PageLayout>
  );
}
