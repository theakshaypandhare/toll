import "./resultup.scss";
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
const ResultUp = () => {
    return (
      <>
      <div className="resultup">
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
          <div className="right-bar">
            <div className="part-1">Result</div>
            <div className="part-2">
              <AiOutlineCheckCircle />
            </div>
          </div>
        </div>
        <div className="square">
            <div className="square_1">
                <div className="circle">
                    <div className="part-1">
                        <div className="first"><button>1</button></div>
                        <div className="second"><button>2</button></div>
                    </div>
                    <div className="part-2"></div>
                </div>
                <div className="pointer">
                    <div className="points">
                        <h6> Points Scored </h6>
                        <button>82</button>
                    </div>
                    <div className="rank">
                        <h6>Rank</h6>
                        <button>182</button>
                    </div>
                </div>
            </div>
        </div>

      </div>
      </>
       );
    };
    
    export default ResultUp;