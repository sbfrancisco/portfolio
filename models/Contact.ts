import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export class Contact extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column()
  name!: string

  @Column()
  email!: string
}