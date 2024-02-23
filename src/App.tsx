import { useEffect, useState } from "react"
import Navbar from "./Components/navbar"
import { SelectedPage } from "./shared/types"
import Home from "./Components/home/index."
import Workout from "./Components/workout"
import { UserData } from "./shared/types"
import img1 from "@/assets/real.png"
import img2 from "@/assets/real1.png"


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const users: UserData[] = [
    {
      id: 1,
      text: "Pre-workoyt session",
      img: img1

    },
    {
      id: 2,
      text: "Pre-workoyt session",
      img: img2

    },
    {
      id: 3,
      text: "Pre-workoyt session",
      img: img1

    },
    {
      id: 4,
      text: "Pre-workoyt session",
      img: img2

    },
    {
      id: 5,
      text: "Pre-workoyt session",
      img: img1

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
    </div>
  )
}

export default App
