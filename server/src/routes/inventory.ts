import express from 'express';

const inventoryRouter = express.Router();

inventoryRouter.get('/', async (_, res) => {
  res.json({ inventory: 'route' });
});

export default inventoryRouter;
