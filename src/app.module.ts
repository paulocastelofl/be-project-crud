import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './components/users/users.module';
import { TypeUsersModule } from './components/type-users/type-users.module';

@Module({
  imports: [UsersModule, TypeUsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
