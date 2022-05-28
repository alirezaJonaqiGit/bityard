import './orderBook.css';
import OrderBookTable from './orderBookTable/orderBookTable';

function OrderBook() {
    return ( 
        <>
            <div className="orderBook mh-50">
            
                <header className="px-2 orderBook_header">
                    <strong className="orderBook_headerTitle">order book</strong>
                    <div className='orderBook_tableHeadRow'>
                        <th className="orderBook_tableHead">Price(USDT)</th>
                        <th className="orderBook_tableHead">Amount(BTC)</th>
                        <th className="orderBook_tableHead">total(BTC)</th>
                    </div>
                </header>

                <section className="px-2 orderBook_tableWrapper">
                    <OrderBookTable />
                </section>

                <div className="currentPriceWrapper px-2">
                    <span className='currentPrice'>28899.8</span>
                    <span className='approximatePrice'>28840.84</span>
                </div>

                <section className="px-2 orderBook_tableWrapper">
                    <OrderBookTable />
                </section>


            </div>
        </>
    );
}

export default OrderBook;