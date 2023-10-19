import "./leadvalution.scss";
import { BiArrowBack } from "react-icons/bi";
import kingcup from "../../assets/icons/cup.png";
import community from "../../assets/icons/group 1.png";
const Leadvalution = () => {
    return (
      <>
        <div className="leadvalution">
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
                    <h6>Rank</h6>
                    <h6>Winnings</h6>
                </div>
                <div className="down"></div>
                <div className="one">
                    <h6># 1</h6>
                    <h6>10,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 2</h6>
                    <h6>8,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 3</h6>
                    <h6>6,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 4</h6>
                    <h6>5,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 5</h6>
                    <h6>4,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 6</h6>
                    <h6>3,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 7</h6>
                    <h6>2,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 8</h6>
                    <h6>1,000</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 9</h6>
                    <h6>900</h6>
                </div>
                <div className="one-line"></div>
                <div className="one">
                    <h6># 10</h6>
                    <h6>800</h6>
                </div>
                <div className="one-line"></div>
            </div>
            <div className="last-line">
                <div className="line"></div>
            </div>









        </div>




      </>
      );
    };
    
    export default Leadvalution;