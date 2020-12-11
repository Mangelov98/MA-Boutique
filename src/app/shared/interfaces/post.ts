import { IBase } from './base';
import { IItem } from './item';
import { IUser } from './user';

export interface IPost extends IBase {
  likes: string[];
  text: string;
  userId: IUser;
  itemId: IItem;
}