import { DataSource } from 'typeorm';
import { CreateUserDto } from './dto/create.user.dto';
import { UserEntity } from 'src/db/entities/user-entity';
export declare class UserService {
    private datasource;
    private manager;
    constructor(datasource: DataSource);
    createUser(data: CreateUserDto): Promise<{
        message: string;
        createUser: UserEntity;
    }>;
}
