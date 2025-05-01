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
exports.CommonResponse = void 0;
const swagger_1 = require("@nestjs/swagger");
class CommonResponse {
    constructor(statusCode, status, message, data, error) {
        this.statusCode = statusCode;
        this.status = status;
        this.message = message;
        this.data = data;
        this.error = error;
    }
}
exports.CommonResponse = CommonResponse;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'HTTP Status Code' }),
    __metadata("design:type", Number)
], CommonResponse.prototype, "statusCode", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Status of the response' }),
    __metadata("design:type", String)
], CommonResponse.prototype, "status", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Message describing the response' }),
    __metadata("design:type", String)
], CommonResponse.prototype, "message", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'The data returned by the API' }),
    __metadata("design:type", Object)
], CommonResponse.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Any error details, if applicable',
        required: false,
    }),
    __metadata("design:type", String)
], CommonResponse.prototype, "error", void 0);
//# sourceMappingURL=common-response.dto.js.map