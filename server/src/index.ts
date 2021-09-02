import dotenv from 'dotenv';
import express from 'express';
import { prisma } from './db/prisma';
import inventoryRouter from './routes/inventory';

dotenv.config({ path: '.env.dev' });

const main = async () => {
  const app = express();

  app.use('/assets', express.static('public/inventory'));
  app.use('/inventory', inventoryRouter);

  app.get('/', (_, res) => {
    res.send('hello world');
  });

  const port = process.env.PORT || 4000;
  app.listen(port, () => {
    console.log(`Server ready at: http://localhost:${port}`);
  });
};

main()
  .catch((err) => {
    console.log(err.message);
  })
  .finally(() => prisma.$disconnect());
