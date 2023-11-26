import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  
  const logger = new Logger("API");
  const port = parseInt(process.env.PORT) || 3000;

  app.enableCors({ origin: '*', methods: '*', allowedHeaders: '*', preflightContinue: false });
  
  await app.listen(
    port,
    () =>{      
      logger.log("Backend rodando na porta: "+ port);
    }
  );


}
bootstrap();
