import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { Reaction } from './model/reaction.model';
import { ReactionService } from './reaction.service';
import { ReactionController } from './reaction.controller';

@Module({
  imports: [SequelizeModule.forFeature([Reaction])],
  providers: [ReactionService],
  controllers: [ReactionController],
})
export class ReactionModule {}
