import { CiCalendar, CiClock2 } from "react-icons/ci";
import { CaroData } from "./types"

type Props = {
    items: CaroData
}

const Caro = ({items}: Props) => {
  return (
    <div className=" flex  justify-center">
       
    <img src={items.img} alt="slide_image" className=" max-sm:w-[95%] max-lg:w-[410px] w-[300px] max-md:w-[300px] rounded-3xl" />
    <div className="bg-gray-800 rounded-lg p-5 max-sm:py-8 max-xsm:py-6 max-xxsm:py-4 max-md:w-[90%] max-sm:top-[70%] max-md:top-[70%] max-lg:top-[80%] max-lg:w-[80%] absolute top-[70%] flex flex-col z-10 w-[70%]">
      <div className="flex justify-between">
          <button className="bg-white font-bold flex items-center max-md:text-[11px] text-[13px] text-black rounded-md px-3">
           <CiCalendar />    {items.days}
          </button>
          <button className="bg-white text-[13px] max-md:text-[11px] font-bold flex items-center  text-black rounded-md px-3">
              <CiClock2 className=""/> 20-40 {items.time} 
          </button>
      </div>
      <p className="pt-3">2024 Abs Challenge</p>

    </div>
    
  </div>
  )
}

export default Caro