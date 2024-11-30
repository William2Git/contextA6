import "./Feature.css";
import axios from "axios";

function Feature(){
    return(
        <div className="featured">

        <div style={{textAlign:"center"}}>
            <br></br>
            <br></br>
            <p1 style={{fontSize:"30px"}}>Plans starting at $6.99/month.</p1>
            <br></br>
            <br></br>
            <h6 style={{fontSize:"30px"}} width={"100%"}>Trending</h6>
        </div>



        <div className="trending">

            <div id="display">

            </div>


        </div>

    </div>
    );
}

export default Feature;