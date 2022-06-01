import HomePage from "./pages/home/homePage";
import { useState, useEffect } from "react";
import { Context } from "./components/context/context";
import { io, Socket } from "socket.io-client";
// import { Main } from "./components/main";


function App() {
  // States:
  let [orderBook, setOrderBook] = useState({ asks: [], bids: [] });
  let [recentTrades, setRecentTrades] = useState({ data: [] });

  // context value:
  const contextValue = {
    orderBook,
    recentTrades,
  };

  useEffect(() => {
    const newSocket = io("http://192.168.115.46:3000", {
      cors: {
        withCredentials: true,
        extraHeaders: {
          "Access-Control-Allow-Origin": "192.168.115.161",
        },
        origin: "*",
      },
    });

    newSocket.on("BTC-USDT", (e) => {
      let newState = Object.assign({ ...orderBook }, e.data);
      setOrderBook(newState);
      console.log(e);
    });

    newSocket.on("trade", (e) => {
      let newRecentTrades = { ...recentTrades };

      if (newRecentTrades.data.length >= 200) {
        newRecentTrades.data.pop();
      }
      if (!(newRecentTrades.data.includes(e))) {
        newRecentTrades.data.unshift(e);
      }
      setRecentTrades(newRecentTrades);
    });
  }, []);

  return (
    <>
      <Context.Provider value={contextValue}>
        <HomePage />
        {/* <Main /> */}
      </Context.Provider>
    </>
  );
}

export default App;
