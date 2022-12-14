import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  
  const topics = ['ThreeJS', 'NextJS', 'GLSL Shaders' ];

  return(
    <>
      <Navbar topics={topics} />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;