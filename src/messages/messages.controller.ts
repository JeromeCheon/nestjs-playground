import { Controller, Get, Post } from '@nestjs/common';

@Controller('/messages')
export class MessagesController {
  @Get()
  listMessages() {
    console.log('just list');
  }

  @Post()
  createMessage() {
    // to do something
  }

  @Get('/:id')
  getMessage() {
    // to do something
  }
}
