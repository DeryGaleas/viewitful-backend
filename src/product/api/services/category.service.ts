import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import {
  CreateCategoryInput,
  UpdateCategoryInput,
} from '../models/inputs/category.input';

@Injectable()
export class CategoryService {
  constructor(private prisma: PrismaService) {}

  async createCategory(input: CreateCategoryInput) {
    const newCategory = await this.prisma.category.create({
      data: {
        categoryName: input.categoryName,
      },
    });
    return newCategory;
  }

  async getCategory(id: number) {
    const retrievedCategory = await this.prisma.category.findUnique({
      where: {
        id: id,
      },
    });
    return retrievedCategory;
  }

  async updateCategory(input: UpdateCategoryInput) {
    const updatedCategory = this.prisma.category.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
      },
    });
    return updatedCategory;
  }

  async deleteCategory(id: number) {
    const deletedCategory = this.prisma.category.delete({
      where: {
        id: id,
      },
    });
    return deletedCategory;
  }
}
