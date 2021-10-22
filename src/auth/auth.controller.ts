import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingUpCredentialsDto } from './dto/singup.credentials.dto';
import { SingInCredentialsDto } from './dto/singin.credentials.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/singup')
  singUp(@Body() singUpCredentialsDto: SingUpCredentialsDto): Promise<void> {
    return this.authService.singUp(singUpCredentialsDto);
  }

  @Post('/singin')
  singIn(
    @Body() singInCredentialsDto: SingInCredentialsDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.singIn(singInCredentialsDto);
  }
}
