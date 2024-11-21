import "./Hero.css";
import "./hero.png";


function Hero() {
    return (
        <div className="hero">
            <img src="hero.png"></img>

            <div id="gradient"></div>

            <div className="text">
                <h2><b>Unlimited movies, TV shows and more</b></h2>
                <p >Stream wherever, whenever and however you want</p>
                <p>Jump into the action now. Enter your email to create or renew
                    your membership</p>
                <div>
                    <input id="bar" type="text" placeholder="Email Address"></input>
                    <button id="started">Get Started </button>
                </div>

            </div>



        </div>
    );
}

export default Hero;