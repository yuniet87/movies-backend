import {
  Body,
  Controller,
  Delete,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';

import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/createComment.dto';
import { UpdateCommentDto } from './dto/updateComment.dto';
import { Comment } from './model/comment.model';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post()
  async createComment(@Body() dto: CreateCommentDto): Promise<any> {
    return await this.commentService.create(dto);
  }

  @Put(':id')
  async updateComment(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateCommentDto,
  ): Promise<Comment> {
    return await this.commentService.update(id, dto);
  }

  @Delete(':id')
  async deleteComment(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<Comment> {
    return await this.commentService.delete(id);
  }
}
