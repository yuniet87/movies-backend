import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateReactionDto } from './dto/createReaction.dto';
import { UpdateReactionDto } from './dto/updateReaction.dto';
import { Reaction } from './model/reaction.model';
import { ReactionService } from './reaction.service';

@Controller('reaction')
export class ReactionController {
  constructor(private readonly reactionService: ReactionService) {}

  @Post()
  async createReaction(@Body() dto: CreateReactionDto): Promise<any> {
    return await this.reactionService.createReaction(dto);
  }

  @Put(':id')
  async updateReaction(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateReactionDto,
  ): Promise<Reaction> {
    return await this.reactionService.updateReaction(id, dto);
  }

  @Delete(':id')
  async deleteReaction(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Reaction> {
    return await this.reactionService.deleteReaction(id);
  }
}
