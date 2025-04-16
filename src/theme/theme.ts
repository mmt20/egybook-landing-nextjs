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
          500: { value: "#d2ac71" },
          600: { value: "#b08959" },
          700: { value: "#8c6742" },
          800: { value: "#6a4b2e" },
          900: { value: "#4f3921" },
        },
        background: { value: "#121212" },
        darkGradient: {
          value:
            "linear-gradient(274deg, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.99) 50%, rgba(18, 18, 18, 0.9) 100%)",
        },
      },
    },
  },

  globalCss: {
    body: {
      background:
        "linear-gradient(274deg, rgba(18, 18, 18, 0.9) 0%, rgba(18, 18, 18, 0.99) 50%, rgba(18, 18, 18, 0.9) 100%)",
      color: "white",
      width: "100%",
      overflowX: "hidden",
      margin: 0,
      padding: 0,
    },
  },
});

export const theme = createSystem(defaultConfig, customConfig);
