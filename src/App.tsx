import { useEffect, useState } from "react"
import Navbar from "./Components/navbar"
import { MerchData, RecipeData, SelectedPage } from "./shared/types"
import Home from "./Components/home/index."
import Workout from "./Components/workout"
import { UserData } from "./shared/types"
import img1 from "@/assets/real.png"
import img2 from "@/assets/real1.png"
import m1 from "@/assets/m1.png"
import rec2 from "@/assets/rec2.png"
import rec3 from "@/assets/rec3.png"
import rec4 from "@/assets/rec4.png"
import rec5 from "@/assets/rec5.png"
import Merch from "./Components/merch"
import Gallery from "./Components/gallery"
import Recipe from "./Components/recipe"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

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
      if(window.scrollY === 0 ){
        setTop(true)
        setSelectedPage(SelectedPage.Home)
      }
      if(window.scrollY !== 0) setTop(false)
    }
    window.addEventListener("scroll", handleScroll)
    return ()=> window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="app h-full bg-black font-montserrat">
      
      <Navbar 
      
      top={top}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Workout users={users}/>     
      <Gallery />
      <Recipe foods={foods}/>
      <Merch items={items}/>
    </div>
  )
}

export default App
