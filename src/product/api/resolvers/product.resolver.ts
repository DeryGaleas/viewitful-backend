import { Args, Int, Query, Mutation, Resolver } from '@nestjs/graphql';
import { ProductService } from '../services/product.service';
import { ProductType } from '../models/types/product.type';
import {
  CreateProductInput,
  UpdateProductInput,
} from '../models/inputs/product.input';

@Resolver()
export class ProductResolver {
  constructor(private ProductService: ProductService) {}

  @Query((returns) => ProductType, { name: 'product' })
  async getProduct(@Args('id', { type: () => Int }) id: number) {
    return this.ProductService.getProduct(id);
  }
  @Mutation((returns) => ProductType)
  async createProduct(@Args('input') input: CreateProductInput) {
    return this.ProductService.createProduct(input);
  }

  @Mutation((returns) => ProductType)
  async updateProduct(@Args('input') input: UpdateProductInput) {
    return this.ProductService.updateProduct(input);
  }

  @Mutation((returns) => ProductType)
  async deleteProduct(@Args('id', { type: () => Int }) id: number) {
    return this.ProductService.deleteProduct(id);
  }
}
