// "use client";
// import Background from "@/components/Background";
// import Footer from "@/components/Footer";
// import Navbar from "@/components/Navbar";
// import ThemeProvider from "@/components/ThemeProvider";
// import { usePathname } from "next/navigation";

// export default function MainLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const pathname = usePathname();
//   const isHomePage = pathname === "/";

//   return (
//     <ThemeProvider>
//       <div
//         className={`relative ${
//           isHomePage ? "h-screen overflow-hidden" : "min-h-screen"
//         } bg-background text-foreground transition-colors duration-300`}
//       >
//         <Background />
//         {/* Container for both nav and main content */}
//         <div className="container mx-auto px-8 sm:px-16 lg:px-24 h-full flex flex-col">
//           <Navbar />
//           <main
//             className={`relative z-10 ${isHomePage ? "flex-grow" : "pt-32"}`}
//           >
//             {children}
//           </main>
//           <Footer />
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// }
"use client";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { usePathname } from "next/navigation";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <ThemeProvider>
      <div
        className={`relative ${
          isHomePage ? "h-screen overflow-hidden" : "h-screen"
        } bg-background text-foreground transition-colors duration-300`}
      >
        <Background />
        <div className="h-full flex flex-col">
          <Navbar />
          <main
            className={`flex-1 relative z-10 ${
              isHomePage ? "" : "container mx-auto px-8 sm:px-16 lg:px-24"
            }`}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
