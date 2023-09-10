import { Module } from '@nestjs/common';
import * as process from "process";
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import {ChannelChats} from "../entities/ChannelChats";
import {ChannelMembers} from "../entities/ChannelMembers";
import {Channels} from "../entities/Channels";
import {DMs} from "../entities/DMs";
import {Mentions} from "../entities/Mentions";
import {Users} from "../entities/Users";
import {WorkspaceMembers} from "../entities/WorkspaceMembers";
import {Workspaces} from "../entities/Workspaces";



@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: (cfg: ConfigService) => {
                return {
                    type: 'mysql',
                    host: cfg.get('DB_HOST'),
                    port: cfg.get('DB_PORT'),
                    username: cfg.get('DB_USERNAME'),
                    password: cfg.get('DB_PASSWORD'),
                    database: cfg.get('DB_DATABASE'),
                    entities: [
                        ChannelChats,
                        ChannelMembers,
                        Channels,
                        DMs,
                        Mentions,
                        Users,
                        WorkspaceMembers,
                        Workspaces,
                    ],
                    autoLoadEntities: true,
                    synchronize: true,
                    logging: true,
                } as TypeOrmModuleOptions;
            },
        }),
    ],
})
export class DatabaseModule {}