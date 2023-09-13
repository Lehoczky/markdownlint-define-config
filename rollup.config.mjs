import { defineConfig } from "rollup"
import typescript from "@rollup/plugin-typescript"
import dts from "rollup-plugin-dts"
import del from "rollup-plugin-delete"

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
      },
      {
        file: "dist/index.mjs",
        format: "esm",
      },
    ],
    plugins: [
      del({ targets: "dist/*" }),
      typescript({
        noEmitOnError: true,
        include: ["src/**/*"],
        tsconfig: "./tsconfig.json",
      }),
    ],
  },
  {
    input: "./dist/types/index.d.ts",
    output: [
      {
        file: "dist/index.d.ts",
      },
    ],
    plugins: [
      dts(),
      del({
        hook: "buildEnd",
        targets: "./dist/types",
      }),
    ],
  },
])
