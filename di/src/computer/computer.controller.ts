import { Controller } from '@nestjs/common';

@Controller('computer')
export class ComputerController {
  run() {
    console.log(`running`);
  }
}
