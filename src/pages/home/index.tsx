import { useEffect, useState } from "react"
import Workout from "@/Components/workout"
import { items } from "@/shared/data"
import { foods } from "@/shared/data"
import { users } from "@/shared/data"
import Merch from "@/Components/merch"
import Gallery from "@/Components/gallery"
import Recipe from "@/Components/recipe"
import Navbar from "@/navbar/index"
import Contact from "@/Components/contact"
import Home from "@/Components/home/index."



const HomePage = () => {
    
  const [top, setTop] = useState<boolean>(true)


  useEffect(()=> {
    const handleScroll = () => {
      if(window.scrollY !== 0) setTop(false)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div>
      <Navbar  
      top={top}
      />
      <Home />
      <Workout 
      users={users}
      
      />     
      <Gallery />
      <Recipe 
      foods={foods}
      
      />
      <Merch items={items}/>
      <Contact />
    </div>
  )
}

export default HomePage;