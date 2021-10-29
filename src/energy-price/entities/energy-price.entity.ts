import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class EnergyPrice {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  companyName: string;

  @Column()
  month: string;

  @Column()
  group: string;

  @Column({ type: 'numeric' })
  valueKWH: number;

  @Column()
  flagType: string;

  @Column({ type: 'numeric' })
  valueKWHFlag: number;
}
