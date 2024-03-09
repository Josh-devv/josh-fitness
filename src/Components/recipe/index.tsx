import { RecipeData } from "@/shared/types"
import rec1 from "@/assets/rec1.png"
import { motion } from "framer-motion"

type Props = {
    foods: RecipeData[];
    
}

const Recipe = ({foods}: Props) => {
  return (
    <section id="recipe" className="w-[100%] bg-black mx-auto pt-20 max-sm:pt-10 py-8 flex justify-center font-dmsans text-white">
        <motion.div 
        className="w-[85%] max-lg:w-[90%]"
        //onViewportEnter={()=> setSelectedPage(SelectedPage.Recipe)}
        >
            <div className="w-[100%] flex items-center justify-between">
                <p className="text-[25px] font-medium max-sm:text-[15px] max-xxsm:text-[13px]">Our Recipes</p>
                <button className="border border-white bg-white text-black px-3 py-2 max-xxsm:text-[12px] rounded-lg max-sm:py-1">View more recipes</button>
            </div>

            <div className="flex pt-10 max-lg:flex-col  justify-between">
                <div className="flex w-[70%] max-sm:flex-col max-lg:w-[100%] max-md:w-[100%] items-center">
                    <motion.div 
                    className=" flex justify-center h-[]"
                    initial="hidden"whileInView
                    ="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                        <img src={rec1}  className="rounded-3xl h-[450px]  max-md:h-[300px] max-sm:h-[100%] max-xxsm:h-[300px] max-xxsm:w-[100%] max-sm:w-[100%]"/> 
                    </motion.div>
                    <div className="pl-5 max-sm:pl-0">
                        <p className="text-[25px] max-xxsm:text-[17px] max-sm:pt-3 max-sm:text-[20px] font-bold">Protein-packed Power Bowl</p>
                        <p className="w-[300px] max-lg:w-[500px] max-xxsm:text-[12px] max-md:w-[400px] max-sm:text-[13px] max-sm:w-[100%] max-sm:py-3  text-[15px] py-5">
                            A colorful protein-packed power bowl filled with flavorful,
                            meaty grilled satay tofu and an array of vibrant veggies on a
                            bed of fluffy quinoa. Completed with a healthy and delicious
                          satay dipping sauce and crushed roasted peanuts. Delicious!
                        </p>
                        <button className="border max-xxsm:text-[13px] border-white text-black bg-white px-3 py-2 rounded-lg max-sm:py-1">View full recipes</button>
                    </div>
                </div>

                <div className="w-[30%] max-lg:w-[100%] max-md:w-[100%] max-lg:pt-5 max-sm:pt-5">
                    <motion.div 
                    className="flex max-md:hidden flex-col max-lg:grid-cols-4 max-lg:grid max-sm:grid-cols-2 max-md:flex-row justify-around max-md:justify-between h-full"
                    initial="hidden"whileInView
                    ="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.2 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    >
                        {
                            foods.map((food)=>(
                                <div className="flex  max-lg:flex-col max-sm:flex-col max-md:w-[100%] gap-x-4 max items-center">
                                    <img src={food.img} className="rounded-xl w-[100px] max-sm:w-[90%] bg-cover object-cover max-lg:w-[95%]"/>
                                    <p className="max-xxsm:text-[11px] max-sm:text-[13px] ">{food.food}</p>
                                </div>
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Recipe