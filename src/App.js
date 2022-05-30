import HomePage from "./pages/home/homePage";
import { useState, useEffect } from "react";
import { Context } from "./components/context/context";
import { io, Socket } from "socket.io-client";


function App() {

  // State:
  let [state, setState] = useState({asks: [], bids: []});
  

  // const socket = io.connect('http://192.168.115.46:3000');
  useEffect(() => {

    const newSocket = io("http://192.168.115.46:3000", {
      cors: {
        withCredentials: true,
        extraHeaders: {
          "Access-Control-Allow-Origin": "192.168.115.161",
        },
        origin: '*'
      }
    });
    newSocket.on('BTC-USDT', (e) => {
      
      let newState = Object.assign({...state}, e.data);
      setState(newState);
      console.log(e)
    });

  }, []);

  return (
    <>
      <Context.Provider value={{state, setState}}>
        <HomePage />
      </Context.Provider>
    </>
  );
}

export default App;
