import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom';
import HomePage from './pages/home';
import About from './pages/about'; // Correct import name
import WorkoutPage from './pages/workout';
import Challenge from './pages/challenge';
import Recipes from './pages/recipe';
import RecipeDetails from './pages/recipedet';
import Store from './pages/store';



const App: React.FC = ()=> {
  return (
   <div className='bg-black'>
     <Router>
   <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/workoutprograms" element={<WorkoutPage />} />
      <Route path="/challenge/:id" element={<Challenge />} />
      <Route path="/recipes" element={<Recipes />} />
      <Route path="/recipedet/:id" element={<RecipeDetails />} />
      <Route path="/store" element={<Store />} />

 </Routes>
  </Router>
   </div>
   
    
    

  )
}

export default App;

