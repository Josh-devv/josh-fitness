import { useEffect, useState } from "react"
import Navbar from "./Components/navbar"
import { MerchData, SelectedPage } from "./shared/types"
import Home from "./Components/home/index."
import Workout from "./Components/workout"
import { UserData } from "./shared/types"
import img1 from "@/assets/real.png"
import img2 from "@/assets/real1.png"
import m1 from "@/assets/m1.png"
import m2 from "@/assets/m2.png"
import m3 from "@/assets/m3.png"
import m4 from "@/assets/m4.png"
import Merch from "./Components/merch"


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
  const [top, setTop] = useState<boolean>(true)


  //for the navbar effect
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
      <Merch items={items}/>
    </div>
  )
}

export default App
