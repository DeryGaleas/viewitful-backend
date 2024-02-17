import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateCategoryInput {
  @Field()
  categoryName: string;
}

@InputType()
export class UpdateCategoryInput extends PartialType(CreateCategoryInput) {
  @Field((type) => Int)
  id: number;
}
