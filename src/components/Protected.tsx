import { ReactNode, useEffect } from 'react'
import useUser from '../hooks/useUser'
import { NavigateFunction, useNavigate } from 'react-router-dom';

export default function Protected({ children }: { children: ReactNode }): JSX.Element {

   //retrieve user
   const { user } = useUser();

   //redirect function
   const navigate: NavigateFunction = useNavigate();

   //if user is not authorized redirect to auth page
   useEffect(() => { if (!user.isAuthorized) navigate("/login") }, []);

   return (
      <>
         {user.isAuthorized && children}
      </>
   );
}