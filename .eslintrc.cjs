/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  ignorePatterns: ["next.config.js", "public/", "assets/", "stylesheets/"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
  },
  // env: {
  //   browser: true,
  //   es2021: true,
  //   node: true,
  // },
  extends: ["eslint:recommended", "prettier", "next/core-web-vitals", "plugin:prettier/recommended"],
  plugins: ["prettier", "no-relative-import-paths", "import", "unused-imports"],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser",
      excludedFiles: ["*.test.ts"],
      plugins: ["@typescript-eslint"],
      extends: ["plugin:@typescript-eslint/recommended"],
      rules: {
        "unused-imports/no-unused-vars": ["off"],
        // "@typescript-eslint/no-unused-vars": [
        //   "error",
        //   {
        //     varsIgnorePattern: "[^_]",
        //     argsIgnorePattern: "[^_]",
        //   },
        // ],
        "@typescript-eslint/consistent-type-imports": [
          "warn",
          {
            prefer: "type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
        "no-unused-vars": 0,
        "@typescript-eslint/no-empty-function": 0,
        "@typescript-eslint/explicit-module-boundary-types": 0,
        "@typescript-eslint/ban-ts-comment": 0,
        "@typescript-eslint/ban-types": [
          "error",
          {
            types: {
              String: {
                message: "Use string instead",
                fixWith: "string",
              },
              "{}": {
                message: "Use object instead",
                fixWith: "object",
              },
            },
          },
        ],
      },
    },
  ],
  rules: {
    "@typescript-eslint/consistent-type-assertions": [
      "warn",
      {
        assertionStyle: "as",
        objectLiteralTypeAssertions: "never",
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "next/image",
            message: "Please use custom `NextImage` component instead.",
          },
          {
            name: "next/link",
            message: "Please use custom `NextLink` component instead.",
          },
          "@iconify/react",
          {
            name: "next/navigation",
            importNames: ["useRouter"],
            message: "Please use useNextRouter from `useNextRouter.ts` instead.",
          },
        ],
      },
    ],
    "no-relative-import-paths/no-relative-import-paths": ["error", { allowSameFolder: true }],
    "import/no-default-export": "error",
    "react/jsx-fragments": ["warn", "syntax"], // Shorthand syntax for React fragments
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn", // Checks effect dependencies
    "no-unused-vars": [
      "error",
      {
        varsIgnorePattern: "[^_]",
        argsIgnorePattern: "^_",
      },
    ],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "error",
      { vars: "all", varsIgnorePattern: "^_", args: "after-used", argsIgnorePattern: "^_" },
    ],
    "no-console": (process.env.NODE_ENV || "development") === "development" ? "warn" : "error",
    "no-debugger": (process.env.NODE_ENV || "development") === "development" ? "warn" : "error",
    "no-process-env": "error",
  },
}
module.exports = config;