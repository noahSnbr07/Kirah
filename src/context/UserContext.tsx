import React, { Dispatch, ReactNode, SetStateAction, useEffect, useState, useContext } from "react";
import { User } from "../interfaces/User";

// Interface for UserContext
export interface UserContextProps {
   user: User;
   setUser: Dispatch<SetStateAction<User>>;
}

// Initial user object
const initialUser: User = {
   uuid: '',
   photoURL: '',
   name: '',
   isOnline: false,
   remember: false,
   email: '',
   isAuthorized: false,
};

// Initialize UserContext with a default setUser function
export const UserContext = React.createContext<UserContextProps>({
   user: initialUser,
   setUser: () => { }
});

// UserProvider component to wrap around the app
export default function UserProvider({ children }: { children: ReactNode }): JSX.Element {
   const [user, setUser] = useState<User>(initialUser);

   useEffect(() => {
      console.log(user);
   }, [user]);

   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
}

// Custom hook to use UserContext
export const useUser = () => useContext(UserContext);
