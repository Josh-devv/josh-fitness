import gal1 from "@/assets/g1.png"
import gal2 from "@/assets/g2.png"
import gal3 from "@/assets/g5.png"
import gal4 from "@/assets/g6.png"
import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage)=> void;
}
const Gallery = ({setSelectedPage}: Props) => {
  return (
    <section id="" className="w-[100%] pt-20 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
        <div className="text-[25px] w-[100%] flex justify-center font-medium max-sm:text-[15px]">
            <p className="w-[90%] self-start max-sm:text-[20px] pb-6 max-xxsm:text-[20px]">///Gallery</p>
        </div>

        <motion.div 
        className="w-[90%] flex flex-col justify-center"
        onViewportEnter={()=> setSelectedPage(SelectedPage.Gallery) }
        >
    <div className="flex w-[100%] justify-evenly overflow-x-auto">
        <motion.div 
        className="flex w-[100%] space-x-2"
        initial="hidden"whileInView
        ="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
            <img src={gal1} className="rounded-3xl w-[400px] h-[300px]" />
            <img src={gal2} className="rounded-3xl w-[190px]" />
            <img src={gal1} className="rounded-3xl w-[400px] h-[300px]" />
            <img src={gal2} className="rounded-3xl w-[190px]" />
        </motion.div>
    </div>
    
    <div className="flex w-[100%] justify-evenly  overflow-x-auto pt-5">
        <motion.div 
        className="flex w-[100%] space-x-2"
        initial="hidden"whileInView
        ="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        >
            <img src={gal3} className="rounded-3xl w-[190px]" />
            <img src={gal4} className="rounded-3xl w-[400px]" />
            <img src={gal3} className="rounded-3xl w-[190px]" />
            <img src={gal4} className="rounded-3xl w-[400px]" />
        </motion.div>
    </div>
</motion.div>

    </section>
  )
}

export default Gallery;