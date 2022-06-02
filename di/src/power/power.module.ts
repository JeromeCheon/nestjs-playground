import { Module } from '@nestjs/common';
import { PowerService } from './power.service';
import { RegulatorService } from './regulator.service';

@Module({
  providers: [PowerService, RegulatorService],
  exports: [PowerService],
})
export class PowerModule {}
