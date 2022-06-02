import { PowerService } from './power.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class RegulatorService {
  constructor(private readonly powerService: PowerService) {}
  regulatePower() {
    console.log('hello');
  }
}
