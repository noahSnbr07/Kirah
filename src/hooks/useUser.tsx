import { useContext } from "react";
import { UserContext, UserContextProps } from "../context/UserContext";

export default function useUser(): UserContextProps {
   const context = useContext(UserContext);

   if (!context) throw new Error("useUser must be used within a UserProvider");

   return context;
}