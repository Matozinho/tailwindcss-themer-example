import type { Config } from "tailwindcss";
import themer from "tailwindcss-themer";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundColor: ({ theme }) => ({
        "tailwind-with-theme": theme("colors.red.200"),
        "tailwind-with-opacity": "hsla(0,0%,100%,0.5)",

        "with-theme": theme("colors.blue.200"),
        "with-opacity": "hsla(0,0%,100%,0.8)",
      }),
    },
  },
  plugins: [
    themer({
      defaultTheme: {
        extend: {
          backgroundColor: ({ theme }) => ({
            "with-theme": theme("colors.blue.200"),
            "with-opacity": "hsla(0,0%,100%,0.8)",
          }),
        },
      },
      themes: [
        {
          name: "example_1",
          extend: {
            backgroundColor: ({ theme }) => ({
              "with-theme": theme("colors.primary"),
              "with-opacity": "hsla(0,0%,100%,0.2)",
            }),
          },
        },
      ],
    }),
    require("tailwindcss-animate"),
  ],
};
export default config;