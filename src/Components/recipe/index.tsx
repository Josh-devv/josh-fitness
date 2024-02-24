import { RecipeData } from "@/shared/types"
import rec1 from "@/assets/rec1.png"


type Props = {
    foods: RecipeData[]
}

const Recipe = ({foods}: Props) => {
  return (
    <section id="recipe" className="w-[100%] bg-black mx-auto pt-20 max-sm:pt-10 py-8 flex justify-center font-dmsans text-white">
        <div className="w-[95%] max-lg:w-[90%]">
            <div className="w-100%] flex items-center justify-between">
                <p className="text-[25px] font-medium max-sm:text-[15px]">///RECIPES</p>
                <button className="border border-white px-3 py-2 rounded-lg max-sm:py-1">View more recipes</button>
            </div>

            <div className="flex pt-10 max-md:flex-col  justify-between">
                <div className="flex w-[70%] max-sm:flex-col max-md:w-[100%] items-center">
                    <div className="">
                        <img src={rec1}  className="rounded-3xl max-sm:w-[100%] max-lg:w-[280px]"/> 
                    </div>
                    <div className="pl-5 max-sm:pl-0">
                        <p className="text-[25px] max-sm:pt-3 max-sm:text-[20px] font-bold">Protein-packed Power Bowl</p>
                        <p className="w-[300px] max-md:w-[400px] max-sm:text-[13px] max-sm:w-[100%] max-sm:py-3  text-[15px] py-5">
                            A colorful protein-packed power bowl filled with flavorful,
                            meaty grilled satay tofu and an array of vibrant veggies on a
                            bed of fluffy quinoa. Completed with a healthy and delicious
                          satay dipping sauce and crushed roasted peanuts. Delicious!
                        </p>
                        <button className="border border-white px-3 py-2 rounded-lg max-sm:py-1">View full recipes</button>
                    </div>
                </div>

                <div className="w-[30%] max-md:w-[100%] max-md:pt-10 max-sm:pt-5">
                    <div className="flex flex-col max-sm:grid max-sm:grid-cols-2 max-md:flex-row justify-around max-md:justify-between h-full">
                        {
                            foods.map((food)=>(
                                <div className="flex  max-md:flex-col max-md:w-[100%] gap-x-4 max items-center">
                                    <img src={food.img} className="rounded-xl w-[100px] max-md:w-[90%]"/>
                                    <p className="max-sm:text-[13px]">{food.food}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Recipe