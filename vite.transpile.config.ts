import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-icon-panel",
            entry: "ilw-icon-panel.ts",
            fileName: "ilw-icon-panel",
            formats: ["es"],
        },
        rollupOptions: {
            external: [/^@?lit/, /^@illinois-toolkit/],
        },
    },
    server: {
        hmr: false,
    },
    plugins: [dts()],
});
