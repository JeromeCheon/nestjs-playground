import { UserDto } from './UserDto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signUp(userDto: UserDto) {
    console.log(userDto.email, userDto.password);
  }
  signIn(userDto: UserDto) {
    console.log(userDto.email, userDto.password);
  }
}
