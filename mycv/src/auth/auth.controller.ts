import { UserDto } from './dto/signInUp.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/signup')
  signUp(@Body() userDto: UserDto) {
    this.authService.signUp(userDto);
  }

  @Post('/signin')
  signIn(@Body() userDto: UserDto) {
    this.authService.signIn(userDto);
  }
}
