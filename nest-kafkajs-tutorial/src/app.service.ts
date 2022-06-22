import { ProducerService } from './kafka/producer.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly producerService: ProducerService) {}
  async getHello(id: number) {
    await this.producerService.produce({
      topic: `hubId-${id.toString()}`,
      messages: [{ value: 'first value' }],
    });
    return 'Hello World!';
  }
}
