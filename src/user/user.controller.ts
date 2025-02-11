import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) {}

    @Post('createUser')
    async createUser(@Body() createUserDto: CreateUserDto) {
        return { message: 'User created successfully', data: createUserDto };
    }
        
    
}
