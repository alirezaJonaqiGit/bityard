import Forms from "../../components/home/form/from";
import Nav from "../../components/home/nav";
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
                        <section className="b"  style={{minHeight: '500px'}}>
                            Indicator
                        </section>
                        <section className="">
                            <Forms />   
                        </section>
                    </article>
                    <aside className="col-3 b" style={{maxWidth:'300px',minHeight: '100vh'}}>
                        0
                    </aside>
                </main>
            </div>
        </>
    );
}

export default HomePage;