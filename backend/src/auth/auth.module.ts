import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { RegistrationController } from './controllers/registration.controller';
import { RegistrationService } from './services/registration.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [RegistrationService],
  controllers: [RegistrationController],
  exports: [RegistrationService],
})
export class AuthModule {}
