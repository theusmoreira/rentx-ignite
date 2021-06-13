import ICreateCategoryDTO from '../dtos/ICreateCategoryDTO';
import { Category } from '../model/Category';

export default interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create(data: ICreateCategoryDTO): void;
}
