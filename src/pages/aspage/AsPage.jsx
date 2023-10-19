import "./aspage.scss";
import { LiaBrainSolid } from "react-icons/lia";
import { BiMessageRounded } from "react-icons/bi";
import { BsMic } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { BiLogoProductHunt } from "react-icons/bi";
import { DiCreativecommons } from "react-icons/di";
import { MdLeaderboard } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";
import { LiaStickyNoteSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
const AsPage = () => {
  return (
    <>
      <div className="aspage">
        <div className="video"></div>
        <div className="icons">
          <div className="icon1">
            <LiaBrainSolid /> <span> 1.2k</span>
          </div>
          <div className="icon2">
            <BiMessageRounded /> <span>1k</span>
          </div>
          <div className="icon3">
            <BsMic />
          </div>
          <div className="icon4">
            <FaRegEye /> <span>28.7k</span>
          </div>
          <div className="icon5">
            <BsShare />
          </div>
        </div>
        <div className="trait">
          <span>Traits : </span>
          <div className="common">
            <div className="first">
              <BiLogoProductHunt />
              <span>Problem Solving</span>
            </div>
            <div className="second">
              <DiCreativecommons />
              <span>Creativity</span>
            </div>
            <div className="third">
              <MdLeaderboard />
              <span>Leadership</span>
            </div>
            <div className="fourth">
              <BsMusicNoteBeamed />
              <span>Music</span>
            </div>
          </div>
        </div>
        <div className="result-s">
          <div className="left-bar">
            <div className="part-1">
              <span>Critical analysis</span> <BsFillPersonFill />
              <span>752</span>
            </div>
            <div className="part-2">
              <AiOutlineCheckCircle />
            </div>
          </div>
          <Link to="/resultup">
          <div className="right-bar">
            <div className="part-1">Result</div>
            <div className="part-2">
              <AiOutlineCheckCircle />
            </div>
          </div>
          </Link>
        </div>
        <div className="box">
          <div className="good_luck">
            <h5>Good luck champ</h5>
          </div>
          <div className="total">
            <div className="total_question">
              <h5>Total question</h5>
              <button>2</button>
            </div>
            <div className="total_points">
              <h5>Total points</h5>
              <button>100</button>
            </div>
          </div>
          <div className="content">
            <div className="first">
              <h5>Content and information</h5> <h5>30</h5>
            </div>
            <div className="first">
              <h5>Content and information</h5> <h5>30</h5>
            </div>
            <div className="first">
              <h5>Content and information</h5> <h5>20</h5>
            </div>
            <div className="first">
              <h5>Content and information</h5> <h5>20</h5>
            </div>
          </div>
          <div className="inner_box">
            <div className="layer_1">
              <div className="side-1">
                <BiTimeFive /> <span>120 sec / 300 sec</span>
              </div>
              <div className="side-2">
                <AiOutlineReload /> <LiaStickyNoteSolid />
              </div>
            </div>
            <div className="layer_2"></div>
            <div className="layer_3">
              <p>Explain the concept of supply and demand in economics</p>
            </div>
            <div className="layer_4">
              <p>
                Supply and demand are fundamental concepts in economics. Supply
                refers to the quantity of a product or service that producers
                are willing to provide, while demand represents the quantity
                that consumers are willing to purchase.
              </p>
            </div>
            <div className="layer_5"><button>Submit</button></div>
            <div className="layer_6">
              <div className="inner">
              <span><BsMic /></span>
              <input type="text" placeholder="Type text here or use audio button to speak"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AsPage;
