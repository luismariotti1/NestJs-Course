import { IsNotEmpty } from 'class-validator';

export class CreateEnergyPriceDto {
  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  month: string;

  @IsNotEmpty()
  group: string;

  @IsNotEmpty()
  valueKWH;

  @IsNotEmpty()
  flagType: string;

  @IsNotEmpty()
  valueKWHFlag: number;
}
