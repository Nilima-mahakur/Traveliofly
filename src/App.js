
import { createBrowserRouter, createRoutesFromElements, Outlet, Route , RouterProvider} from 'react-router-dom';

import './App.css';
import About from './linkpages/About';
import Contact from './linkpages/Contact';
import Home from './linkpages/Home';
import Services from './linkpages/Services';


function App() {
const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path='/' element={<Root/>}>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/services' element={<Services/>}/>
    <Route path='/contact' element={<Contact/>}/>
   
    </Route>
  )
);


  return (
  <>

  <RouterProvider router={router}/>
  </>
  );
}

const Root = ()=>{
  return(
    <>

<div>
  <Outlet/>
</div>
</>
  )
}

export default App;
