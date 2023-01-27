import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as path from 'path';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HealthModule } from './rest/health/health.module';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { MovieModule } from './graphql/movies/movie.module';
import { UserModule } from './graphql/users/user.module';
import { ConfigModule } from '@nestjs/config';
import { env } from './config/env';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [env] }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: path.join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    HealthModule,
    MovieModule,
    UserModule,
  ],
})
export class AppModule {}
