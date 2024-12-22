import {Module} from "@nestjs/common";
import { DbConnection } from "./db.source";
import { ExpressAdapter } from "@nestjs/platform-express";

@Module({
    providers:[...DbConnection],
    exports:[...DbConnection]
})
export class DbModule{}