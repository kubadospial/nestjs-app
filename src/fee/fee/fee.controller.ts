import { Controller, Get } from '@nestjs/common';
import { of } from 'rxjs';

@Controller('fee')
export class FeeController {
  articleFee = {
    basic: { amount: 'test', value: 100, base: 12 },
    pro: { amount: 'test', value: 100, base: 12 },
    articleType: 'xxccxxxsd',
  };

  @Get('domain-fee')
  domainFee() {
    return of({
      basic: { amount: 'test', value: 100, base: 12 },
      pro: { amount: 'test', value: 100, base: 12 },
      domainCode: 'ch',
    });
  }

  @Get('article-fee-list')
  articleFeeList() {
    return of({
      result: [
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
        this.articleFee,
      ],
      size: 25,
    });
  }
}
