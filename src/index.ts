import { serve } from "https://deno.land/x/std/http/mod.ts";
const addr = '0.0.0.0:8000'
const s = serve(addr);

async function main() {
  console.log("listening on", addr);
  for await (const req of s) {
    req.respond({ body: new TextEncoder().encode("Hello World\n") });
  }
}

main();
