import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Comment } from './modules/comment/model/comment.model';
import { Movie } from './modules/movie/model/movie.model';
import { MovieModule } from './modules/movie/movie.module';
import { Rating } from './modules/rating/model/rating.model';
import { Reaction } from './modules/reaction/model/reaction.model';
import { ReactionModule } from './modules/reaction/reaction.module';
import { CommentModule } from './modules/comment/comment.module';
import { RatingModule } from './modules/rating/rating.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        database: process.env.DB_NAME,
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        models: [Movie, Reaction, Comment, Rating],
      }),
    }),
    MovieModule,
    ReactionModule,
    CommentModule,
    RatingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
