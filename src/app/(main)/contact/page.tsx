import React from "react";
import Contact from "@/components/Contact";
import SectionTitle from "@/components/SectionTitle";

export default function ContactPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 mt-20 md:mt-0">
        <div className="mb-3"></div>
        <div className="mb-8">
          <SectionTitle text="Contact." />
        </div>
        <div className="flex items-center justify-center">
          <Contact />
        </div>
      </div>
    </div>
  );
}
