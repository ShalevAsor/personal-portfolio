import Contact from "@/components/Contact";
import React from "react";
import SectionTitle from "@/components/SectionTitle";
export default function ContactPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 mt-20 md:mt-0">
        {" "}
        {/* Section Title */}
        <div className="mb-2">
          <div className="inline-flex flex-col">
            <SectionTitle text="Contact." />
          </div>
        </div>
        <Contact />
      </div>
    </div>
  );
}
