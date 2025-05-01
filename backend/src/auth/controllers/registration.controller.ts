import { Controller, HttpStatus, Post } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateUserDto } from '../dto/registration.dto';
import { RegistrationService } from '../services/registration.service';
import { CommonResponse } from 'src/common/common-response.dto';

@ApiTags('auth')
@Controller('auth')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}
  @Post('register')
  @ApiOperation({ summary: 'Register a new user' })
  async register(createUserDto: CreateUserDto) {
    try {
      const res = await this.registrationService.register(createUserDto);
      return new CommonResponse(
        HttpStatus.CREATED,
        'Success',
        'User registered successfully',
        res,
      );
    } catch (error) {
      return new CommonResponse(
        HttpStatus.BAD_REQUEST, // HTTP Status Code
        'error', // Response status
        'Registration Failed', // Message
        null, // Data
        error.message, // Error message
      );
    }
  }
}
