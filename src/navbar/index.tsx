import { Link } from "react-router-dom";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import fit from "@/assets/fitt.png"



type Props = {
  top: boolean;
}

const Navbar = ({ top }: Props) => {
    const between = "flex items-center justify-between";
    const [menu, setMenu] = useState<boolean>(false)
    const medScreen = useMediaQuery("(min-width: 1024px)")
    const navbg = top ? "bg-transparent" : " drop-shadow-xl bg-black";//wstyle for when its at the top of the page


  return (
    <nav>
      <div className={`flex justify-center ${navbg} font-dmsans font-normal  fixed top-0 z-50 w-[100%] py-6`}>
        <div className={`w-[90%] max-lg:w-[90%] flex justify-between`}>
            <div className={` flex items-center w-[100%] justify-between  gap-8 text-sm`}>
              <img alt="" className="w-[120px]" src={fit} />

              { medScreen ?  (
                <div className={`flex justify-end  text-white w-full `}>
                  <div className={`${between} gap-8 -4 text-sm`}>
                  <Link to="/">
                      Home
                    </Link>
                    <Link to="/about">
                      About
                    </Link>
                    <Link to="/workoutprograms">
                      Workout Programs
                    </Link>
                    <Link to="/recipes">
                      Recipe
                    </Link>
                    <Link to="/store">
                      Store
                    </Link>
                      <div className="flex items-center">
                    <p className="px-5">Sign In</p>
                    <button className="bg-blue-500 py-2 rounded-md px-2">Become a Member</button>
                  </div>
                  </div>
                  
              </div>
              ) : (
                <button className="rounded-full bg-black p-2"
                onClick={()=> setMenu(!menu)}>
                  {
                    !menu ? (
                       <Bars3Icon className="h-6 w-6 text-white" />
                    ) : (
                      <XMarkIcon className="h-6 w-6 text-white"/>
                    )
                  }
                 
                </button>
              )  }
            </div>
            </div></div>  

            {
              !medScreen && menu && (
                <div className="types fixed right-0 bottom-0 right- z-40 h-full bg-black drop-shadow-xl max-sm:w-[100%] w-[300px]">
                  <div className="flex justify-end p-12">
                    <div></div>
                      <button onClick={()=> setMenu(!menu)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                      </button>
                  </div>

                  <div className="text-[20px] text-white justify-center font-dmsans flex flex-col items-center gap-10 ">
                  <Link to="/">
                      Home
                    </Link>
                    <Link to="/about">
                      About
                    </Link>
                    <Link to="/workoutprograms">
                      Workout Programs
                    </Link>
                    <Link to="/recipes">
                      Recipe
                    </Link>
                    <Link to="/store">
                      Store
                    </Link>
                      <div className="flex flex-col items-center">
                    <p className="px-5">Sign In</p>
                    <button className="bg-blue-500 py-2 rounded-md px-2">Become a Member</button>
                  </div>
                </div>
                </div>
              )}
            
    </nav>
    
  )
}
export default Navbar;