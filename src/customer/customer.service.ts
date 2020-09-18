import { Injectable, Logger, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private customerRepository: Repository<CustomerEntity>,
  ) {}

  add(customer: CustomerEntity) {
    this.customerRepository.insert(customer);
    this.customerRepository.find().then(customers => Logger.log(customers));
  }

  async getCustomer(id: string) {
    return await this.customerRepository.find({
      select: ['fullName', 'birthday', 'isActive'],
      where: [{ id }],
    });
  }

  async getCustomers() {
    return await this.customerRepository.find().then(customers => {
      if (!customers.length) {
        throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
      }
    });
  }
}
