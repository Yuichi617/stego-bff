import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CustomHttpService } from './services/custom-http.service';
import { ConfigService } from '@nestjs/config';
import { constant } from '../config/constant';

@Module({
  imports: [
    HttpModule.registerAsync({
      useFactory: async (configService: ConfigService) => ({
        baseURL: `${configService.get('baseDomain')}${constant.routePrefix}`,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [CustomHttpService],
  exports: [CustomHttpService],
})
export class SharedModule {}
