import gal1 from "@/assets/g1.png"
import gal2 from "@/assets/g2.png"
import gal3 from "@/assets/g5.png"
import gal4 from "@/assets/g6.png"


const Gallery = () => {
  return (
    <section id="" className="w-[100%] pt-20 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
        <div className="text-[25px] w-[100%] flex justify-center font-medium max-sm:text-[15px]">
            <p className="w-[90%] self-start max-sm:text-[20px] pb-6">///Gallery</p>
        </div>

        <div className="w-[90%] flex flex-col justify-center">
    <div className="flex w-[100%] justify-evenly overflow-x-auto">
        <div className="flex w-[100%] space-x-2">
            <img src={gal1} className="rounded-3xl w-[400px] h-[300px]" />
            <img src={gal2} className="rounded-3xl w-[190px]" />
            <img src={gal1} className="rounded-3xl w-[400px] h-[300px]" />
            <img src={gal2} className="rounded-3xl w-[190px]" />
        </div>
    </div>
    
    <div className="flex w-[100%] justify-evenly  overflow-x-auto pt-5">
        <div className="flex w-[100%] space-x-2">
            <img src={gal3} className="rounded-3xl w-[190px]" />
            <img src={gal4} className="rounded-3xl w-[400px]" />
            <img src={gal3} className="rounded-3xl w-[190px]" />
            <img src={gal4} className="rounded-3xl w-[400px]" />
        </div>
    </div>
</div>

    </section>
  )
}

export default Gallery;