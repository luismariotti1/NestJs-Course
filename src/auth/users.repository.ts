import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { SingUpCredentialsDto } from './dto/singup.credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(UserEntity)
export class UsersRepository extends Repository<UserEntity> {
  async createUser(singUpCredentialsDto: SingUpCredentialsDto): Promise<void> {
    const { username, password } = singUpCredentialsDto;

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ username, password: hashedPassword });
    try {
      await this.save(user);
    } catch (e) {
      if (e.code === '23505') {
        throw new ConflictException('User name already Exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }

  async findUserWithPassword(
    singUpCredentialsDto: SingUpCredentialsDto,
  ): Promise<UserEntity> {
    const { username } = singUpCredentialsDto;

    const query = this.createQueryBuilder('user');

    const user = await query
      .andWhere('user.username = :username', { username })
      .addSelect('user.password')
      .getOne();

    if (user) {
      return user;
    } else {
      throw new UnauthorizedException('Please check for your login');
    }
  }
}
