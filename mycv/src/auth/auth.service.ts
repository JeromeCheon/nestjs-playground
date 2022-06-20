import { UserDto } from './dto/signInUp.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signUp(userDto: UserDto) {
    // sign Up with new email and password
    // make sure existing user validation is necessary
    console.log(userDto.email, userDto.password);
  }
  signIn(userDto: UserDto) {
    // sign in with existing email and password
    // make sure comparing email with db info is necessary
    console.log(userDto.email, userDto.password);
  }
}
