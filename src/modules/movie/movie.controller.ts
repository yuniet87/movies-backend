import { Body, Controller, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  async createMovie(@Body() dto: CreateMovieDto): Promise<any> {
    return this.movieService.createMovie(dto);
  }
}
