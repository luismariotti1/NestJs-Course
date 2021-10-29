import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EnergyPriceService } from './energy-price.service';
import { CreateEnergyPriceDto } from './dto/create-energy-price.dto';
import { UpdateEnergyPriceDto } from './dto/update-energy-price.dto';

@Controller('energy-price')
export class EnergyPriceController {
  constructor(private readonly energyPriceService: EnergyPriceService) {}

  @Post()
  createEnergyPrice(@Body() createEnergyPriceDto: CreateEnergyPriceDto) {
    return this.energyPriceService.createEnergyPrice(createEnergyPriceDto);
  }

  @Get()
  findAll() {
    return this.energyPriceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.energyPriceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateEnergyPriceDto: UpdateEnergyPriceDto,
  ) {
    return this.energyPriceService.update(+id, updateEnergyPriceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.energyPriceService.remove(+id);
  }
}
