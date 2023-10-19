import "./groupchats.scss";
import searchbar from "../../assets/icons/th.jpg";
import group from "../../assets/icons/group.png";
import bts from "../../assets/icons/bts.png";
import sam from "../../assets/icons/Ellipse 5.png";
import { Link } from "react-router-dom";
const GroupChats = () => {
    return (
      <>
      <div className="groupchat">
      <div className="group">
                        <div className="part_1">
                            <h3>Messages</h3>
                        </div>
                        <div className="part_2">                        <Link to="/messages">

                            <div className="first">
                                <button>Primary chats</button>
                            </div>
                            </Link>
                            <div className="second">
                                <button>Group chats</button>
                            </div>
                        </div>
        </div>

        <div className="search">
                        <img src={searchbar} alt="" />
                        <input type="text"  placeholder="search"/>
        </div>

        <div className="chatbox">
                        <div className="people">
                            <h5>Groups</h5>
                        </div>
                        <div className="chatlist">
                        <Link to="/Hiking">
                            <div className="layer-1">
                            <div className="first">
                                <img src={group} alt="" />
                                <div className="recent">4</div>
                            </div>
                            <div className="second">
                                <div className="part_1"><h6>Friends Forever</h6></div>
                                <div className="part_2"><h6>Hahahahah!</h6></div>
                            </div>
                            <div className="third">
                                <h6>Today, 9:52pm</h6>
                            </div>
                            </div></Link>
                            <div className="layer-2"></div>
                            <div className="layer-3">
                            <div className="first">
                                <img src={bts} alt="" />
                            </div>
                            <div className="second">
                                <div className="part_1"><h6>Mera Gang</h6></div>
                                <div className="part_2"><h6>Kyuuuuu???</h6></div>
                            </div>
                            <div className="third">
                                <h6>Yesterday, 9:05pm</h6>
                            </div>
                            </div>
                            <div className="layer-4"></div>
                            <div className="layer-5">
                            <div className="first">
                                <img src={sam} alt="" />
                            </div>
                            <div className="second">
                                <div className="part_1"><h6>Hiking</h6></div>
                                <div className="part_2"><h6>It's going to happen</h6></div>
                            </div>
                            <div className="third">
                                <h6>Wednesday, 9:52pm</h6>
                            </div>
                            </div>
                        </div>    
        </div>



      </div>
     
      
     </>  
  );
};

export default GroupChats;