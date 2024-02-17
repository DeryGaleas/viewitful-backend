import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CategoryType {
  @Field((type) => Int)
  id: number;

  @Field()
  categoryName: string;

  @Field({ nullable: true })
  parentCategory?: CategoryType;

  @Field((type) => [CategoryType])
  childCategories?: CategoryType[];
}
