// eslint.config.mjs
import eslintPluginPrettier from "eslint-plugin-prettier";
import eslintPluginTypeScript from "@typescript-eslint/eslint-plugin";
import globals from "globals";
import parser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";

export default [
  {
    ignores: [
      "**/node_modules/**",
      "**/*.min.js",
      "**/.next/**",
      "**/next.config.mjs",
      "**/postcss.config.mjs",
    ],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: "module",
      parser: parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.url, // TypeScript configuration path
        ecmaVersion: "latest",
        sourceType: "module",
        allowDefaultProject: true,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: eslintPluginPrettier,
      "@typescript-eslint": eslintPluginTypeScript,
    },
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/no-explicit-any": "off", // Prohibited use of any type
      "@typescript-eslint/no-floating-promises": "off", // Warning: Unhandled Promise
      "@typescript-eslint/no-unsafe-argument": "warn", // Warning: unsafe parameters
      "@typescript-eslint/explicit-module-boundary-types": "warn", // Force function return type
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }], // Ignore parameters starting with _

      "import/order": [
        "error",
        {
          groups: [
            "builtin", // Node.js built-in modules
            "external", // External modules (node_modules)
            "internal", // Custom internal modules
            ["parent", "sibling", "index"], // Relative path modules
          ],
          alphabetize: {
            order: "asc", // Sort in ascending alphabetical order
            caseInsensitive: true,
          },
          "newlines-between": "always",
        },
      ],
    },
  },
  {
    // Special rules for backend projects
    files: ["nestjs/src/**/*.ts", "src/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off", // Any type is allowed in the backend
    },
  },
  {
    // Special rules for frontend projects
    files: ["nextjs/src/**/*.ts", "nextjs/src/**/*.tsx"],
    rules: {
      "react/prop-types": "off", // Disable prop-types validation for React projects
    },
  },
];
