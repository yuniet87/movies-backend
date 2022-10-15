import {
  AllowNull,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Comment } from '../../comment/model/comment.model';
import { Rating } from '../../rating/model/rating.model';
import { Reaction } from '../../reaction/model/reaction.model';

@Table({ tableName: 'movie', timestamps: false })
export class Movie extends Model<Movie> {
  @PrimaryKey
  @Column({ type: DataType.UUID, autoIncrement: true })
  id: string;

  @AllowNull(false)
  @Column
  name: string;

  @AllowNull(false)
  @Column
  image: string;

  @AllowNull(false)
  @Column
  url: string;

  @AllowNull(false)
  @Column
  language: string;

  @AllowNull(false)
  @Column
  summary: string;

  @ForeignKey(() => Rating)
  @Column({ type: DataType.UUID })
  ratingId: string;

  @HasMany(() => Reaction)
  reaction: Reaction[];

  @HasMany(() => Comment)
  comment: Comment[];
}
