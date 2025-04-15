// theme.ts
import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#fef9f5" },
          100: { value: "#fcefdc" },
          200: { value: "#f7e1b8" },
          300: { value: "#f0cd8b" },
          400: { value: "#eabf6f" },
          500: { value: "#d2ac71" }, // primary
          600: { value: "#b08959" },
          700: { value: "#8c6742" },
          800: { value: "#6a4b2e" },
          900: { value: "#4f3921" },
        },
        background: { value: "#121212" },
      },
    },
  },
});

export const theme = createSystem(defaultConfig, customConfig);
