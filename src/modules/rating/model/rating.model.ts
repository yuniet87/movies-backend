import {
  AllowNull,
  Column,
  DataType,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

@Table({ tableName: 'rating', timestamps: false })
export class Rating extends Model<Rating> {
  @PrimaryKey
  @Column({ type: DataType.UUID, autoIncrement: true })
  id: string;

  @AllowNull(false)
  @Column
  average: number;
}
