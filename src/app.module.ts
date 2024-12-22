import { Module } from '@nestjs/common';
import { DbModule } from './db/db.module';
import { ConfigModule } from '@nestjs/config';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';

@Module({
  imports: [DbModule, ConfigModule.forRoot({ isGlobal: true}), UserModule],
  controllers: [ UserController],
  providers: [UserService],
})
export class AppModule {}
