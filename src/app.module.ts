import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { Connection } from 'typeorm';
import { FeeModule } from './fee/fee.module';
import { FeeEntity } from './fee/entity/fee.entity';
import { CustomerEntity } from './customer/customer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'fee',
      entities: [FeeEntity, CustomerEntity],
      synchronize: true,
    }),
    CustomerModule,
    FeeModule,
  ],
})
export class AppModule {
  constructor(private connection: Connection) {
    // setTimeout(() => {
    //   const a = this.connection
    //     .createEntityManager()
    //     .getRepository(CustomerEntity);
    //   a.find().then(e => {
    //     Logger.log(e, 'TEST');
    //   });
    // }, 2000);
  }
}
