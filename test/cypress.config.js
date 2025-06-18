import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://nextdex-six.vercel.app/",
    viewportWidth: 390,
    viewportHeight: 844,
  },
});
