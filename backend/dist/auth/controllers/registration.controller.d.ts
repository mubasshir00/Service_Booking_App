import { CreateUserDto } from '../dto/registration.dto';
import { RegistrationService } from '../services/registration.service';
import { CommonResponse } from 'src/common/common-response.dto';
export declare class RegistrationController {
    private readonly registrationService;
    constructor(registrationService: RegistrationService);
    register(createUserDto: CreateUserDto): Promise<CommonResponse<any>>;
}
