import {
  AllowNull,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Movie } from '../../movie/model/movie.model';

@Table({ tableName: 'comment', timestamps: false })
export class Comment extends Model<Comment> {
  @PrimaryKey
  @Column({ type: DataType.UUID, autoIncrement: true })
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
