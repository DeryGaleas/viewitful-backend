import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../../prisma.service';

@Injectable()
export class ProductService {
  constructor(private prisma: PrismaService) {}

  async getUser(id: number) {
    console.log('This is the id argument: ', id);
    const product = await this.prisma.product.create({
      data: {
        name: 'Product Test22',
        description: 'Second Description test 0..1',
      },
    });
    return product;
  }
}
