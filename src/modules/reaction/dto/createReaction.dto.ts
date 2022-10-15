import { ReactionTypes } from '../enums';

export class CreateReactionDto {
  readonly type: ReactionTypes;
  readonly movieId: string;
}
