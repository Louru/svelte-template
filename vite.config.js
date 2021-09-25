import { defineConfig, loadEnv } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  // expose .env as process.env instead of import.meta since jest does not import meta yet
  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => {
      return {
        ...prev,
        ["process.env." + key]: `"${val}"`,
      };
    },
    {}
  );

  return {
    define: envWithProcessPrefix,
    plugins: [svelte()],
    optimizeDeps: { exclude: ["svelte-navigator"] },
    resolve: {
      alias: [
        {
          find: "@components",
          replacement: "/src/components",
        },
        {
          find: "@tests",
          replacement: "/src/tests",
        },
      ],
    },
  };
});
