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
import { ReactionTypes } from '../enums';

@Table({ tableName: 'reaction', timestamps: false })
export class Reaction extends Model<Reaction> {
  @PrimaryKey
  @Column({ type: DataType.UUID, autoIncrement: true })
  id: string;

  @AllowNull(false)
  @Column({ type: DataType.ENUM(...Object.values(ReactionTypes)) })
  type: ReactionTypes;

  @ForeignKey(() => Movie)
  movieId: string;

  @BelongsTo(() => Movie)
  movie: Movie;
}
