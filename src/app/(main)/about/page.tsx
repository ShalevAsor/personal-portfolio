import React from "react";
import About from "@/components/About";
import SectionTitle from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 mt-20 md:mt-0">
        <div className="mb-8">
          <SectionTitle text="About." />
        </div>
        <div className="flex items-center justify-center">
          <About />
        </div>
      </div>
    </div>
  );
}
