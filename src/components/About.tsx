import React from "react";
import { Card } from "@/components/ui/card";
import { Code2, Database, Rocket } from "lucide-react";

const About = () => {
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
        "HTML",
        "CSS",
        "Python",
        "SQL",
      ],
    },
    {
      category: "Tools & Frameworks",
      icon: Rocket,
      items: [
        "Firebase",
        "Supabase",
        "Next.js",
        "React.js",
        "Git",
        "Unix/Linux",
        "Node.js",
        "WebSocket",
        "Prisma",
        "React Query",
        "TailwindCSS",
        "shadcn/ui",
        "Clerk",
      ],
    },
    {
      category: "Databases",
      icon: Database,
      items: ["MySQL", "PostgreSQL", "Supabase"],
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 pt-12 relative z-10">
        {/* Summary */}
        <div className="space-y-6 text-lg opacity-80 mb-16">
          <p>
            Recent B.Sc. graduate in Computer Science and Mathematics from Ariel
            University with a deep passion for frontend development and user
            experience. I blend algorithmic thinking with modern web
            technologies to create responsive, intuitive, and visually stunning
            applications.
          </p>
          <p>
            Proficient in React.js, Next.js, and modern frontend frameworks, I
            specialize in building performant web applications with clean,
            maintainable code. My strong foundation in algorithms and data
            structures enables me to optimize applications and implement complex
            features efficiently.
          </p>
          <p>
            My expertise spans from crafting pixel-perfect user interfaces to
            implementing sophisticated algorithms. This unique combination
            allows me to develop not just visually appealing applications, but
            ones that are built on solid computer science principles and
            optimized performance.
          </p>
        </div>

        {/* Skills Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Technical Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillSet) => (
              // For the main skill cards (Programming, Tools & Frameworks, Databases boxes)
              <Card
                key={skillSet.category}
                className="p-6  text-card-foreground
             border border-border
             hover:bg-card-hovered
             transition-colors duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <skillSet.icon className="w-5 h-5 text-primary group-hover:text-primary-dark transition-colors" />
                  <h3 className="text-lg font-medium text-card-foreground">
                    {skillSet.category}
                  </h3>
                </div>
                {/* Individual skill tags (C++, Java, etc.) */}
                <div className="flex flex-wrap gap-2">
                  {skillSet.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full text-sm 
                   bg-muted text-muted-foreground
                   border border-border
                   hover:bg-primary hover:text-primary-foreground
                   hover:border-primary-dark
                   transition-colors duration-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <Card
            className="p-6 bg-card text-card-foreground
             border border-border
             hover:bg-card-hovered
             transition-colors duration-300"
          >
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                B.Sc. in Computer Science and Mathematics
              </h3>
              <p className="text-primary">Ariel University</p>
              <p className="opacity-60">2020-2024 • Average: 84.5</p>
            </div>
            <div className="mt-4 pt-4 border-t border-primary/10">
              <p className="opacity-60">
                Focused on developing strong foundations in algorithm design,
                data structures, and mathematical problem-solving while
                maintaining academic excellence.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
