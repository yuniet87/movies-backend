import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Movie } from './model/movie.model';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [SequelizeModule.forFeature([Movie])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
