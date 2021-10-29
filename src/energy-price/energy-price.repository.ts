import { EnergyPrice } from './entities/energy-price.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateEnergyPriceDto } from './dto/create-energy-price.dto';

@EntityRepository(EnergyPrice)
export class EnergyPriceRepository extends Repository<EnergyPrice> {
  async createEnergyPrice(createEnergyPriceDto: CreateEnergyPriceDto) {
    const { companyName } = createEnergyPriceDto;

    const energyPrice = this.create({
      companyName,
    });

    await this.save(energyPrice);

    return energyPrice;
  }
}
