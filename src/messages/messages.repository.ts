import { readFile, writeFile } from 'fs/promises';

export class MessagesRepository {
  async findOne(id: string) {
    const contents = await readFile('message.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages[id];
  }
  async findAll() {
    console.log('to do something');
  }

  async create(message: string) {
    console.log('to do something');
  }
}
