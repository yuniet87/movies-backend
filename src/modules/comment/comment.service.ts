import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCommentDto } from './dto/createComment.dto';
import { UpdateCommentDto } from './dto/updateComment.dto';
import { Comment } from './model/comment.model';

@Injectable()
export class CommentService {
  constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}

  private async getComment(id: string) {
    const comment = await this.commentModel.findByPk(id);
    if (!comment) {
      throw new HttpException('No comment found', HttpStatus.NOT_FOUND);
    }
    return comment;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    const comment = await this.getComment(id);
    comment.comment = updateCommentDto.comment || comment.comment;
    comment.description = updateCommentDto.description || comment.description;
    return comment.save();
  }

  async create(createCommentDto: CreateCommentDto): Promise<Comment> {
    return await this.commentModel.create<Comment>(createCommentDto);
    // const comment = new Comment();
    // comment.movieId = createCommentDto.movieId;
    // comment.comment = createCommentDto.comment;
    // comment.username = createCommentDto.username;
    // comment.description = createCommentDto.description;
    // return comment.save();
  }

  async delete(id: string): Promise<Comment> {
    const comment = await this.getComment(id);
    await comment.destroy();
    return comment;
  }
}
