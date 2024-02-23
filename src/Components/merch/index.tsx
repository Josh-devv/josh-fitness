import { MerchData } from "@/shared/types"


type Props = {
    items: MerchData[]
}

const Merch = ({items}: Props) => {
  return (
    <section className="w-[100%] mx-auto pt-20 py-8 flex justify-center font-dmsans text-white  bg-black bg-opacity-95">
        <div className="w-[90%]">
            <div className="w-100%] flex items-center justify-between">
                <p className="text-[25px] font-medium max-sm:text-[15px]">///GET OUR MERCH</p>
                <button className="border border-white px-3 py-2 rounded-lg max-sm:py-1">View product</button>
            </div>

            <div className="flex pt-16 max-sm:grid max-sm:grid-cols-2 justify-between">
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