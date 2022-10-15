import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from '../comment/model/comment.model';
import { CreateMovieDto } from './dto/createMovie.dto';
import { UpdateMovieDto } from './dto/updateMovie.dto';
import { Movie } from './model/movie.model';

@Injectable()
export class MovieService {
  constructor(@InjectModel(Movie) private movieModel: typeof Movie) {}

  private async getMovie(id: string) {
    const movie = await this.movieModel.findByPk(id);
    if (!movie) {
      throw new HttpException('No movie found', HttpStatus.NOT_FOUND);
    }
    return movie;
  }

  async findAll() {
    return await this.movieModel.findAll<Movie>({ include: [Comment] });
  }

  async findOne(id: string) {
    const movie = await this.movieModel.findByPk<Movie>(id, {
      include: [Comment],
    });
    if (!movie) {
      throw new HttpException('No post found', HttpStatus.NOT_FOUND);
    }
    return movie;
  }

  async updateMovie(id: string, updateMovieDto: UpdateMovieDto) {
    const movie = await this.getMovie(id);
    movie.name = updateMovieDto.name || movie.name;
    movie.image = updateMovieDto.image || movie.image;
    movie.url = updateMovieDto.url || movie.url;
    movie.language = updateMovieDto.language || movie.language;
    movie.summary = updateMovieDto.summary || movie.summary;
    return movie.save();
  }

  async createMovie(movie: CreateMovieDto): Promise<Movie> {
    return await this.movieModel.create<Movie>(movie);
  }

  async deleteMovie(id: string): Promise<Movie> {
    const movie = await this.getMovie(id);
    await movie.destroy();
    return movie;
  }
}
