import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'fee' })
export class FeeEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  birthday: Date;

  @Column()
  isActive: boolean;
}
