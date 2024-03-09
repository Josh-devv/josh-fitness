 //const [top, setTop] = useState<boolean>(true)
import ii from "@/assets/bkg.webp"

import Navbar from "@/navbar"
import { useEffect, useState } from "react"
import time from "@/assets/time.png"

import Contact from "@/Components/contact"
import { useParams } from "react-router-dom"



type Params = {
    id: string;
}

interface Details {
    title: string;
    instructions: string;
    image: string;
    id:number;
}

const RecipeDetails = () => {
    const [top, setTop] = useState<boolean>(true)
    const { id } = useParams<Params>();
    console.log(id);
    
    const [exerciseDetails, setExerciseDetails] = useState<Details[]>([])

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY !== 0) setTop(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const popu = async()=> {
        const api = await fetch (
          `https://api.spoonacular.com/recipes/${id}/information?apiKey=a4dc4664544245d898cf18da59e87344`
        )
        const data: Details = await api.json()
        setExerciseDetails([data])
        
        console.log(data);
        
        
      }
      
      useEffect(()=>{
        popu()
      },[])


  return (
    <div className="font-dmsans">
        <Navbar top={top}/>
        {
            exerciseDetails.map((detail)=> (
                  <div className="w-[100%] ">
            
            <div className="relative w-[100%]  flex h-[100vh]">
            <div className="absolute top-0 left-0 w-full h-[100vh] bg-black z-20 opacity-60"></div>
            <img src={ii} className="absolute h-[100vh] bg-cover object-cover w-[100%]"/>
            <div className="absolute  w-[100%] justify-center flex top-[40%] h-[100%]">
                <div className="w-[90%] z-30">
                    <h1 className="text-white max-sm:text-[50px] max-xxsm:text-[30px] font-bold  text-[70px]">{detail.title}</h1>
                    <p className="text-white max-xxsm:text-[12px] max-sm:text-[15px] max-md:w-[100%] max-lg:w-[75%] text-[20px] w-[50%]">A fun twist on a classic! All the flavours you know and love from 
                        a falafel in the form of waffle, perfectly crispy with no deep-frying 
                        involved. Served with cucumber tomato salad cilantro yogurt sauce for a 
                        light and refreshing brunch dish.</p>
                    <img src={time} className="w-[120px] max-sm:w-[80px] pt-5"/>
                </div>
                
            </div>
        </div> 

        <section className="h-[100%] pt-10 w-[100%] justify-center flex  text-white">
        <div className="w-[90%] flex flex-col justify-between">
        

            <div className="w-[100%] max-md:flex-col flex justify-between">
                <div className="w-[70%] max-md:py-2 max-md:w-[100%] max-lg:w-[60%]">
                    <h1 className="text-[30px] font-bold">French Toast</h1>
                    <p className="w-[100%] max-xxsm:text-[12px] text-[15px] py-5">A fun twist on a classic! All the flavours you know and love from a falafel in the form of waffle, perfectly crispy with no deep-frying involved. Served with cucumber tomato salad cilantro yogurt sauce for a light and refreshing brunch dish.</p>
                    <img src={detail.image} className=""/>
                </div>

                <div className="w-[30%]  max-xxsm:text-[12px] max-md:py-2 max-md:w-[60%] max-sm:w-[100%]">
                <h1 className="text-[30px] max-sm:text-[25px] font-bold">Ingredients</h1>
                <div className="flex py-3 justify-between">
                    <span>White Bread</span>
                    <span>250g</span>
                </div>
                <div className="flex py-3 justify-between">
                    <span>Butten</span>
                    <span>1 tsp</span>
                </div>
                <div className="flex py-3 justify-between">
                    <span>Milk</span>
                    <span>650g</span>
                </div>
                <div className="flex py-3 justify-between">
                    <span>Eggs</span>
                    <span>50g</span>
                </div>
                <div className="flex py-3 justify-between">
                    <span>Vanilla and Cinnamon</span>
                    <span>650g</span>
                </div>
                <div className="flex py-3 justify-between">
                    <span>Salt</span>
                    <span>1 tsp</span>
                </div>
                </div>
            </div>

            <div className="w-[80%] max-lg:w-[100%] pt-6">
                <h1 className="text-[30px] py-2 max-sm:text-[25px] font-bold">
                    How To Make French Toast
                </h1>
                <p>Every home cook has their own twist on basic French toast, but most variations contain the following ingredients:</p>
                <ul className="pl-6 max-xxsm:text-[12px]">
                    <li className="py-1 ">{detail.instructions}</li>
                </ul>
            </div>
        </div>
            
        </section>
        </div>
            ))
        }
      

        <Contact />
       
    </div>
  )
}

export default RecipeDetails