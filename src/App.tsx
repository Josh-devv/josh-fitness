import { useEffect, useState } from "react"
import Navbar from "./Components/navbar"
import { SelectedPage } from "./shared/types"
import Home from "./Components/Home"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
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
    <div className="app bg-white font-montserrat">
      
      <Navbar 
      top={top}
      selectedPage={selectedPage}
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
    </div>
  )
}

export default App
