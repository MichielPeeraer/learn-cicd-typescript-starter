import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node }
  },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  globalIgnores(["dist/"])
]);
