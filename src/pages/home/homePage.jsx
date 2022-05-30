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
        <nav
          className="navigation bg-white mb-2 py-3 text-center shadow shadow-sm"
          style={{ borderBottom: "1px solid #0002" }}
        >
          Navigaiton
        </nav>
        <div className="container-fluid">
          <main className="main row">
            <article className="col-6 b flex-grow-1">
              <section
                className="border rounded bg-white h-100"
                style={{ alignSelf: "flex-start" }}
              >
                Indicator
              </section>
              {/*  */}
            </article>

            <div className="col-6" style={{ maxWidth: "550px" }}>
              <div className="container-fluid px-3">
                <div className="row">
                  <aside
                    className="col-6 px-1"
                    style={{
                      maxWidth: "300px",
                      background: "#fff",
                      border: "1px solid #eee",
                    }}
                  >
                    <OrderBook />
                  </aside>

                  <div className="col-6" style={{ maxWidth: "300px" }}>
                    <div className="h-100" style={{paddingLeft: '.5rem'}}>
                      <aside className="element-spot-quote h-100 bg-white border">Recent Trades</aside>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-6 mt-2 border" style={{marginLeft: 'auto', maxWidth: '535px'}}>
                <section className="">
                  <Form />
                </section>
              </div>
            </div>

          </main>
        </div>
      </>
    );
}

export default HomePage;