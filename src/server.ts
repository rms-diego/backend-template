import { app } from "./app";
import { env } from "./env";

app.listen({ port: env.PORT }, (_error, address) => {
  console.log(`\nserver is running on port: ${env.PORT}\nlink: ${address}`);
});
