import {
  AllowNull,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';
import { Comment } from '../../comment/model/comment.model';
import { Reaction } from '../../reaction/model/reaction.model';

@Table({ tableName: 'movie' })
export class Movie extends Model {
  @PrimaryKey
  @Column
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

  @HasMany(() => Reaction)
  reaction: Reaction;

  @HasMany(() => Comment)
  comment: Comment;
}
