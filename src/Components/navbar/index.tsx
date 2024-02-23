//import { useState } from "react";
//import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";

import { SelectedPage } from "@/shared/types";
import Link from "./Link";
import useMediaQuery from "@/hooks/useMediaQuery";
import { Bars3Icon,  XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

import fit from "@/assets/fitt.png"


type Props = {
  top: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage, top }: Props) => {
    const between = "flex items-center justify-between";
    const [menu, setMenu] = useState<boolean>(false)
    const medScreen = useMediaQuery("(min-width: 1024px)")
    const navbg = top ? "" : " drop-shadow-xl bg-black";//wstyle for when its at the top of the page

  return (
    <nav>
      <div className={`flex justify-center ${navbg} font-dmsans font-normal  fixed top-0 z-30 w-[100%] py-6`}>
        <div className={`w-5/6 max-lg:w-[90%] flex justify-between`}>
            <div className={` flex items-center w-[100%] justify-between  gap-8 text-sm`}>
              <img alt="" className="w-[120px]" src={fit} />

              { medScreen ?  (
                <div className={`flex justify-end  text-white w-full `}>
                  <div className={`${between} gap-8 -4 text-sm`}>
                    <Link page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} />
                    <Link page="About" 
                    setSelectedPage={setSelectedPage} 
                    selectedPage={selectedPage} />
                    <Link page="Workout Programs"
                    setSelectedPage={setSelectedPage} 
                    selectedPage={selectedPage}/>
                    <Link page="Recipe "
                    setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}/>
                    <Link page="Store "
                    setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}/>
                      <div className="flex items-center">
                    <p className="px-5">Sign In</p>
                    <button className="bg-blue-500 py-2 rounded-md px-2">Become a Member</button>
                  </div>
                  </div>
                  
              </div>
              ) : (
                <button className="rounded-full bg-black p-2"
                onClick={()=> setMenu(!menu)}>
                  <Bars3Icon className="h-6 w-6 text-white" />
                </button>
              )  }
            </div>
            </div></div>  

            {
              !medScreen && menu && (
                <div className="fixed right-0 bottom-0 z-40 h-full bg-black drop-shadow-xl w-[300px]">
                  <div className="flex justify-end p-12">
                      <button onClick={()=> setMenu(!menu)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                      </button>
                  </div>

                  <div className="pl-10 font-dmsans flex flex-col gap-10 text-[15px]">
                    <Link page="Home" 
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage} 
                    />
                    <Link page="About" 
                    setSelectedPage={setSelectedPage} 
                    selectedPage={selectedPage} 
                    />
                    <Link page="Workout Programs"
                    setSelectedPage={setSelectedPage} 
                    selectedPage={selectedPage}
                    />
                    <Link page="Recipe"
                    setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}
                    />
                    <Link page="Store"
                    setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}
                    />
                    <Link page="Sign In"
                    setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}
                    />
                    <Link page="Become a Member"
                    setSelectedPage={setSelectedPage}
                      selectedPage={selectedPage}
                    />
                  </div>
                </div>
              )}
            
    </nav>
    
  )
}
export default Navbar;