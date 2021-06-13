import { Request, Response, Router } from 'express';

import { SpecificationRepository } from '../modules/cars/repositories/SpecificationRepository';
import { CreateSpecificationService } from '../modules/cars/services/CreateSpecificationService';

const specificationsRoutes = Router();

const specificationRepository = new SpecificationRepository();

specificationsRoutes.post('/', (request: Request, response: Response) => {
  const { name, description } = request.body;

  const createSpecificationService = new CreateSpecificationService(
    specificationRepository,
  );

  try {
    createSpecificationService.execute({ name, description });
    return response.status(201).send();
  } catch (error) {
    return response.status(400).json(error);
  }
});

specificationsRoutes.get('/', (_, response: Response) => {
  const categories = specificationRepository.list();

  return response.json(categories);
});

export { specificationsRoutes };
