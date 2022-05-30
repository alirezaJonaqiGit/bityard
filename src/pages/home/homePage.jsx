import Form from "../../components/home/form/from";
import Nav from "../../components/home/nav";
import OrderBook from "../../components/home/orderBook/orderBook";
import './homePage.css';
import { useContext } from "react";
import { Context } from "../../components/context/context";
import data from "../../data";

function HomePage() {
    const context = useContext(Context);

    return (
      <>
        <div className="container-fluid">
          <main className="main row">

            <div
              className="col-3 b"
              style={{ maxWidth: "310px", minHeight: "100vh" }}
            >
              <aside className="element-spot-quote">
                ASIDE
              </aside>
            </div>


            <article className="col-6 flex-grow-1">
              <section className="b" style={{ minHeight: "50vh" }}>
                Indicator
              </section>
              <section className="">
                <Form />
              </section>
            </article>


            <aside
              className="col-3 px-1 border"
              style={{
                maxWidth: "300px",
                minHeight: "100vh",
                background: "#f8f8f8",
              }}
            >
              <OrderBook />
            </aside>


          </main>
        </div>
      </>
    );
}

export default HomePage;