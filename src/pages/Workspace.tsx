import SideBar from './Workspace/components/SideBar'
import Header from './Workspace/components/Header'
import Main from './Workspace/components/Main';

export default function Workspace() {
   return (
      <div className='flex-1 flex'>
         <SideBar />
         <div className="flex flex-1 flex-col w-full">
            <Header />
            <Main />
         </div>
      </div>
   );
}
