import HomePage from "./pages/home/homePage";
import { useState, useEffect } from "react";
import { Context } from "./components/context/context";
import { io, Socket } from "socket.io-client";
// import { Main } from "./components/main";


function App() {
  // States:
  let [orderBook, setOrderBook] = useState({ asks: [], bids: [] });
  let [recentTrades, setRecentTrades] = useState({ data: [], lastTrade: {} });

  // context value:
  const contextValue = {
    orderBook,
    recentTrades,
  };

  useEffect(() => {

    const newSocket = io("http://192.168.115.57:3000", {
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
    });

    newSocket.on("BTC-USDT/trade", (e) => {
      let newRecentTrades = { ...recentTrades };
      newRecentTrades.lastTrade = e;
      console.log(e);

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
      </Context.Provider>
    </>
  );
}

export default App;

/*
amount: 1
from: "req.user._id.toString()"
matchedOrderType: "limit"
matchedPrice: 0.0001
order: "0735ca2e-5845-43ae-8509-ffe0eb67d81f"
orderType: "limit"
pair: "BTC-USDT"
price: 0.0001
side: "bid"
state: "done"
timestamp: 1655098722529
to: "req.user._id.toString()"
totalTransferredMoney: 0.0001
*/