import ICreateSpecificationDTO from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../model/Specification';

export default interface ISpecificationRepository {
  findByName(name: string): Specification;
  list(): Specification[];
  create(data: ICreateSpecificationDTO): void;
}
