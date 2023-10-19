import "./result.scss";
import knowledge from "../../assets/icons/brain-21 1.png";
import message from "../../assets/icons/msg.png";
import hello from "../../assets/icons/mic.png";
import see from "../../assets/icons/seen.webp";
import send from "../../assets/icons/sharee.jpg";
import think1 from "../../assets/icons/Group-1.png";
import tecnic2 from "../../assets/icons/2h7udjui.png";
import leader3 from "../../assets/icons/512x512bb.jpg";
import music1 from "../../assets/icons/music.webp";
import { AiFillContacts } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
////import { BiTimeFive } from "react-icons/bi";

const Result = () => {
    return (
      <>
    <div className="Result">
            
        <div className="back-ground">
            <div className="back-side"></div>

            <div className="back-side2">
                <div className="knowledge">
                 <img src={knowledge} alt="" />
                 <p>1.2k</p>
                </div>

                <div className="message">
                <img src={message} alt="" />
                <p>1k</p>
                </div>

                <div className="hello">
                <img src={hello} alt="" />
                </div>

                <div className="see">
                <img src={see} alt="" />
                <p>28.7k</p>
                </div>
                
                <div className="send">
                <img src={send} alt="" />
                </div>
            </div>
        </div>
        {/* ................part2................ */}
        <div className="traits">
          <div className="traits1">
            <p>Traits : </p>
          </div>
          <div className="creative">
                <div className="think">
                <img src={think1} alt="" />
                <p>Problem Solving</p>
                </div>
                <div className="tecnic">
                <img src={tecnic2} alt="" />
                <p>Creativity</p>
                </div>
                <div className="leader">
                <img src={leader3} alt="" />
                <p>Leadership</p>
                </div>
                <div className="music1">
                <img src={music1} alt="" />
                <p>Leadership</p>
                </div>
          </div>
        </div>
        {/* ..............part3........... */}
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
{/* ...............part4............. */}
        <div className="luck">
            <div className="arrow1">
                    <div className="relate">
                        <div className="view">
                            <div className="bloom1">
                                <p>1</p>
                            </div>
                            <div className="bloom2">
                                <p>2</p>
                            </div>
                        </div>
                        <div className="scroll"></div>
                    </div>
                    <div className="rank">
                        <div className="rank1">
                            <p> Points Scored </p>
                            <button>82</button>
                        </div>
                        <div className="rank2">
                            <p> Points Scored </p>
                            <button>182</button>
                        </div>
                    </div>
            </div>
            
        </div>



    </div>


    </>
  );
};

export default Result;

