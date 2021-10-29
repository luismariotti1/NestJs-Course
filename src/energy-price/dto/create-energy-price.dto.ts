import { IsNotEmpty } from 'class-validator';

export class CreateEnergyPriceDto {
  @IsNotEmpty()
  companyName: string;
}
