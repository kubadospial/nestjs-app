import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeeController } from './controller/fee.controller';
import { FeeEntity } from './entity/fee.entity';
import { FeeService } from './service/fee.service';

@Module({
  imports: [TypeOrmModule.forFeature([FeeEntity])],
  controllers: [FeeController],
  providers: [FeeService],
})
export class FeeModule {}
