import Contact from "@/components/Contact";
import React from "react";

export default function ContactPage() {
  return (
    <div className="h-full flex items-center justify-center">
      <div className="max-w-4xl w-full px-6 mt-20 md:mt-0">
        {" "}
        {/* Added margin top with responsive adjustment */}
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact.</h1>
        <Contact />
      </div>
    </div>
  );
}
