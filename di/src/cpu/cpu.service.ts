import { PowerService } from './../power/power.service';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CpuService {
  constructor(private readonly powerService: PowerService) {}
  compute(a: number, b: number) {
    console.log('Drawing 10 watts of power from Power Service');
    this.powerService.supplyPower(10);
    return a + b;
  }
}
