import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import Icon from '../components/Icon';
import { auth } from '../config/firebase';
import { ChangeEvent, useEffect, useState } from 'react';
import { google, logo } from '../assets/assets';
import { Link, NavigateFunction, Params, useNavigate, useParams } from 'react-router-dom';
import { User } from '../interfaces/User';
import useUser from '../hooks/useUser';
import getUUID from '../functions/getUUID';

export default function Authorization() {

   // retrieves the method from the params "register" | "login"
   const { method }: Readonly<Params<string>> = useParams();
   const navigate: NavigateFunction = useNavigate();

   // redirect the user if the url does not provide the correct method
   useEffect(() => {
      if (method !== 'register' && method !== 'login') {
         navigate("/register");
      }
   }, [method, navigate]);

   // extend the user locally to use google auth methods
   interface UserAuth extends User {
      password: string;
   }

   // retrieve the user from its provider
   const { user, setUser } = useUser();

   const initialValues: UserAuth = {
      email: '',
      uuid: '',
      photoURL: '',
      name: '',
      isOnline: false,
      password: '',
      remember: false,
      isAuthorized: false,
   }

   // creating the user profile
   const [authValues, setAuthValues] = useState<UserAuth>(initialValues);
   const [loading, setLoading] = useState(false);

   //some high level regex shit
   const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

   // function triggered on submit to authorize the user
   const authorize = async (): Promise<void> => {
      // catch mistakes early 
      const emptyField: boolean = authValues.email.length < 1 || authValues.password.length < 1;

      //warn user about invalid form validation
      if (emptyField) return alert("Please fill out the form before submitting");
      if (!validateEmail(authValues.email)) return alert("Please enter a valid email address.");
      if (authValues.password.length < 6) return alert("Password must be at least 6 characters long.");

      setLoading(true);

      try {
         console.log("updating user")
         let res: UserCredential;

         // register the user
         if (method === 'register') {
            res = await createUserWithEmailAndPassword(auth, authValues.email, authValues.password);
         }
         // sign the user in
         else {
            res = await signInWithEmailAndPassword(auth, authValues.email, authValues.password);
         }

         setUser({
            email: res.user.email || authValues.email,
            uuid: getUUID(),
            photoURL: res.user.photoURL || '',
            name: res.user.displayName || res.user.email || authValues.email,
            isOnline: false,
            remember: authValues.remember,
            isAuthorized: true,
         });
         navigate("/workspace");
         console.log('user: ', user);

         // clear password from state after successful login
         setAuthValues(initialValues);

      } catch (error: any) {
         switch (error.code) {
            case 'auth/email-already-in-use':
               alert('This email is already registered.');
               break;
            case 'auth/wrong-password':
               alert('Invalid password.');
               break;
            default:
               alert('An unexpected error occurred.');
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <div className='flex-1 flex justify-center items-center gap-16 flex-col'>
         <Icon icon={logo} />
         <div className="flex flex-col gap-8 p-8 bg-stack-10 rounded-xl items-center">
            <Icon icon={google} />

            <p className='font-bold text-xl'>Authorization</p>

            <div className='flex flex-col gap-4'>

               <input
                  placeholder='email'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setAuthValues((prev) => ({ ...prev, email: e.target.value })) }}
                  type='text'
                  value={authValues.email}
                  className='bg-stack-10 rounded-lg px-4 py-2'
               />
               <input
                  placeholder='password'
                  onChange={(e: ChangeEvent<HTMLInputElement>) => { setAuthValues((prev) => ({ ...prev, password: e.target.value })) }}
                  type='password'
                  value={authValues.password}
                  className='bg-stack-10 rounded-lg px-4 py-2'
               />

               {!(method === 'login') && (
                  <div className='flex gap-2'>
                     <input
                        className='accent-accent'
                        type='checkbox'
                        checked={authValues.remember}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => { setAuthValues((prev) => ({ ...prev, remember: e.target.checked })) }}
                     />
                     <p>Remember me</p>
                  </div>
               )}
            </div>

            <button
               tabIndex={1}
               disabled={loading}
               className={`bg-stack-10 w-full p-4 rounded-lg transition-all duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-accent hover:text-black'} font-bold`}
               onClick={authorize}>
               {loading ? 'Authorizing...' : 'Authorize'}
            </button>

            <Link
               className='hover:underline hover:text-accent'
               to={`/${method === 'register' ? 'login' : 'register'}`}>
               {method === 'register' ? 'Log In' : 'Register'}
            </Link>
         </div>
      </div>
   );
}