import { Module, Logger } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerModule } from './customer/customer.module';
import { CustomerEntity } from './customer/customer.entity';
import { Connection } from 'typeorm';
import { FeeModule } from './fee/fee.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'admin',
      database: 'customer_list',
      entities: [CustomerEntity],
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
