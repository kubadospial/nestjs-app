import { Module } from '@nestjs/common';
import { FeeController } from './controller/fee.controller';
import { FeeService } from './service/fee.service';

@Module({
  controllers: [FeeController],
  providers: [FeeService],
})
export class FeeModule {}
