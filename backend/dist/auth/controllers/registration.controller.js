"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistrationController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const registration_dto_1 = require("../dto/registration.dto");
const registration_service_1 = require("../services/registration.service");
const common_response_dto_1 = require("../../common/common-response.dto");
let RegistrationController = class RegistrationController {
    constructor(registrationService) {
        this.registrationService = registrationService;
    }
    async register(createUserDto) {
        try {
            const res = await this.registrationService.register(createUserDto);
            return new common_response_dto_1.CommonResponse(common_1.HttpStatus.CREATED, 'Success', 'User registered successfully', res);
        }
        catch (error) {
            return new common_response_dto_1.CommonResponse(common_1.HttpStatus.BAD_REQUEST, 'error', 'Registration Failed', null, error.message);
        }
    }
};
exports.RegistrationController = RegistrationController;
__decorate([
    (0, common_1.Post)('register'),
    (0, swagger_1.ApiOperation)({ summary: 'Register a new user' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [registration_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], RegistrationController.prototype, "register", null);
exports.RegistrationController = RegistrationController = __decorate([
    (0, swagger_1.ApiTags)('auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [registration_service_1.RegistrationService])
], RegistrationController);
//# sourceMappingURL=registration.controller.js.map