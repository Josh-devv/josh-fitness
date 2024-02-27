import Workout from "@/Components/workout"
import Navbar from "@/navbar"
import { CaroItems, CaroItems1, CaroItems2, users } from "@/shared/data"
import "react-multi-carousel/lib/styles.css";
import { useEffect, useState } from "react"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Caro from "@/shared/Caro";
import Carousels from "@/shared/Carousels";
import Contact from "@/Components/contact";



const WorkoutPage = () => {

    const [top, setTop] = useState<boolean>(true)

    useEffect(()=> {
      const handleScroll = () => {
        if(window.scrollY !== 0) setTop(false)
      }
      window.addEventListener("scroll", handleScroll)
      return ()=> window.removeEventListener("scroll", handleScroll)
    })

  
  return (
    <>
        <Navbar top={top}/>
        <div className="pt-10 ">
            <Workout users={users}/>
        </div>

        <section id="" className="w-[100%] pt-20 max-sm:pt-10 py-8 flex flex-col justify-center items-center font-dmsans text-white  bg-black ">
            <div className="text-[25px] w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[40px] max-sm:text-[20px] font-bold pb-6 max-xxsm:text-[20px]">Beginner Friendly</p>
                <p className="font-normal w-[70%] max-lg:w-[90%] max-sm:w-[95%] pb-5 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-12 container ">
            
  
        
            <Carousels>
            
            {
                CaroItems.map((items)=> (
                   <Caro  items={items}/>
                ))
            }
     
        
        
    </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-6 max-xxsm:text-[20px]">Moderate to advanced</p>
                <p className="font-normal w-[70%] max-lg:w-[90%] max-sm:w-[95%] pb-5 text-[15px]">
                if you're looking for something that pushes you a little harder, try any of these moderate to advanced challenges to help you
progress further.   
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-12 container ">
            
  
        
        <Carousels>
            
                {
                    CaroItems1.map((items)=> (
                       <Caro  items={items}/>
                    ))
                }
         
            
            
        </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-6 max-xxsm:text-[20px]">Strenth training</p>
                <p className="font-normal w-[70%] max-lg:w-[90%] max-sm:w-[95%] pb-5 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs! These have shorter time commitments or have low-impact alternatives    
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-12 container ">
            
  
        
        <Carousels>
            
                {
                    CaroItems2.map((items)=> (
                       <Caro  items={items}/>
                    ))
                }
         
            
            
        </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-6 max-xxsm:text-[20px]">Weight Loss</p>
                <p className="font-normal w-[70%] max-lg:w-[90%] max-sm:w-[95%] pb-5 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-12 container ">
            
  
        
        <Carousels>
            
                {
                    CaroItems.map((items)=> (
                       <Caro  items={items}/>
                    ))
                }
         
            
            
        </Carousels>
     

    
            </div>
            <div className="text-[25px] pt-10 w-[90%] flex justify-center flex-col font-medium max-sm:text-[15px]">
                <p className="w-[90%] self-start text-[35px] max-sm:text-[20px] font-bold pb-6 max-xxsm:text-[20px]">No equipment</p>
                <p className="font-normal w-[70%] max-lg:w-[90%] max-sm:w-[95%] pb-5 text-[15px]">
                Looking to get started on your fitness journey? Try one of these beginner-friendly programs!
                These have shorter time commitments or have low-impact alternatives.     
                </p>
                <button className="w-[15%] max-sm:text-[13px] max-sm:w-[50%] max-lg:w-[30%] font-normal rounded-md py-1 bg-white text-black text-[17px] border">1093+ People Tried</button>
            </div>

            <div className=" pt-12 container ">
            
  
        
        <Carousels>
            
                {
                    CaroItems.map((items)=> (
                       <Caro  items={items}/>
                    ))
                }
         
            
            
        </Carousels>
     

    
            </div>

            <Contact />
            
        </section>
        
    </>
  )
}

export default WorkoutPage