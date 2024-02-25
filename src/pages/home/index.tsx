import { useEffect, useState } from "react"
import { MerchData, RecipeData } from "@/shared/types"
import Workout from "@/Components/workout"
import { UserData } from "@/shared/types"
import img1 from "@/assets/real.png"
import img2 from "@/assets/real1.png"
import m1 from "@/assets/m1.png"
import rec2 from "@/assets/rec2.png"
import rec3 from "@/assets/rec3.png"
import rec4 from "@/assets/rec4.png"
import rec5 from "@/assets/rec5.png"
import Merch from "@/Components/merch"
import Gallery from "@/Components/gallery"
import Recipe from "@/Components/recipe"
import Navbar from "@/navbar/index"
import Contact from "@/Components/contact"
import Home from "@/Components/home/index."



const HomePage = () => {
    //const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

    //console.log(selectedPage);
    
  const users: UserData[] = [
    {
      id: 1,
      text: "Beginner Friendly",
      img: img1,
      button: "start today"
    },
    {
      id: 2,
      text: "Moderate to advance",
      img: img2,
      button: "Start Today",

    },
    {
      id: 3,
      text: "Weight Loss",
      img: img1,
      button: "Start Today",
    },
    {
      id: 4,
      text: "No equipment",
      img: img2,
      button: "Start Today",

    },
    {
      id: 5,
      text: "Strength Training",
      img: img1,
      button: "Start Today",

    },
   
  ]

  const items: MerchData[] = [
    {
      item: "Bag",
      img: m1
    },
    {
      item: "Shirt",
      img: m1
    },
    {
      item: "Bottle",
      img: m1
    },
    {
      item: "Shirt",
      img: m1
    },
  ]

  const foods: RecipeData[] = [
    {
      food: "High Protein Recipes",
      img: rec2
    },
    {
      food: "Low Carb Recipes",
      img: rec3
    },
    {
      food: "Dairy Free Recipes",
      img: rec4
    },
    {
      food: "Vegetarian Recipes",
      img: rec5
    },
  ]
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