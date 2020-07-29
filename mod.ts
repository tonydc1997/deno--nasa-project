import { Application } from "https://deno.land/x/oak@v6.0.1/mod.ts";

const app = new Application();
const PORT = 8000;

app.use(async (context, next) => {});

app.use((context) => {
  context.response.body = `Hello World!`;
});

if (import.meta.main) {
  app.listen({
    port: PORT,
  });
}
