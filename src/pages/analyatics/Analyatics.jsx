import "./analyatics.scss";
import { BiArrowBack } from "react-icons/bi";
import kingcup from "../../assets/icons/cup.png";
import community from "../../assets/icons/group 1.png";
import media from "../../assets/icons/Group 48095802 (1).png";
const Analyatics = () => {
    return (
      <>
       <div className="analyatics">
            <div className="back_blue">
                <div className="first-1">
                     <div className="svg-arrow"><BiArrowBack/></div>
                     <div className="heading"><h6>Leaderboard Valuation</h6> </div>
                </div>
                <div className="first-2">
                    <div className="one">
                        <img src={kingcup} alt="" />
                        <span><h6>Prize Pool</h6></span>
                        <span><h5>2,00,000</h5></span>
                    </div>
                    <div className="two">
                        <div className="ok"><img src={community} alt="" /></div>
                        <span><h6>Followers</h6></span>
                        <span><h5>1,70,000</h5></span>
                    </div>
                </div>
                <div className="first-3">
                    <div className="win"><button>Winnings</button></div>
                    <div className="lead-board"><button>Leaderboard</button></div>
                </div>
            </div> 
            <div className="part">
                <div className="up"></div>
                <div className="rank">
                    <h6>Name</h6>
                    <h6>Points</h6>
                    <h6>Rank</h6>
                </div>
                <div className="down"></div>
                <div className="one-c">
                    <h6>Keshav K</h6>
                    <h6>198</h6>
                    <h6># 18</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Akshay</h6>
                    <h6>308</h6>
                    <h6># 1</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Rehan</h6>
                    <h6>306</h6>
                    <h6># 2</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Pranav</h6>
                    <h6>305</h6>
                    <h6># 3</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Prajwal</h6>
                    <h6>303</h6>
                    <h6># 4</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Suraj</h6>
                    <h6>301</h6>
                    <h6># 5</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Sam</h6>
                    <h6>298</h6>
                    <h6># 6</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Karan</h6>
                    <h6>296</h6>
                    <h6># 7</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Sujay</h6>
                    <h6>291</h6>
                    <h6># 8</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6>Vishal</h6>
                    <h6>288</h6>
                    <h6># 9</h6>
                </div>
                <div className="one-line"></div>
            </div>
            <div className="part-1">
                <h5>Analytics</h5>
            </div>
            <div className="part-2">
                <div className="graph"></div>
                <div className="grid-container">
                    <div className="grid-1">
                        <h5>600</h5>
                        <h6>Points</h6>
                    </div>
                    <div className="grid-2">
                        <img src={media} alt="" />
                    </div>
                    <div class="grid-3">
                        <h5>Total Increment</h5>
                        <h6>March,2023</h6>
                    </div>
                    <div class="grid-4">
                        <h6>Last Month</h6>
                        <h5>+24%</h5>
                    </div>
                </div>
            </div>
            <div className="part-3">
                <div className="line"></div>
            </div>






        </div>
      
      </>
      );
    };
    
    export default Analyatics;