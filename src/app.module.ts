import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import * as TypeORMOptions from './config/orm';
import RepoModule from './repo.module';
import { GraphQLModule } from '@nestjs/graphql';
import UserResolver from './resolvers/user.resolver';
import MessageResolver from './resolvers/message.resolver';

const gqlImports = [UserResolver, MessageResolver];

@Module({
  imports: [
    TypeOrmModule.forRoot(TypeORMOptions),
    RepoModule,
    ...gqlImports,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
