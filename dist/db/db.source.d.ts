import { ConfigService } from '@nestjs/config';
import { DataSource } from 'typeorm';
export declare const DbConnection: {
    provide: string;
    useFactory: (configService: ConfigService) => Promise<DataSource>;
    inject: (typeof ConfigService)[];
}[];
