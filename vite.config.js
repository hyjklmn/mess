import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";
import { presetUno } from "unocss";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Unocss({
      presets: [presetUno(), presetIcons({})],
    }),
  ],
  server: {
    port: 8080,
    proxy: {
      "^/api": {
        target: "http://localhost:8282", // 后端服务实际地址
        changeOrigin: true, //开启代理
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
