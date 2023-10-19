import "./criticalanalysis.scss";
import { LiaBrainSolid } from "react-icons/lia";
import { BsMic } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { BiLogoProductHunt } from "react-icons/bi";
import { DiCreativecommons } from "react-icons/di";
import { MdLeaderboard } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { BsPersonVcard } from "react-icons/bs";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from "react-router-dom";
const CriticalAnalysis = () => {
  return (
    <>
      <div className="criticalanalysis">
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
        <div className="results">
          <div className="left-bar">
            <div className="part-1">
              <span>Critical analysis</span> <BsFillPersonFill />
              <span>752</span>
            </div>
            <Link to="/aspage">
            <div className="part-2">
              <AiOutlineCheckCircle />
            </div>
            
            </Link>
          </div>
          <Link to="/resultup">
          <div className="right-bar">
            <div className="part-1">Result</div>
            <div className="part-2">
              <AiOutlineCheckCircle />
            </div>
          </div></Link>
        </div>
        <div className="rewards">
          <p>
            Do assignment to polish your skills, earn rewards and referrals
            <strong>...more</strong>
          </p>
        </div>
        <div className="risk_analysis">
          <div className="enterprener">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="enterpreneurship">
            <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="items">
              <div className="item-1">
                <AiOutlineEye /> <span>368k</span>
              </div>
              <div className="item-2">
                <BiMessageRounded /> <span>2,386</span>
              </div>
              <div className="item-3">
                <BsPerson /> <span>752</span>
              </div>
            </div>
          </div>
          <div className="enterprener">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="enterpreneurship">
            <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="items">
              <div className="item-1">
                <AiOutlineEye /> <span>368k</span>
              </div>
              <div className="item-2">
                <BiMessageRounded /> <span>2,386</span>
              </div>
              <div className="item-3">
                <BsPerson /> <span>752</span>
              </div>
            </div>
          </div>
          <div className="enterprener">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="enterpreneurship">
            <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="items">
              <div className="item-1">
                <AiOutlineEye /> <span>368k</span>
              </div>
              <div className="item-2">
                <BiMessageRounded /> <span>2,386</span>
              </div>
              <div className="item-3">
                <BsPerson /> <span>752</span>
              </div>
            </div>
          </div>
          <div className="enterprener">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="enterpreneurship">
            <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="items">
              <div className="item-1">
                <AiOutlineEye /> <span>368k</span>
              </div>
              <div className="item-2">
                <BiMessageRounded /> <span>2,386</span>
              </div>
              <div className="item-3">
                <BsPerson /> <span>752</span>
              </div>
            </div>
          </div>
        </div>
        <div className="description">
          <h3>Description</h3>
        </div>
        <div className="line-part"></div>
        <div className="choose-option">
          <h4>Choose option</h4>{" "}
        </div>
        <div className="token">
          <div className="watch_sec">
            <div className="first">Watch 15 sec ad</div>
            <div className="second">
              <BsPersonVcard />
            </div>
          </div>
          <div className="use_token">
            <div className="first">Use 1 token</div>
            <div className="second">
              <AiOutlineDollar />
            </div>
          </div>
        </div>
        <div className="title">
          <p>Title: "Journey to the Enchanted Forest : </p>
        </div>
        <div className="embark">
          <p>
            A Visual Odysse Embark on a mesmerizing adventure through an
            ethereal realm in "Journey to the Enchanted Forest: A Visual
            Odyssey." This captivating video transports you to a world where
            magic intertwines with nature, where every step unveils breathtaking
            wonders.
          </p>
        </div>
      </div>
    </>
  );
};

export default CriticalAnalysis;
