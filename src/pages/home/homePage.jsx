import Form from "../../components/home/form/from";
import Nav from "../../components/home/nav";
import OrderBook from "../../components/home/orderBook/orderBook";
import './homePage.css';

function HomePage() {
    return ( 
        <>
            <div className="container-fluid">
                <main className="main row">
                    <div className="col-3 b" style={{maxWidth:'310px',minHeight: '100vh'}}>
                        <aside className="element-spot-quote">
                            0
                        </aside>
                    </div>

                    <article className="col-6 flex-grow-1">
                        <section className="b"  style={{minHeight: '50vh'}}>
                            Indicator
                        </section>
                        <section className="">
                            <Form />   
                        </section>
                    </article>
                    <aside className="col-3 px-1 border" style={{maxWidth:'300px',minHeight: '100vh', background: '#f8f8f8'}}>
                        <OrderBook />
                    </aside>
                </main>
            </div>
        </>
    );
}

export default HomePage;