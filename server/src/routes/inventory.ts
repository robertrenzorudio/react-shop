import express from 'express';
import { prisma } from '../db/prisma';

const inventoryRouter = express.Router();

inventoryRouter.get('/', async (_, res) => {
  const inventory = await prisma.inventory.findMany();
  res.json({ inventory });
});

export default inventoryRouter;
