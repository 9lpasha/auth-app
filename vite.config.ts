import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/auth-app/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      api: path.resolve(__dirname, "./src/api"),
      components: path.resolve(__dirname, "./src/components"),
      "components-shadcn": path.resolve(__dirname, "./src/components-shadcn"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      pages: path.resolve(__dirname, "./src/pages"),
      types: path.resolve(__dirname, "./src/types"),
    },
  },
});
