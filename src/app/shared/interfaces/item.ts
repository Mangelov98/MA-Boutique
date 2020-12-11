import { IBase } from './base';
import { IUser } from './user';

export interface IItem<T = string> extends IBase {
 
  
  itemName: string;
  userId: IUser;
}