export interface MousePosition {
  x: number;
  y: number;
}

export interface ParticleColor {
  core: string;
  trail: string[];
}

export interface CelestialObject {
  x: number;
  y: number;
  update(): void;
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface StarConfig {
  x: number;
  y: number;
  size: number;
  color: string;
  brightness: number;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  category: "web" | "mobile" | "algorithms";
  links?: {
    github?: string;
    live?: string;
  };
  image?: string;
  features: string[];
}
