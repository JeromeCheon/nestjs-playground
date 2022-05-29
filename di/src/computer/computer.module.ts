import { ComputerController } from './computer.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [ComputerController],
})
export class ComputerModule {}
