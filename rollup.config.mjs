import typescript from "@rollup/plugin-typescript"
import { defineConfig } from "rollup"
import del from "rollup-plugin-delete"
import dts from "rollup-plugin-dts"

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/index.cjs",
        format: "cjs",
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
