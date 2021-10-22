import { IsNotEmpty } from 'class-validator';

export class SingInCredentialsDto {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  password: string;
}
