import { Injectable } from '@nestjs/common';
import { CreateEnergyPriceDto } from './dto/create-energy-price.dto';
import { UpdateEnergyPriceDto } from './dto/update-energy-price.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EnergyPriceRepository } from './energy-price.repository';

@Injectable()
export class EnergyPriceService {
  constructor(
    @InjectRepository(EnergyPriceRepository)
    private energyPriceRepository: EnergyPriceRepository,
  ) {}

  createEnergyPrice(createEnergyPriceDto: CreateEnergyPriceDto) {
    return this.energyPriceRepository.createEnergyPrice(createEnergyPriceDto);
  }

  findAll() {
    return `This action returns all energyPrice`;
  }

  findOne(id: number) {
    return `This action returns a #${id} energyPrice`;
  }

  update(id: number, updateEnergyPriceDto: UpdateEnergyPriceDto) {
    return `This action updates a #${id} energyPrice`;
  }

  remove(id: number) {
    return `This action removes a #${id} energyPrice`;
  }
}
