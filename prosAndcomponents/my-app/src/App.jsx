import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
// import Parent from "./components/Parent";
import UsestateHooks from "./components/UsestateHooks";
// import ProductList from "./components/ProductList";
import UseEffectExample from "./components/useEffectExample";
import UseEffectExample1 from "./components/UseEffectExample1";
import EventDemo from "./components/EventDemo";
import Parent from "./components/Parent";
import PanditList from "./components/PanditList";
function App() {
  return (
    <BrowserRouter>
      <Header/>
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
        {/* <UsestateHooks/> */}
        {/* <EventDemo/> */}
       {/* <UseEffectExample/> */}
      {/* <UseEffectExample1/> */}
        {/* <ProductList/> */}
      
    {/* <Parent/> */}
    <PanditList/>

    

    </BrowserRouter>
    
  );
}
export default App;