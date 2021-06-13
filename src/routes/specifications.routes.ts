import { Request, Response, Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { listSpecificationsController } from '../modules/cars/useCases/listSpecifications';

const specificationsRoutes = Router();

specificationsRoutes.post('/', (request: Request, response: Response) =>
  createSpecificationController.handle(request, response),
);

specificationsRoutes.get('/', (request: Request, response: Response) =>
  listSpecificationsController.handle(request, response),
);

export { specificationsRoutes };
