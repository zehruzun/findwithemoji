import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // mevcut extend’ler
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // ignorePatterns ekle
  {
    ignores: ["lib/generated/prisma/**"],
  },
];

export default eslintConfig;
