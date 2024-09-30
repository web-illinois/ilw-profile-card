import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-profile-card",
            entry: "ilw-profile-card.js",
            fileName: "ilw-profile-card",
            formats: ["es", "cjs", "umd"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-profile-card.css";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});
