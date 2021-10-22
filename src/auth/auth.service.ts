import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersRepository } from './users.repository';
import { SingUpCredentialsDto } from './dto/singup.credentials.dto';
import { SingInCredentialsDto } from './dto/singin.credentials.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UsersRepository)
    private usersRepository: UsersRepository,
  ) {}

  async singUp(singUpCredentialsDto: SingUpCredentialsDto): Promise<void> {
    return this.usersRepository.createUser(singUpCredentialsDto);
  }

  async singIn(singInCredentialsDto: SingInCredentialsDto): Promise<string> {
    const { password, username } = singInCredentialsDto;
    const user = await this.usersRepository.findOne({ username });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'success';
    } else {
      throw new UnauthorizedException('Please check for your login');
    }
  }
}
