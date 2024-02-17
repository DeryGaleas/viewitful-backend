import { Module } from '@nestjs/common';

import { ProductResolver } from './api/resolvers/product.resolver';
import { ProductService } from './api/services/product.service';
import { CategoryResolver } from './api/resolvers/category.resolver';
import { CategoryService } from './api/services/category.service';

@Module({
  controllers: [],
  providers: [
    ProductResolver,
    ProductService,
    CategoryResolver,
    CategoryService,
  ],
})
export class ProductModule {}
