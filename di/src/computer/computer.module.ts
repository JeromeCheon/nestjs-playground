import { DiskModule } from './../disk/disk.module';
import { CpuModule } from './../cpu/cpu.module';
import { ComputerController } from './computer.controller';
import { Module } from '@nestjs/common';

@Module({
  imports: [CpuModule, DiskModule],
  controllers: [ComputerController],
})
export class ComputerModule {}
