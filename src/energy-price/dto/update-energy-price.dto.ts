import { PartialType } from '@nestjs/mapped-types';
import { CreateEnergyPriceDto } from './create-energy-price.dto';

export class UpdateEnergyPriceDto extends PartialType(CreateEnergyPriceDto) {}
