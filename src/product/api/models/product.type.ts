import { Field, Int, ObjectType } from '@nestjs/graphql';
import { CategoryType } from './category.type';

@ObjectType()
export class ProductType {
  @Field((type) => Int)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field((type) => [CategoryType])
  categories: CategoryType[];
}
