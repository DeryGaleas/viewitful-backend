import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';
import {
  CreateProductInput,
  UpdateProductInput,
} from '../models/inputs/product.input';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async createProduct(input: CreateProductInput) {
    const newProduct = await this.prisma.product.create({
      data: {
        name: input.name,
        description: input.description,
      },
    });
    return newProduct;
  }

  async getProduct(id: number) {
    const retrievedProduct = await this.prisma.product.findUnique({
      where: {
        id: id,
      },
    });
    return retrievedProduct;
  }

  async updateProduct(input: UpdateProductInput) {
    const updatedProduct = this.prisma.product.update({
      where: {
        id: input.id,
      },
      data: {
        ...input,
      },
    });
    return updatedProduct;
  }

  async deleteProduct(id: number) {
    const deletedProduct = this.prisma.product.delete({
      where: {
        id: id,
      },
    });
    console.log(deletedProduct);
    return deletedProduct;
  }
}
