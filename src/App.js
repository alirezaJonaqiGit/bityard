import HomePage from "./pages/home/homePage";
import { useContext, useEffect, useState, createContext } from "react";

function App() {

  // State:
  let [state, setSate] = useState(true);

  // Context:
  const PricesContext = createContext();

  useEffect(() => {
    
  }, []);

  return (
    <>
      <PricesContext.Provider value={state}>
        <HomePage />
      </PricesContext.Provider>
    </>
  );
}

export default App;
