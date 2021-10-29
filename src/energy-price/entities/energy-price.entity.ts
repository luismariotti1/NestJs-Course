import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EnergyPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyName: string;
}
