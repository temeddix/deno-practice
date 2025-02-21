import { build, stop } from "@lib/esbuild";
import { denoPlugins } from "@lib/esbuild-deno";

const configPath = await Deno.realPath("./deno.json");
build({
  plugins: [...denoPlugins({ configPath: configPath })],
  entryPoints: ["src/main.ts"],
  outdir: "dist/",
  bundle: true,
  platform: "browser",
  format: "esm",
  target: "esnext",
  minify: true,
  sourcemap: true,
  treeShaking: true,
});
await stop();
