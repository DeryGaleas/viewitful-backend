import { Args, Int, Query, Mutation, Resolver } from '@nestjs/graphql';
import { ProductService } from '../services/product.service';
import { ProductType } from '../models/product.type';
@Resolver()
export class ProductResolver {
  constructor(private ProductService: ProductService) {}
  @Mutation((returns) => String, { name: 'product' })
  async getProduct(@Args('name, description', { type: () => Int }) id: number) {
    this.ProductService.getUser(id);
    return 'succes';
  }
}
