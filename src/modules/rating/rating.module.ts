import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Rating } from './model/rating.model';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';

@Module({
  imports: [SequelizeModule.forFeature([Rating])],
  providers: [RatingService],
  controllers: [RatingController],
})
export class RatingModule {}
