import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { SingUpCredentialsDto } from './dto/singup.credentials.dto';
import { SingInCredentialsDto } from './dto/singin.credentials.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './jwt-payload';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
    private jwtService: JwtService,
  ) {}

  async singUp(singUpCredentialsDto: SingUpCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(singUpCredentialsDto);
  }

  async singIn(singInCredentialsDto: SingInCredentialsDto) {
    const user = await this.usersRepository.findUserWithPassword(
      singInCredentialsDto,
    );

    const { username, password } = singInCredentialsDto;

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload: JwtPayload = { username };
      const accessToken: string = this.jwtService.sign(payload);
      return { accessToken };
    } else {
      throw new UnauthorizedException('Please check for your login');
    }
  }
}
