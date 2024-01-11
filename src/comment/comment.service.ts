import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment, CommentDocument } from 'src/schemas/comment.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<CommentDocument>,
  ) {}

  async getComments(): Promise<Comment[]> {
    return this.commentModel.find().exec();
  }

  async getComment(id: string): Promise<Comment> {
    const comment = await this.commentModel.findById(id).exec();
    if (!comment) {
      throw new HttpException(`Comment not found`, HttpStatus.NOT_FOUND);
    }

    return comment;
  }

  async createComment(createCommentDto: CreateCommentDto): Promise<Comment> {
    const comment = new this.commentModel(createCommentDto);
    return comment.save();
  }

  async updateComment(
    id: string,
    userId: string,
    updateCommentDto: UpdateCommentDto,
  ): Promise<Comment> {
    const comment = await this.commentModel.findById(id).exec();
    if (!comment) {
      throw new HttpException(`Comment not found`, HttpStatus.NOT_FOUND);
    }

    if (comment.userId !== userId) {
      throw new HttpException(
        `You can only update your own comments`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    return await this.commentModel
      .findByIdAndUpdate(id, updateCommentDto, {
        new: true,
      })
      .exec();
  }

  async removeComment(id: string, userId: string): Promise<Comment> {
    const comment = await this.commentModel.findById(id).exec();
    if (!comment) {
      throw new HttpException(`Comment not found`, HttpStatus.NOT_FOUND);
    }

    if (comment.userId !== userId) {
      throw new HttpException(
        `You can only delete your own comments`,
        HttpStatus.UNAUTHORIZED,
      );
    }

    return await this.commentModel.findByIdAndDelete(id).exec();
  }
}
