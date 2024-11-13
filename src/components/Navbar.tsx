import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Moon, Sun, Menu } from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

// Define interface for NavLinks props
interface NavLinksProps {
  className?: string;
  onClick?: () => void;
}

// Define interface for nav items
interface NavItem {
  href: string;
  label: string;
}

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems: NavItem[] = [
    { href: "/", label: "home" },
    { href: "/about", label: "about" },
    { href: "/projects", label: "projects" },
    { href: "/contact", label: "contact" },
  ];

  const NavLinks: React.FC<NavLinksProps> = ({
    className = "",
    onClick = () => {},
  }) => (
    <>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          onClick={onClick}
          className={cn(
            "font-mono text-sm transition-all duration-300 relative group",
            pathname === item.href
              ? "text-secondary"
              : "text-muted-foreground hover:text-secondary",
            className
          )}
        >
          <span className="text-secondary opacity-75">//</span> {item.label}
          <span
            className={cn(
              "absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-secondary transition-all duration-300 group-hover:w-full",
              pathname === item.href && "w-full"
            )}
          />
        </Link>
      ))}
    </>
  );

  return (
    <div
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled && "backdrop-blur-md bg-background/80 shadow-lg"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="relative group">
            <Logo className="transition-all duration-300 group-hover:opacity-80" />
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-secondary transition-all duration-300 group-hover:w-full" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-secondary hover:text-secondary/90 hover:bg-secondary/10"
            >
              {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-secondary hover:text-secondary/90 hover:bg-secondary/10"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-[300px] sm:w-[400px] border-l border-border bg-background"
              >
                <div className="flex flex-col space-y-8 mt-16">
                  <NavLinks className="text-lg p-2 w-full hover:bg-secondary/10 rounded-md" />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={toggleTheme}
                    className="text-secondary hover:text-secondary/90 hover:bg-secondary/10"
                  >
                    {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </div>
  );
}
