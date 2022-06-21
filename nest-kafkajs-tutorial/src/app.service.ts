import { ProducerService } from './kafka/producer.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  async getHello() {
    await this.producerService.produce({
      topic: 'test',
      messages: [{ value: 'first value' }],
    });
    return 'Hello World!';
  }
}
