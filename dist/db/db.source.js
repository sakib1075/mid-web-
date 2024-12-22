"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbConnection = void 0;
const config_1 = require("@nestjs/config");
const typeorm_1 = require("typeorm");
const user_entity_1 = require("./entities/user-entity");
exports.DbConnection = [
    {
        provide: 'DataSource',
        useFactory: async (configService) => {
            const dataSource = new typeorm_1.DataSource({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USERNAME'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                synchronize: true,
                entities: [user_entity_1.UserEntity],
                logging: true
            });
            return await dataSource.initialize();
        },
        inject: [config_1.ConfigService],
    },
];
//# sourceMappingURL=db.source.js.map