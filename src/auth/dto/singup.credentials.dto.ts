import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class SingUpCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  @Matches(/[^A-Za-z0-9]/, {
    message: 'password must contain special character',
  })
  @Matches(/(?=.*[a-z])/, {
    message: 'password must contain lower case character',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'password must contain upper case character',
  })
  password: string;
}
