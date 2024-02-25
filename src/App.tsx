import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about'; // Correct import name



const App: React.FC = ()=> {
  return (
   <div className='bg-black'>
     <Router>
   <Routes>
      <Route path="/"    element={<HomePage />} />
      <Route path="/about" element={<About />} />
 </Routes>
  </Router>
   </div>
   
    
    

  )
}

export default App;

