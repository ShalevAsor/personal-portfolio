import React from "react";
import SectionTitle from "@/components/SectionTitle";

interface PageLayoutProps {
  children: React.ReactNode;
  title: string;
}

export default function PageLayout({ children, title }: PageLayoutProps) {
  return (
    <div className="min-h-screen pt-20 pb-16 flex flex-col mt-4">
      <div className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="mb-8">
          <SectionTitle text={`${title}.`} />
        </div>
        <div className="mt-8">{children}</div>
      </div>
    </div>
  );
}
