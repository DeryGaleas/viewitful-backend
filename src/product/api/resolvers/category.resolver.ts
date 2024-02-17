import { Args, Int, Query, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateProductInput } from '../models/inputs/product.input';
import { CategoryService } from '../services/category.service';
import { CategoryType } from '../models/types/category.type';
import { CreateCategoryInput } from '../models/inputs/category.input';

@Resolver()
export class CategoryResolver {
  constructor(private CategoryService: CategoryService) {}

  @Query((returns) => CategoryType, { name: 'category' })
  async getCategory(@Args('id', { type: () => Int }) id: number) {
    return this.CategoryService.getCategory(id);
  }
  @Mutation((returns) => CategoryType)
  async createCategory(@Args('input') input: CreateCategoryInput) {
    return this.CategoryService.createCategory(input);
  }

  @Mutation((returns) => CategoryType)
  async updateCategory(@Args('input') input: UpdateProductInput) {
    return this.CategoryService.updateCategory(input);
  }

  @Mutation((returns) => CategoryType)
  async deleteCategory(@Args('id', { type: () => Int }) id: number) {
    return this.CategoryService.deleteCategory(id);
  }
}
