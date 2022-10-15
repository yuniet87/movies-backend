import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateReactionDto } from './dto/createReaction.dto';
import { UpdateReactionDto } from './dto/updateReaction.dto';
import { Reaction } from './model/reaction.model';

@Injectable()
export class ReactionService {
  constructor(@InjectModel(Reaction) private reactionModel: typeof Reaction) {}

  private async getReaction(id: string) {
    const reaction = await this.reactionModel.findByPk(id);
    if (!reaction) {
      throw new HttpException('No reaction found', HttpStatus.NOT_FOUND);
    }
    return reaction;
  }

  async updateReaction(id: string, updateReactionDto: UpdateReactionDto) {
    const reaction = await this.getReaction(id);
    reaction.type = updateReactionDto.type || reaction.type;
    return reaction.save();
  }

  async createReaction(
    createReactionDto: CreateReactionDto,
  ): Promise<Reaction> {
    return await this.reactionModel.create<Reaction>(createReactionDto);
  }

  async deleteReaction(id: string): Promise<Reaction> {
    const reaction = await this.getReaction(id);
    await reaction.destroy();
    return reaction;
  }
}
