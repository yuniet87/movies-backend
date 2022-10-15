import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/createMovie.dto';
import { UpdateMovieDto } from './dto/updateMovie.dto';
import { Movie } from './model/movie.model';
import { MovieService } from './movie.service';

@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  async findAllMovies(): Promise<any> {
    return await this.movieService.findAll();
  }

  @Get(':id')
  async findOneMovie(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<any> {
    return await this.movieService.findOne(id);
  }

  @Post()
  async createMovie(@Body() dto: CreateMovieDto): Promise<any> {
    return await this.movieService.createMovie(dto);
  }

  @Put(':id')
  async updateMovie(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() updateMovieDto: UpdateMovieDto,
  ): Promise<Movie> {
    return await this.movieService.updateMovie(id, updateMovieDto);
  }

  @Delete(':id')
  async deleteMovie(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Movie> {
    return await this.movieService.deleteMovie(id);
  }
}
