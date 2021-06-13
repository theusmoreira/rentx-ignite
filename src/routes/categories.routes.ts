import { Request, Response, Router } from 'express';

import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

const categoriesRoutes = Router();

const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post('/', (request: Request, response: Response) =>
  createCategoryController.handle(request, response),
);

categoriesRoutes.get('/', (_, response: Response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRoutes };
