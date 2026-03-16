import { useNavigate } from "react-router-dom";

function Home() {
  const navigate =useNavigate();
  const btnAbout =()=>{
    navigate('/about')
  }
  const btnLogin =()=>{
    navigate('/login');
  }
  return (
    <div>
      <h1  align="center">welocome to our website</h1>
    <h2 align="center"> Home Page</h2>
     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit cum, atque optio nisi fugit rerum maxime molestiae ratione illum quaerat architecto nesciunt iusto et nemo voluptatem. Sed excepturi consequatur commodi.
 </p> 
  <button onClick={btnLogin}>Login</button>
  <button onClick={btnAbout}>About</button>
 </div>
  )
}

export default Home
