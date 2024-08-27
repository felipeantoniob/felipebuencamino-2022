import defaultTheme from "tailwindcss/defaultTheme";
import formsPlugin from "@tailwindcss/forms";
import catppuccinPlugin from "@catppuccin/tailwindcss";
import type { Config } from "tailwindcss";
import type { PluginCreator, PluginsConfig } from "tailwindcss/types/config";

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Sen", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    formsPlugin,
    catppuccinPlugin({
      // prefix to use, e.g. `text-pink` becomes `text-ctp-pink`.
      // default is `false`, which means no prefix
      prefix: "ctp",
      // which flavour of colours to use by default, in the `:root`
      defaultFlavour: "mocha",
    }) as PluginsConfig[number],
  ],
} satisfies Config;
