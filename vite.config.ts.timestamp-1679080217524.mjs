// vite.config.ts
import solid from "file:///Users/givi.g/Development/morevi-new/node_modules/solid-start/vite/plugin.js";
import { defineConfig } from "file:///Users/givi.g/Development/morevi-new/node_modules/vite/dist/node/index.js";
import { vanillaExtractPlugin } from "file:///Users/givi.g/Development/morevi-new/node_modules/@vanilla-extract/vite-plugin/dist/vanilla-extract-vite-plugin.cjs.js";
var vite_config_default = defineConfig({
  server: {
    fs: {
      strict: true
    }
  },
  plugins: [
    solid({
      ssr: true
    }),
    // adapter: vercel({
    // 	prerender: {
    // 		expiration: 60
    // 	}
    // })
    vanillaExtractPlugin()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZ2l2aS5nL0RldmVsb3BtZW50L21vcmV2aS1uZXdcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9naXZpLmcvRGV2ZWxvcG1lbnQvbW9yZXZpLW5ldy92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvZ2l2aS5nL0RldmVsb3BtZW50L21vcmV2aS1uZXcvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgc29saWQgZnJvbSAnc29saWQtc3RhcnQvdml0ZSc7XG5pbXBvcnQgdmVyY2VsIGZyb20gJ3NvbGlkLXN0YXJ0LXZlcmNlbCc7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IHZhbmlsbGFFeHRyYWN0UGx1Z2luIH0gZnJvbSAnQHZhbmlsbGEtZXh0cmFjdC92aXRlLXBsdWdpbic7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHNlcnZlcjoge1xuXHRcdGZzOiB7XG5cdFx0XHRzdHJpY3Q6IHRydWVcblx0XHR9XG5cdH0sXG5cdHBsdWdpbnM6IFtcblx0XHRzb2xpZCh7XG5cdFx0XHRzc3I6IHRydWVcblx0XHR9KSxcblx0XHQvLyBhZGFwdGVyOiB2ZXJjZWwoe1xuXHRcdFx0Ly8gXHRwcmVyZW5kZXI6IHtcblx0XHRcdC8vIFx0XHRleHBpcmF0aW9uOiA2MFxuXHRcdFx0Ly8gXHR9XG5cdFx0XHQvLyB9KVxuXHRcdHZhbmlsbGFFeHRyYWN0UGx1Z2luKClcblx0XSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE4UixPQUFPLFdBQVc7QUFFaFQsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyw0QkFBNEI7QUFFckMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsUUFBUTtBQUFBLElBQ1AsSUFBSTtBQUFBLE1BQ0gsUUFBUTtBQUFBLElBQ1Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUixNQUFNO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDTixDQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTUQscUJBQXFCO0FBQUEsRUFDdEI7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
