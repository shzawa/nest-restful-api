import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as listEndpoints from "express-list-endpoints";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  const server = app.getHttpServer();
  const router = server._events.request._router;
  const endpoints = listEndpoints(router);
  endpoints.forEach(endpoint => {
    console.log(
      `${endpoint.methods.filter((v, i, a) => a.indexOf(v) === i)} ${
      endpoint.path
      }`
    );
  });
}
bootstrap();
