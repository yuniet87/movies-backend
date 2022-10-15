import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateMovieDto } from './dto/createMovie.dto';
import { Movie } from './model/movie.model';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie) private movie: typeof Movie) {}

  async createMovie(movie: CreateMovieDto): Promise<any> {
    return await this.movie.create({ movie });
  }
}
