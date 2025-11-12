// eslint.config.mjs or eslint.config.js
import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import unusedImports from "eslint-plugin-unused-imports";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  js.configs.recommended,
  ...tseslint.configs.recommended,
  prettier, // Disables formatting conflicts with Prettier

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "node_modules/**",
    "dist/**",
    "coverage/**",
  ]),

  {
    plugins: {
      "unused-imports": unusedImports,
    },

    rules: {
      /* 🚫 Prevent mistakes in production */
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "error",
      "no-alert": "error",
      "no-eval": "error",
      "no-implied-eval": "error",
      "no-undef": "error",
      "no-duplicate-imports": "error",
      "no-unreachable": "error",
      "eqeqeq": ["error", "always"],
      "curly": ["error", "all"],

      /* 🧹 Clean code */
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "unused-imports/no-unused-imports": "error",
      "no-trailing-spaces": "error",
      "eol-last": ["error", "always"],
      "no-multiple-empty-lines": ["error", { max: 1 }],

      /* ⚛️ React + Next best practices */
      "react/react-in-jsx-scope": "off",
      "@next/next/no-img-element": "warn",
      "@next/next/no-html-link-for-pages": "error",
      "@next/next/no-typos": "error",
      "react/jsx-key": "error",

      /* 💬 Consistency and readability */
      "prefer-const": "error",
      "prefer-template": "warn",
      "object-shorthand": "error",
      "arrow-body-style": ["warn", "as-needed"],

      /* 🛡️ Security */
      "no-script-url": "error",
      "react/jsx-no-target-blank": ["error", { allowReferrer: false }],
    },
  },
]);

