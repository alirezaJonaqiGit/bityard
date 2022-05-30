import { Context } from '../../context/context';
import OrderBookTable from './orderBookTable/orderBookTable';
import { useContext } from 'react';
import './orderBook.css';

function OrderBook() {
    const context = useContext(Context);
    return ( 
        <>
            <div className="orderBook mh-50">
            
                <header className="px-2 orderBook_header">
                    <strong className="orderBook_headerTitle">order book</strong>
                    <div className='orderBook_tableHeadRow'>
                        <span className="orderBook_tableHead">Price(USDT)</span>
                        <span className="orderBook_tableHead">Amount(BTC)</span>
                        <span className="orderBook_tableHead">total(BTC)</span>
                    </div>
                </header>

                <section className="px-2 orderBook_tableWrapper">
                    <OrderBookTable type="asks" data={context.state.asks} />
                </section>

                <div className="currentPriceWrapper px-2">
                    <span className='currentPrice'>28899.8</span>
                    <span className='approximatePrice'>28840.84</span>
                </div>

                <section  className="px-2 orderBook_tableWrapper">
                    <OrderBookTable type="bids" data={context.state.bids} />
                </section>


            </div>
        </>
    );
}

export default OrderBook;