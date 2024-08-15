//the global interface for users
export interface User {
   remember: boolean;
   email: string;
   uuid: string;
   photoURL: string;
   name: string;
   isOnline: boolean;
   isAuthorized: boolean;
}