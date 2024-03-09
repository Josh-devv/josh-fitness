
import { useEffect, useState } from "react";
import Navbar from "@/navbar"

import Carousels from "@/shared/Carousels";

import bkg from "@/assets/bkg2.webp"

import { Link } from "react-router-dom";

interface Details {
  image: string;
  title: string;
  id: number;
}

const Recipes = () => {
    const [top, setTop] = useState<boolean>(true)
    const [exercises, setExercises] = useState<Details[]>([]);
  

  useEffect(() => {
    const handleScroll = () => {
        if (window.scrollY !== 0) setTop(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

//const axios = require('axios');



const popu = async()=> {
  const api = await fetch (
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=a4dc4664544245d898cf18da59e87344`
  )
  const data = await api.json()
  setExercises(data.results)
  console.log(data);
  
}

useEffect(()=>{
  popu()
},[])


  return (
    <div className="w-[100%] font-dmsans text-[white]">
         <Navbar top={top}/>
         <div className="">
            <img src={bkg} className="w-[100%] h-[100vh] object-cover bg-cover "/>
       

        <div className="absolute flex justify-center w-[100%] max-sm:top-[40%] top-[50%]">
            <div className="w-[90%]">
                <h1 className="text-[75px] font-bold max-sm:text-[45px]">Healthy foods</h1>
                <p className="text-[20px] max-sm:text-[15px] max-md:w-[70%] max-sm:w-[95%] w-[50%]">
                    Proper nutrition provides our body with the complex of vitamins it needs and makes us feels better
                    in this section, we'll give you the best nutrition...
                </p>
            </div>
        </div>

         </div>
        
       
        <section className="w-[100%]  pt-15 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
               
        <div className="text-[25px] w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[40px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Featured Recipes</p>
                <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>
               <div className="container pt-6">
     <Carousels>
            
            {
                exercises.map((diet) => (
                  <Link key={diet.id} to={`/recipedet/${diet.id}`}>
                    <div className=" flex-col  justify-center">
       
                    <img src={diet.image} alt="slide_image" className="  max-sm:w-[95%] bg-cover max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                    
                    </div>
                  </Link>
                   
                  
                  
                    
                    
                ))
               
               }
              
               
            </Carousels>
       </div>
         
        </section>
        <section className="w-[100%]  pt-15 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
               
        <div className="text-[25px] w-[85%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[40px] max-sm:text-[20px] font-bold pb-2 max-xxsm:text-[20px]">Featured Recipes</p>
                <p className="font-normal w-[70%] max-sm:text-[12px] max-lg:w-[90%] max-sm:w-[97%] pb-2 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>
               <div className="container pt-6">
     <Carousels>
            
     {
                exercises.map((diet) => (
                   
                    <div className=" flex-col  justify-center">
       
                    <img src={diet.image} alt="slide_image" className="  max-sm:w-[95%] bg-cover max-lg:w-[410px] w-[330px] max-md:w-[300px] rounded-3xl" />
                    
                    </div>
                  
                    
                    
                ))
               
               }
              
               
            </Carousels>
       </div>
         
        </section>

    
       
       
       
    </div>
  )
}

export default Recipes