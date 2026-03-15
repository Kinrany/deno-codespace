import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  // Serve static files from the frontend/dist directory
  const url = new URL(req.url);
  if (url.pathname.startsWith("/assets") || url.pathname.endsWith(".js") || url.pathname.endsWith(".css") || url.pathname.endsWith(".ico") || url.pathname.endsWith(".png") || url.pathname.endsWith(".svg")) {
    try {
      const file = await Deno.readFile(`frontend/dist${url.pathname}`);
      return new Response(file);
    } catch {
      return new Response("Not found", { status: 404 });
    }
  }

  // Serve index.html for all other routes (SPA)
  try {
    const file = await Deno.readFile("frontend/dist/index.html");
    return new Response(file, { headers: { "content-type": "text/html" } });
  } catch {
    return new Response("index.html not found", { status: 500 });
  }
}, { port: 8000 });
