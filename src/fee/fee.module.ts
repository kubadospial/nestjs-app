import { Module } from '@nestjs/common';
import { FeeController } from './fee/fee.controller';

@Module({
  controllers: [FeeController]
})
export class FeeModule {}
