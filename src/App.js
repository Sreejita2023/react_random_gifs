import react from "react";

import Head from "./components/Head"
import Random from "./components/Random";
import Customize from "./components/Customize";

export default function App() {
  return <div className="background w-full min-h-screen max-h-max flex-col items-center  ">
      <div className="py-4 w-full"><Head/></div>
      <div><Random/></div>
      <div> <Customize/> </div>
  </div>;
}
