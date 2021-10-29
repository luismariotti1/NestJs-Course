import { Module } from '@nestjs/common';
import { EnergyPriceService } from './energy-price.service';
import { EnergyPriceController } from './energy-price.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnergyPriceRepository } from './energy-price.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EnergyPriceRepository])],
  controllers: [EnergyPriceController],
  providers: [EnergyPriceService],
})
export class EnergyPriceModule {}
