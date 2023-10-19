import "./solve.scss";
import photo1 from "../../assets/icons/brain-21 1.png";
import photo2 from "../../assets/icons/msg.png";
import photo3 from "../../assets/icons/mic.png";
import photo4 from "../../assets/icons/seen.webp";
import photo5 from "../../assets/icons/sharee.jpg";
import bold1 from "../../assets/icons/Group-1.png";
import bold2 from "../../assets/icons/2h7udjui.png";
import bold3 from "../../assets/icons/512x512bb.jpg";
import bold4 from "../../assets/icons/music.webp";
import photos from "../../assets/icons/mic.png";
import { AiFillContacts } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
const Solve = () => {
  return (
    <>
      <div className="Solve">
        <div className="embed">
          <div className="enter"></div>

          <div className="enter2">
            <div className="talent">
              <img src={photo1} alt="" />
              <p>1.2k</p>
            </div>

            <div className="sms">
              <img src={photo2} alt="" />
              <p>1k</p>
            </div>

            <div className="mic">
              <img src={photo3} alt="" />
            </div>

            <div className="seen">
              <img src={photo4} alt="" />
              <p>28.7k</p>
            </div>
            <div className="share">
              <img src={photo5} alt="" />
            </div>
          </div>
        </div>
        {/* ..........part2......... */}
        <div className="trait">
          <div className="trait1">
            <p>Traits : </p>
          </div>
          <div className="creativity">
            <div className="bold">
              <img src={bold1} alt="" />
              <p>Problem Solving</p>
            </div>
            <div className="robato">
              <img src={bold2} alt="" />
              <p>Creativity</p>
            </div>
            <div className="balsiq">
              <img src={bold3} alt="" />
              <p>Leadership</p>
            </div>
            <div className="music">
              <img src={bold4} alt="" />
              <p>Leadership</p>
            </div>
          </div>
        </div>
        <div className="markk">
          <div className="sidebar1">
            <div className="sec1">
              <p>Critical analysis</p>
            </div>
            <div className="sec2">
              <AiFillContacts />
            </div>
            <div className="sec3">
              <p>752</p>
            </div>
            <div className="sec4">
             <AiOutlineCheckCircle/>
            </div>
          </div>
          <div className="sidebar2">
            <div className="sec5">
              <p>Result</p>
            </div>
            <div className="sec6">
              < AiOutlineCheckCircle/>
            </div>
          </div>
        </div>
        <div className="luck">
          <div className="champ">
            <p>Good luck champ</p>
          </div>
          <div className="champ1">
            <p>Total question</p>
            <button>2</button>
          </div>
          <div className="champ2">
            <p>Total points</p>
            <button>100</button>
          </div>
          <br />

          <div className="min">
            <div className="min1">
              <div className="slash1">
                <p>Content and information</p>
              </div>
              <div className="slash2">
                <p>30</p>
              </div>
            </div>
            <div className="min2">
              <div className="slash3">
                <p>Content and information</p>
              </div>
              <div className="slash4">
                <p>30</p>
              </div>
            </div>
          </div>
          <div className="hour">
            <div className="hour1">
              <div className="cash1">
                <p>Content and information</p>
              </div>
              <div className="cash2">
                <p>30</p>
              </div>
            </div>
            <div className="hour2">
              <div className="cash3">
                <p>Content and information</p>
              </div>
              <div className="cash4">
                <p>30</p>
              </div>
            </div>
          </div>
          <div className="arrow">
            <div className="combo">
              <div className="milisec">
                <div className="timeset"><BiTimeFive/></div>
                <p>120 sec /  300 sec</p>
              </div>
              <div className="milisec2">
                
              </div>
            </div>
            <div className="twice">
              <div className="console">
                <div className="console1">
                  <p>1</p>
                </div>
                <div className="console2">
                  <p>2</p>
                </div>
              </div>
              <div className="with"></div>
            </div>
            <div className="graph">
              <p>Explain the concept of supply and demand in economics</p>
            </div>
            <div className="graph1"><p>
              Supply and demand are fundamental concepts in economics. Supply
              refers to the quantity of a product or service that producers are
              willing to provide, while demand represents the quantity that
              consumers are willing to purchase.</p>
              <div className="submit2">
                <button>Submit</button>
              </div>
            </div>
            <div className="speak">
                <input type="text" placeholder="Type text here or use audio button to speak" />
                <img src={photos} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Solve;
