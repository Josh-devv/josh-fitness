import Navbar from "@/navbar";
import { useEffect, useState } from "react";
import bg from "@/assets/about.png"
import smile from "@/assets/smile.png"
import Contact from "@/Components/contact";

const About = () => {
  
  const [top, setTop] = useState<boolean>(true)

  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY !== 0) setTop(false)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="bg-black ">
      <div className="h-[10vh]">
        <Navbar top={top} />
      </div>
      
<div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      <section className="bg-cover  flex  h-[90vh] justify-center w-[100%] bg-center font-dmsans text-white" style={{ backgroundImage: `url(${bg})` }}>
      
      <div className="w-[100%] max-lg:hidden text-white  flex justify-center absolute top-[85%] z">
        <div className="w-[95%] justify-evenly flex">
          <div className="w-[17%] rounded-3xl py-4 flex flex-col justify-center items-center bg-neutral-700">
           <img src={smile} className="w-[80px]"/>
           <p className="text-[12px] pt-3 w-[45%] text-center font-dmsans">
              1000+ Being physically active can improve your brain health, help manage weight,
           </p> 
        </div>
        <div className="w-[17%] rounded-3xl  flex flex-col justify-center items-center bg-neutral-700">
           <img src={smile} className="w-[80px]"/>
           <p className="text-[12px] pt-3 w-[45%] text-center font-dmsans">
              1000+ Being physically active can improve your brain health, help manage weight,
           </p> 
        </div>
        <div className="w-[17%] rounded-3xl flex flex-col justify-center items-center bg-neutral-700">
           <img src={smile} className="w-[80px]"/>
           <p className="text-[12px] pt-3 w-[45%] text-center font-dmsans">
              1000+ Being physically active can improve your brain health, help manage weight,
           </p> 
        </div>
        </div>
        

        
      </div>
        <div className="pt-20 w-5/6 z-20 max-lg:w-[90%]">
          <p className="text-[5vw] max-lg:text-[6vw] max-sm:text-[8vw] max-md:text-[7vw]">Get more out of your</p>
          <p className="text-[5vw] font-bold max-sm:text-[9vw] max-lg:text-[6vw] max-md:text-[7vw]">Fitness Journey</p>
          <p className="py-4">Join the community to track your progress</p>
          <p className="w-[60%] max-lg:w-[80%] max-md:w-[100%]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
           accusantium doloremque laudantium, totam rem aperiam, eaque ipsa 
           quae ab illo inventore veritatis et quasi architecto beatae vitae 
           dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          </p>
          <button className="bg-blue-600 mt-4 rounded-md text-white px-3 py-2">Create Account</button>
        </div>
      
      
      
      </section>

      <div className="pt-32 max-lg:pt-5">
        <Contact />
      </div>
      
      
    </div>
  )
}

export default About