import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-icon-panel",
            entry: "ilw-icon-panel.ts",
            fileName: "ilw-icon-panel",
            formats: ["es"],
        },
    },
    server: {
        hmr: false,
    },
});
