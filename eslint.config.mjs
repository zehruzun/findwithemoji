import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  // mevcut Next.js ve TypeScript extend’leri
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Prisma generated ve node_modules içindeki client dosyalarını ignore et
  {
    ignores: [
      "lib/generated/prisma/**",
      "node_modules/.prisma/**"
    ],
  },
];

export default eslintConfig;
