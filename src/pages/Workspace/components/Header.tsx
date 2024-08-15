import { lock, menu, notification, person, search } from '../../../assets/assets';
import Icon from '../../../components/Icon';

export default function Header() {
   return (
      <div className='border-b-2 gap-8 items-center border-stack-10 w-full flex justify-between p-4 md:px-8 md:py-6'>
         <SearchBar />
         <Divider />
         <QuickActions />
      </div>
   );
}

const SearchBar = () => {

   return (
      <div className='flex flex-1 bg-stack-10 rounded-xl px-4 py-2 gap-4'>
         <Icon icon={search} />
         <input
            className='bg-transparent flex-1'
            type='text'
            placeholder='Search Task'
         />
      </div>
   );
}

const Divider = () => <div className='flex-1 h-1 hidden md:block rounded-full bg-stack-10'></div>;

const QuickActions = () => {

   return (
      <>
         <div className='md:flex gap-4 hidden'>
            <button className='bg-accent text-black flex px-4 rounded-xl gap-2 py-2'>
               <Icon icon={lock} className='invert' />
               <p className='font-bold'> {"Share"} </p>
            </button>
            <button>
               <Icon icon={notification} className='opacity-50' />
            </button>
            <button className='bg-stack-10 rounded-full aspect-square h-10 grid place-content-center'>
               <Icon icon={person} />
            </button>
         </div>
         <div className='block md:hidden'>
            <Icon icon={menu} />
         </div>
      </>
   );
}