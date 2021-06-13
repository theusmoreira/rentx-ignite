import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstances();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

const createCategoryController = new CreateCategoryController(
  createCategoryUseCase,
);

export { createCategoryController };
