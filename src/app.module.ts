import {MiddlewareConsumer, Module, NestMiddleware, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {LoggerMiddleware} from "./middleware/logger.middleware";
import { UsersModule } from './users/users.module';
import { DmsService } from './dms/dms.service';
import { DmsController } from './dms/dms.controller';
import { DmsModule } from './dms/dms.module';
import { ChannelsModule } from './channels/channels.module';
import { WorkspacesModule } from './workspaces/workspaces.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import * as process from "process";
import * as Joi from '@hapi/joi';
import {DatabaseModule} from "./database/database.module";
import {ChannelChats} from "./entities/ChannelChats";
import {ChannelMembers} from "./entities/ChannelMembers";
import {Channels} from "./entities/Channels";
import {DMs} from "./entities/DMs";
import {Mentions} from "./entities/Mentions";
import {Users} from "./entities/Users";
import {WorkspaceMembers} from "./entities/WorkspaceMembers";
import {Workspaces} from "./entities/Workspaces";


// 비동기 !
const getEnv = () => {
  return {
    DB_PASSWORD: 'nodejsbook',
    NAME: '제로초바보',
  }
}

// const getEnv = async () => {
//   const response = await axios.get('/비밀키요청');
//   return response.data;
// }

@Module({
  imports: [
    // ConfigModule.forRoot({
    //   validationSchema: Joi.object({
    //     DB_HOST: Joi.string().required(),
    //     DB_PORT: Joi.number().required(),
    //     DB_USERNAME: Joi.string().required(),
    //     DB_PASSWORD: Joi.string().required(),
    //     DB_DATABASE: Joi.string().required(),
    //   }),
    // }),
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
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
      keepConnectionAlive: true,
      migrations: [__dirname + '/migrations/*.ts'],
      charset: 'utf8mb4_general_ci',
      synchronize: false,
      logging: true,
    }),
    UsersModule,
    DmsModule,
    ChannelsModule,
    WorkspacesModule,
  ],
  controllers: [AppController, DmsController],
  providers: [AppService, ConfigService, DmsService],
})

// export class AppModule {}
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
      consumer.apply(LoggerMiddleware).forRoutes('*')
    }
}
