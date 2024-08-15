import { User } from "./User";
import { Message } from './Message';

//most important values
interface Core {
   uuid: string;
   progress: number;
   createdAt: Date;
   dueAt: Date;
}

//defines the style of our project
interface Appearance {
   name: string;
   icon: string;
   banner: string;
   color: string;
   tags: string;
}

//defines settings especially useful for collaboration
interface Ownership {
   owner: User;
   inviteLink: string;
   isPublic: boolean;
   members: User[];
}

//defines text and chat channel
interface Channel {
   uuid: string;
   name: string;
   icon: string;
   messages: Message[];
}

interface Tag {
   name: string;
   color: string;
}

//a single task can lay within its parent Category
interface Task {
   name: string;
   collaborators: User[];
   tags: Tag[];
}

//parent of task like done, in progress, review
interface Category {
   color: string;
   name: string;
   icon: string;
   uuid: string;
   tasks: Task[];
}

interface Kanban {
   categories: Category[];
   totalTasks: number;
}

export default interface Project {
   appearance: Appearance;
   core: Core;
   ownership: Ownership;
   chats: Channel[];
   kanban: Kanban;
}