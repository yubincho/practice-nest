import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from "process";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";


declare const module: any;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 3000
  await app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
      .setTitle("Yubin's shoppingmall")
      .setDescription('api 문서입니다')
      .setVersion('1.0')
      .addTag('Yubin', 'shoppingmall')
      .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, document);


  await app.listen(port)
  console.log(`listening on port ${port}`)
  // await app.listen(3000);

  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }

}
bootstrap();
