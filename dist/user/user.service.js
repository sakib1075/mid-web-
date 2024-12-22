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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../db/entities/user-entity");
let UserService = class UserService {
    constructor(datasource) {
        this.datasource = datasource;
        this.manager = this.datasource.manager;
    }
    async createUser(data) {
        try {
            const user = await this.manager.findOneBy(user_entity_1.UserEntity, { email: data.email });
            if (user) {
                throw new Error('User is already exists, go to login');
            }
            const createUser = await this.manager.create(user_entity_1.UserEntity, {
                email: data.email,
                name: data.name,
                mobile: data.mobile,
                gender: data.gender,
                date_of_birth: data.date_of_birth
            });
            await this.manager.save(user_entity_1.UserEntity, createUser);
            return { message: 'user created successfully', createUser };
        }
        catch (error) {
            throw new common_1.NotFoundException(`${error.message}`);
        }
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DataSource')),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], UserService);
//# sourceMappingURL=user.service.js.map