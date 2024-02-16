import { Module } from '@nestjs/common';
import { HelloResolver } from './api/hello.resolver';
import { ProductResolver } from './api/resolvers/product.resolver';
import { ProductService } from './api/services/product.service';

@Module({
  controllers: [],
  providers: [HelloResolver, ProductResolver, ProductService],
})
export class ProductModule {}
