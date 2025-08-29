import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

console.log("Starting server on http://localhost:8000");
console.log("Open your browser and navigate to http://localhost:8000");

Deno.serve({ port: 8000 }, (req) => {
  return serveDir(req, {
    fsRoot: "./dist",
    urlRoot: "",
    enableCors: true,
  });
});
