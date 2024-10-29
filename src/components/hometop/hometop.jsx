import './hometop.css';
import scrollImg from './img/scroll-down.gif';

function HomeTop() {
    return (
        <div>
            <section className="top">
                <div className="container">
                    <div className="top__inner">
                        <h1 className="top__title">We sell expertise, you gain comfort</h1>
                        <div className="scroll">
                            <img className="scroll-img" src={scrollImg} alt=""/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default HomeTop;