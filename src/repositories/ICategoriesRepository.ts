import { Category } from '../model/Category';
import ICreateCategoryDTO from './dtos/ICreateCategoryDTO';

export default interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create(data: ICreateCategoryDTO): void;
}
