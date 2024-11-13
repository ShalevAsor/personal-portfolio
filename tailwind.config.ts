// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        text: "text",
      },
      colors: {
        // Base colors
        background: "var(--background)",
        foreground: "var(--foreground)",
        "background-start": "var(--background-start)",
        "background-end": "var(--background-end)",

        // Primary colors and variations
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
        },

        // Secondary colors and variations
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },

        // Accent colors
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },

        // Semantic colors
        success: {
          DEFAULT: "var(--success)",
          foreground: "var(--success-foreground)",
          light: "var(--success-light)",
          dark: "var(--success-dark)",
        },
        warning: {
          DEFAULT: "var(--warning)",
          foreground: "var(--warning-foreground)",
          light: "var(--warning-light)",
          dark: "var(--warning-dark)",
        },
        error: {
          DEFAULT: "var(--error)",
          foreground: "var(--error-foreground)",
          light: "var(--error-light)",
          dark: "var(--error-dark)",
        },
        info: {
          DEFAULT: "var(--info)",
          foreground: "var(--info-foreground)",
          light: "var(--info-light)",
          dark: "var(--info-dark)",
        },

        // UI element colors
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
          hovered: "var(--card-hovered)",
          active: "var(--card-active)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },

        // Border colors
        border: {
          DEFAULT: "var(--border)",
          light: "var(--border-light)",
          dark: "var(--border-dark)",
        },
      },
      backgroundImage: {
        "gradient-primary": "var(--gradient-primary)",
        "gradient-secondary": "var(--gradient-secondary)",
        "gradient-accent": "var(--gradient-accent)",
        "gradient-success": "var(--gradient-success)",
        "gradient-error": "var(--gradient-error)",
        "gradient-warning": "var(--gradient-warning)",
        "gradient-info": "var(--gradient-info)",
      },
      // Rest of your existing config...
    },
  },
  darkMode: ["class"],
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
