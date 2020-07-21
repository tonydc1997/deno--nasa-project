import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";

const app = new Application();
const PORT = 8000;

app.use((context) => {
  context.response.body = `Hello World!`;
});

app.listen({
  port: PORT,
});
