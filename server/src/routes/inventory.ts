import express from 'express';
import { prisma } from '../db/prisma';

const inventoryRouter = express.Router();

inventoryRouter.get('/', async (_, res) => {
  res.json({ inventory: 'route' });
});

export default inventoryRouter;
