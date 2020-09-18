import {
  Controller,
  Get,
  Param,
  Req,
  Res,
  HttpStatus,
  Query,
  Post,
  Body,
  HttpException,
  Delete,
  Logger,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { of } from 'rxjs';
import { CustomerService } from './customer.service';
// import { CustomerEntity } from './customer.entity';

@Controller('customer')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  // @Get()
  // getAllCustomers() {
  //   return this.customerService.getCustomers();
  // }

  // @Get(':id')
  // getCustomer(@Param('id') id: string, @Res() response: Response) {
  //   // const customer = this.customerService.getCustomer(id);
  //   // if (!customer.length) {
  //   //   throw new HttpException('Forbidden', HttpStatus.NOT_FOUND);
  //   // }
  //   response.status(HttpStatus.OK).json(this.customerService.getCustomer(id));
  // }

  // @Post()
  // addCustomer(@Body() body: CustomerEntity) {
  //   return this.customerService.add(body);
  // }

  @Delete()
  removeCustomer() {}
}
