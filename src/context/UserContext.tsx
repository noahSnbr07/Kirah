import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { User } from "../interfaces/User";

export interface UserContextProps {
   user: User;
   setUser: Dispatch<SetStateAction<User>>;
}

const initialUser: User = {
   uuid: '',
   photoURL: '',
   name: '',
   isOnline: false,
};

// Simplified default function for `setUser`
export const UserContext = React.createContext<UserContextProps>({ user: initialUser, setUser: () => { } });

export default function UserProvider({ children }: { children: ReactNode }): JSX.Element {
   const [user, setUser] = useState<User>(initialUser);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
}