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

@Table({ tableName: 'comment', freezeTableName: true })
export class Comment extends Model {
  @PrimaryKey
  @Column
  id: string;

  @AllowNull(false)
  @Column
  comment: string;

  @AllowNull(false)
  @Column
  username: string;

  @AllowNull(false)
  @Column
  description: string;

  @ForeignKey(() => Movie)
  movieId: string;

  @BelongsTo(() => Movie)
  movie: Movie;
}
