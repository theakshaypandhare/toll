import "./profile.scss";
import Brain from "../../assets/icons/brain.png";
import Cup from "../../assets/icons/cup.png";
import Statistics from "../../assets/icons/statistic.png";
import img1 from "../../assets/icons/channelIcos/Ellipse 4-1.png";
import img2 from "../../assets/icons/channelIcos/Ellipse 4.png";
import img3 from "../../assets/icons/channelIcos/Ellipse 4.png";
import img4 from "../../assets/icons/channelIcos/Ellipse 4.png";
import addbtn from "../../assets/icons/channelIcos/Rectangle 41928.png";
import facebook from "../../assets/icons/socialmedia/Facebook_Logo_(2019) 1.png";
import Linkedin from "../../assets/icons/socialmedia/174857 1.png";
import instagram from "../../assets/icons/socialmedia/image 8.png";
import whatsapp from "../../assets/icons/socialmedia/WhatsApp 1.png";
import { IoIosStar, IoIosStarOutline, IoIosShareAlt } from "react-icons/io";
import { FaRegComment } from "react-icons/fa";
import { GiBrain } from "react-icons/gi";
import { Link } from "react-router-dom";
const Profile = () => {
    return (
        <div className="profile1">
            <div className="grid-container">
                <div className="coverImage">
                    <div className="img">
                        <img src="https://picsum.photos/700/" alt="" />
                    </div>
                </div>
                <div className="profileImage">
                    <div className="img-Container">
                        <div className="img">
                            <Link to="../createprofile">
                                {" "}
                                <img
                                    src="https://picsum.photos/100/100"
                                    alt=""
                                />
                            </Link>
                        </div>
                        <span>Tom Cruse</span>
                    </div>
                </div>
                <div className="followCount">
                    <div className="followCount-main">
                        <div className="follow">
                            <span className="h1">4345453</span>
                            <br />
                            <span className="h6">Followers</span>
                        </div>
                        <div className="hr"></div>
                        <div className="following">
                            <span className="h1">3223423</span>
                            <br />
                            <span className="h6">Following</span>
                        </div>
                    </div>
                </div>
                <div className="roles">
                    <div className="rolesDiv">
                        Entrepreneur | Marketer | Learner
                    </div>
                </div>
            </div>
            <div className="grid-container-content">
                <div className="bio">
                    <p>
                        UX designer, or user experience designer || refers to
                        the process of designing products or services that are
                        intuitive, accessible || 18X || 2X super set. lorem300
                    </p>
                </div>
                <div className="address">
                    <span className="location">Pune, Maharashtra, India</span>
                    <span className="contactInfo">Contact info</span>
                </div>
                <div className="achievement">
                    <div className="achievement-main">
                        <div className="follow">
                            <span className="h1">Brains</span>
                            <br />
                            <span className="h6">10k</span> <br />
                            <img src={Brain} alt="" />
                        </div>
                        <div className="hr"></div>
                        <div className="following">
                            <span className="h1">Knowledge Valuation</span>
                            <br />
                            <span className="h6">555k</span> <br />
                            <img src={Cup} alt="" />
                        </div>
                        <div className="hr"></div>
                        <div className="following">
                            <span className="h1">Statistics</span>
                            <br />
                            <img src={Statistics} alt="" />
                        </div>
                    </div>
                </div>
                <div className="profileButtons">
                    <div className="profileButtons-Container">
                        <button>Edit Profile</button>
                        <button>Channels</button>
                        <button>Share Profile</button>
                        <button>Settings</button>
                    </div>
                </div>
                <div className="itm1">
                    <span>Channels</span>
                    <div className="innerdiv">
                        <div class="scroll-container d-flex">
                            <div className="channel-card">
                                <div className="image-channel-container">
                                    <img src={addbtn} alt="" />
                                    <span>Create</span>
                                </div>
                            </div>
                            <div className="channel-card">
                                <div className="image-channel-container">
                                    <img src={img1} alt="" />
                                    <span>ACC</span>
                                </div>
                            </div>
                            <div className="channel-card">
                                <div className="image-channel-container">
                                    <img src={img2} alt="" />
                                    <span>Sia</span>
                                </div>
                            </div>
                            <div className="channel-card">
                                <div className="image-channel-container">
                                    <img src={img3} alt="" />
                                    <span>Digital Trenday</span>
                                </div>
                            </div>
                            <div className="channel-card">
                                <div className="image-channel-container">
                                    <img src={img4} alt="" />
                                    <span>123</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="itm2">
                    <div className="innerdiv">
                        <div className="grid-container-1">
                            <div className="item3">
                                <span>College :</span>
                            </div>
                            <div className="item4">
                                <span>Town of Learning</span>
                            </div>
                            <div className="item3">
                                <span>Subjects :</span>
                            </div>
                            <div className="item4">
                                <span>Traits :</span>
                            </div>
                            <div className="item3">
                                <span>Traits :</span>
                            </div>
                            <div className="traits">
                                <div className="i1">
                                    <span>Java</span>
                                </div>
                                <div className="i2">
                                    <span>python</span>
                                </div>
                                <div className="i3">
                                    <span>php</span>
                                </div>
                                <div className="i4">
                                    <span>JavaScript</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="innerdiv">
                        <div className="grid-container-1">
                            <div className="item3">
                                <span>Social Media:</span>
                            </div>
                            <div className="item4">
                                <span></span>
                            </div>
                            <div className="socialmedia">
                                <img src={facebook} alt="" />
                                <img src={instagram} alt="" />
                                <img src={Linkedin} alt="" />
                                <img src={whatsapp} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-container-2">
                <div className="feed-timeline">
                    <span className="float-start">Feed/Timeline</span>
                    <span className="addpost float-end">+ Post</span>
                </div>
                <div className="hrline"></div>
            </div>
            <div className="postContainer">
                <div className="grid-container-2">
                    {/* <div className="posthead"> */}
                    <div className="post-profile-photo">
                        <img src="https://picsum.photos/100/100" alt="" />
                    </div>
                    <div className="post-username">
                        <span>Tom Cruse</span>
                    </div>
                    <div className="post-userId">
                        <span>@tomCruse</span>
                    </div>
                    {/* </div> */}
                    <div className="postImage">
                        <img src="https://picsum.photos/700/400" alt="" />
                    </div>
                    <div className="postImageTitle">
                        <div className="webname">
                            <span>Hotel Java </span>
                            <br />
                            <span>hoteljava.com</span>
                        </div>
                        <div className="Stars">
                            <IoIosStar className="IoIosStar" />
                            <IoIosStar className="IoIosStar" />
                            <IoIosStar className="IoIosStar" />
                            <IoIosStar className="IoIosStar" />
                            <IoIosStarOutline />
                        </div>
                    </div>
                    <div className="comment-container">
                        <div className="like">
                            <GiBrain className=" brain" />
                            <span>100</span>
                        </div>
                        <div className="comment">
                            <FaRegComment />
                            <span>Comment</span>
                        </div>
                        <div className="view">
                            <span>Views 105k</span>
                        </div>
                        <div className="share">
                            <IoIosShareAlt />
                        </div>
                    </div>
                </div>
            </div>
            <div className="postContainer">
                <div className="grid-container-2">
                    {/* <div className="posthead"> */}
                    <div className="post-profile-photo">
                        <img src="https://picsum.photos/100/100" alt="" />
                    </div>
                    <div className="post-username">
                        <span>Tom Cruse</span>
                    </div>
                    <div className="post-userId">
                        <span>@tomCruse</span>
                    </div>

                    <div className="post-content">
                        <span>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit.laudantium unde eaque aut deleniti totam fugit
                            similique veniam mollitia velit repellat explicabo!
                        </span>
                    </div>
                    <div className="comment-container">
                        <div className="like">
                            <GiBrain className=" brain" />
                            <span>100</span>
                        </div>
                        <div className="comment">
                            <FaRegComment />
                            <span>Comment</span>
                        </div>
                        <div className="view">
                            <span>Views 105k</span>
                        </div>
                        <div className="share">
                            <IoIosShareAlt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
