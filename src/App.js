
// import { createBrowserRouter, createRoutesFromElements, Outlet, Route , RouterProvider} from 'react-router-dom';

import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
// import About from './linkpages/About';
import Contact from './linkpages/Contact';
// import Home from './linkpages/Home';
// import Services from './linkpages/Services';
import Main from './Components/Main';
import Img from './Images/Homeimg.jpg'
import Trip from './Components/Trip'

function App() {
// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path='/' element={<Root/>}>
//     <Route path='/' element={<Home/>}/>
//     <Route path='/about' element={<About/>}/>
//     <Route path='/services' element={<Services/>}/>
//     <Route path='/contact' element={<Contact/>}/>
   
//     </Route>
//   )
// );


  return (
  <>
  
    <Navbar/>
    <Main clName="main" mainimg={Img} title="Travel with no regrets" text="Plan your next Journey"
    btntext="Plan with Us" url="/" btnclass="show"/>
    <Trip/>
    <Contact/>
    <Footer/>
</>
);
}
  {/* <RouterProvider router={router}/> */}
  
  // </>
  


// const Root = ()=>{
//   return(
//     <>

// <div>
//   <Outlet/>
// </div>
// </>
//   )
// }

export default App;
