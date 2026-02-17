import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist",
        lib: {
            name: "ilw-profile-card",
            entry: "ilw-profile-card.ts",
            fileName: "ilw-profile-card",
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
