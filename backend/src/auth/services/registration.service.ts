import { Injectable } from '@nestjs/common';

@Injectable()
export class RegistrationService {
  async register(createUserDto: any): Promise<any> {
    // Simulate user registration logic
    return {
      message: 'User registered successfully',
      user: createUserDto,
    };
  }
}
