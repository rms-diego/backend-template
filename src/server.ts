import { app } from '@/app';
import { env } from '@/utils/env';

async function main() {
  app.listen({ port: env.PORT }, () => console.log('aoba'));
}

main();
