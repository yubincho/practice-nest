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
    ConfigModule.forRoot({
      isGlobal: true,
      load: [getEnv]
    }),
    UsersModule,
    DmsModule,
    ChannelsModule,
    WorkspacesModule,
  ],
  controllers: [AppController, DmsController],
  providers: [AppService, ConfigService, DmsService],
})
export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer): any {
      consumer.apply(LoggerMiddleware).forRoutes('*')
    }
}
