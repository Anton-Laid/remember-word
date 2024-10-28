import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const defaultConfig = {
  plugins: [tsconfigPaths(), react()],
};

export default defineConfig(({ command, mode }) => {
  process.env = Object.assign(process.env, loadEnv(mode, process.cwd()));

  if (command === "serve") {
    return {
      ...defaultConfig,

      test: {
        environment: "jsdom",
        setupFiles: ["./vitest.setup.ts"],
      },
      server: {
        open: Boolean(process.env.VITE_OPEN),
        host: true,
        port: +process.env.VITE_PORT!,
      },
    };
  } else {
    return {
      ...defaultConfig,
      build: {
        outDir: "./build",
        emptyOutDir: true,
      },
    };
  }
});
