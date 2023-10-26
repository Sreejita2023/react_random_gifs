import react from "react";


import Random from "./components/Random";
import Customize from "./components/Customize";

export default function App() {
  return <div className="background w-full h-screen ">
      <div>RANDOM GIFS</div>
      <div><Random/></div>
      <div> <Customize/> </div>
  </div>;
}
