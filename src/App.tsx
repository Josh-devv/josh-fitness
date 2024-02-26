import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about'; // Correct import name
import WorkoutPage from './pages/workout';



const App: React.FC = ()=> {
  return (
   <div className='bg-black'>
     <Router>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/workoutprograms" element={<WorkoutPage />} />
 </Routes>
  </Router>
   </div>
   
    
    

  )
}

export default App;

