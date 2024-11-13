import React from "react";
import { Project } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Globe } from "lucide-react";

interface ProjectDetailsProps {
  project: Project;
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl sm:text-2xl">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
          {project.description}
        </p>

        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-3 text-foreground">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-base sm:text-lg mb-3 text-foreground">
            Key Features
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-muted-foreground"
              >
                <span className="text-primary">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-4">
          {project.links!.github && (
            <a
              href={project.links!.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-primary hover:bg-primary-dark text-primary-foreground rounded-lg transition-colors"
            >
              <Github size={20} />
              View on GitHub
            </a>
          )}
          {project.links!.live && (
            <a
              href={project.links!.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-2 bg-secondary hover:bg-secondary-dark text-secondary-foreground rounded-lg transition-colors"
            >
              <Globe size={20} />
              Live Demo
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
