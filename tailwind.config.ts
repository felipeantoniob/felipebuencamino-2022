import defaultTheme from "tailwindcss/defaultTheme";
import formsPlugin from "@tailwindcss/forms";
import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sen", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [formsPlugin],
} satisfies Config;
