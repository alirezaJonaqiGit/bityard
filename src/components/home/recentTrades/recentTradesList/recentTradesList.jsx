import { Context } from "../../../context/context";
import { useContext } from "react";
import './recentTradesList.css';

function RecentTradesList() {
    const context = useContext(Context);
    
    let convertMsToTime = (ms) => {
        let date = new Date(ms);
        
        // extract time from date xx:xx:xx AM/PM
        date = date.toLocaleTimeString();
        
        // remove AM/PM from  xx:xx:xx AM/PM
        date = date.split(' ').slice(0, 1).toString();
        return date;
    }
    return ( 
        <>
            {
                context.recentTrades.data.map((trade, i) => {
                    return (
                        <li className="recentTradesListItem" key={i}>
                            <span className={`recentTradesListItem justify-content-start recentTradesListItemPrice  ${trade.side}`} >{trade.price}</span>
                            <span className="recentTradesListItem " >{trade.amount}</span>
                            <span className="recentTradesListItem " >{convertMsToTime(trade.timestamp)}</span>
                        </li>
                    )
                })
            }
        </>
    );
}
export default RecentTradesList;