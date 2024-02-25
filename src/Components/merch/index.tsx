import { MerchData } from "@/shared/types"


type Props = {
    items: MerchData[]
}

const Merch = ({items}: Props) => {
  return (
    <section className="w-[100%] bg-black mx-auto pt-20 max-sm:pt-10 py-8 flex justify-center font-dmsans text-white">
        <div className="w-[90%] ">
            <div className="w-[95%] flex items-center justify-between">
                <p className="text-[25px] font-medium max-sm:text-[15px] max-xxsm:text-[12px]">///GET OUR MERCH</p>
                <button className="border bg-white text-black border-white px-3 py-2 rounded-lg max-xxsm:text-[12px] max-sm:py-1">View product</button>
            </div>

            <div className="flex  pt-12 max-sm:pt-0 max-sm:grid max-sm:grid-cols-1 justify-between">
                {
                    items.map((item) => (
                        <div className="flex  w-[100%]  relative flex-col justify-between items-center">
                            <img src={item.img} className="z-10 max-sm:pt-10"/>
                            
                            <div className="bg-zinc-800 w-[90%] 
                             flex justify-center items-end top-[70%] max-sm:top-[80%] max-md:top-[70%] max-md:h-[70px] absolute h-[100px]"><p>{item.item}</p></div>
                            </div>
                            ))
                }
                        <div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Merch