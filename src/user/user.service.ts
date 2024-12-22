import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { UserEntity } from 'src/db/entities/user-entity';
import { IsMobilePhone } from 'class-validator';

@Injectable()
export class UserService {
    private manager: EntityManager
    constructor(
        @Inject('DataSource')
        private datasource: DataSource
    ){
        this.manager = this.datasource.manager;
    }

    // create user
    async createUser(data: CreateUserDto){
        try{
            const user = await this.manager.findOneBy(UserEntity,{email: data.email})

            if(user){
                throw new Error ('User is already exists, go to login')
            }

            const createUser = await this.manager.create(UserEntity, {
                email: data.email,
                name: data.name,
                mobile: data.mobile,
                gender: data.gender,
                date_of_birth: data.date_of_birth

            })

            await this.manager.save(UserEntity, createUser)

            return {message: 'user created successfully', createUser}
        }catch(error){
            throw new NotFoundException(`${error.message}`)
        }
    }

    // update user

    // delete user

    //getAll user

    //getUser by id
}
