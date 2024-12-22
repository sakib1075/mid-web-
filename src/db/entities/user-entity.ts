import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user')
export class UserEntity{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'varchar', length: 200})
    name: string

    @Column({type: 'varchar', length: 100})
    email: string
    
    @Column({type: 'varchar', length: 100})
    password: string

    @Column({type : 'varchar', length: 11})
    mobile: string

    @Column({type : 'varchar', length: 200})
    gender: string

    @Column({type : "timestamptz"})
    date_of_birth: Date
}