import { Body, Controller, Post, Res, Get} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingUpCredentialsDto } from './dto/singup.credentials.dto';
import { SingInCredentialsDto } from './dto/singin.credentials.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/singup')
  singUp(@Body() singUpCredentialsDto: SingUpCredentialsDto): Promise<void> {
    return this.authService.singUp(singUpCredentialsDto);
  }

  // @Get('/singout')
  // singOut(): Promise<void> {
  //   // return this.authService.singUp(singUpCredentialsDto);
  // }

  @Post('/singin')
  async singIn(
    @Body() singInCredentialsDto: SingInCredentialsDto,
    @Res() response: Response,
  ) {
    const token = await this.authService.singIn(singInCredentialsDto);
    response
      .status(200)
      .cookie('auth', token, {
        expires: new Date(new Date().getTime() + 30 * 1000),
        sameSite: 'strict',
        httpOnly: true,
      })
      .send({ success: true });
  }
}
