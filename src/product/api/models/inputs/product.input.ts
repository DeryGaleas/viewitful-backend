import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;
}

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field((type) => Int)
  id: number;
}
