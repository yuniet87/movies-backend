import {
  AllowNull,
  BelongsTo,
  Column,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Movie } from '../../movie/model/movie.model';
import { ReactionTypes } from '../enums';

@Table({ tableName: 'reaction', freezeTableName: true })
export class Reaction extends Model {
  @PrimaryKey
  @Column
  id: string;

  @AllowNull(false)
  @Column
  type: ReactionTypes;

  @ForeignKey(() => Movie)
  movieId: string;

  @BelongsTo(() => Movie)
  movie: Movie;
}
