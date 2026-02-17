import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-profile-card",
            entry: "ilw-profile-card.ts",
            fileName: "ilw-profile-card",
            formats: ["es"],
        },
    },
    server: {
        hmr: false,
    },
});
