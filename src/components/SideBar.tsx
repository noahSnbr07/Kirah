import { Link } from "react-router-dom";
import { logo, logo_square } from "../assets/assets.ts";

export default function SideBar() {
   return (
      <div className='bg-stack-10 p-4 md:px-8 md:py-6 flex flex-col gap-12'>
         <Logo />
      </div>
   );
}

const Logo = () => {
   return (
      <Link className="" to={`/`}>
         <img
            className="hidden md:block"
            loading="eager"
            draggable={false}
            src={logo}
            title="Kirah Home Link"
            alt="Kirah Logo"
         />
         <img
            className="block md:hidden w-8"
            loading="eager"
            draggable={false}
            src={logo_square}
            title="Kirah Home Link"
            alt="Kirah Logo"
         />
      </Link>
   );
}