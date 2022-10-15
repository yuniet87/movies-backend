import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Rating } from './model/rating.model';

@Injectable()
export class RatingService {
  constructor(@InjectModel(Rating) private ratingModel: typeof Rating) {}

  private async getRating(id: string) {
    const rating = this.ratingModel.findByPk(id);
    if (!rating) {
      throw new HttpException('No rating found', HttpStatus.NOT_FOUND);
    }
    return rating;
  }
}
