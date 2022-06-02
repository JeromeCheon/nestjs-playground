import { PowerService } from './../power/power.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}
  getData() {
    console.log('Drawing 20 watts of power from PowerService');
    this.powerService.supplyPower(20);
  }
}
