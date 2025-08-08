import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './componants/jsxfiles/Home';
import Navbar from './componants/jsxfiles/Navbar';
import S1 from './componants/jsxfiles/S1';
import Blogs from './componants/jsxfiles/Blogs';
import S2 from './componants/jsxfiles/S2';
import S3 from './componants/jsxfiles/S3';
import S4 from './componants/jsxfiles/S4';
import Portfolio from './componants/jsxfiles/Portfolio';


function App() {
  return (
    <>
      
<Navbar/>
      <Routes>
       
       <Route path='/' element={<Home/>}/>  
       <Route path='/s1' element={<S1/>}/>  
       <Route path='/s2' element={<S2/>}/>
       <Route path='/s3' element={<S3/>}/>
        <Route path='/s4' element={<S4/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
       <Route path='/blogs' element={<Blogs/>}/>   
            </Routes>
    </>
  );
}

export default App;
