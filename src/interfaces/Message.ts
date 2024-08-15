import { User } from "./User";

export interface Message {
   sender: User;
   sentAt: Date;
   content: string;
}