import { DiskService } from './../disk/disk.service';
import { CpuService } from './../cpu/cpu.service';
import { Controller, Get } from '@nestjs/common';

@Controller('computer')
export class ComputerController {
  constructor(
    private readonly cpuService: CpuService,
    private readonly diskService: DiskService,
  ) {}
  @Get()
  run() {
    return [this.cpuService.compute(10, 20), this.diskService.getData()];
  }
}
