import Navbar from "@/navbar"
import { useEffect, useState } from "react"
import look from "@/assets/look.png"
import { items } from "@/shared/data"
import Contact from "@/Components/contact"


const Store = () => {

    const [top, setTop] = useState<boolean>(true)
    //const [items, setItems] = useState<MerchData []>([])
  

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY !== 0) setTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);



  return (
    <div className="w-[100%] font-dmsans text-[white]">
    <Navbar top={top}/>
    <div className="">
       <img src={look} className="w-[100%] h-[100vh] object-cover bg-cover "/>
  

   <div className="absolute flex justify-center w-[100%] max-sm:top-[40%] top-[30%]">
       <div className="w-[90%]">
           <h1 className="text-[75px] max-xxsm:text-[35px] max-sm:text-[45px]">Inspiring you for</h1>
           <h1 className="text-[75px] max-xxsm:text-[35px] font-extrabold max-sm:text-[45px]">NEW LOOK</h1>
           <h1 className="text-[75px] max-xxsm:text-[35px] max-sm:text-[45px]">everyday</h1>
           <p className="text-[15px] max-xxsm:text-[12px] max-sm:text-[15px] max-md:w-[70%] max-sm:w-[95%] w-[50%]">
           Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability to do everyday activities. Adults who si
           </p>
       </div>
   </div>

    </div>

    <section className="w-[100%] pt-12 justify-center flex h-[100%]">
        <div className="w-[90%]">
            {
                items.map((item)=>(
                    <div className="flex py-3 max-sm:flex-col">
                <div className="flex justify-center bg-neutral-700 rounded-2xl">
                    <img src={item.img} className="w-[300px]"/>
                </div>
                <div className="flex flex-col max-sm:pl-0 max-sm:pt-2 pl-5 justify-start">
                    <div className="flex justify-between">
                      <h1 className="text-[25px] font-bold">{item.name}</h1>  
                      <p className="border-white border px-3 rounded-xl flex justify-center items-center">4.5</p>
                    </div>
                     
                <p className="text-[15px] py-3">$100</p>
                <p className="border-white border max-sm:w-[60%] rounded-2xl text-center  py-2 w-[15%]">ADD TO CART</p>
                <p className="text-[15px] max-sm:w-[100%] w-[60%] pt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum adipisci dolor labore perferendis a nobis necessitatibus dolorem? Quas porro et voluptas. Soluta, eum est esse voluptatum accusantium officiis aliquid sint..</p>
                </div>
               
            </div>
                ))
            }
            
          
            
        </div>
    </section>

    <Contact />
    </div>
  )
}

export default Store