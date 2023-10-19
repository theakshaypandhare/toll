import { IoMdArrowRoundBack } from "react-icons/io";
import "./create-profile.scss";
import addbtn from "../../assets/icons/channelIcos/Rectangle 41928.png";
import facebook from "../../assets/icons/socialmedia/Facebook_Logo_(2019) 1.png";
import Linkedin from "../../assets/icons/socialmedia/174857 1.png";
////import instagram from "../../assets/icons/socialmedia/image 8.png";
import whatsapp from "../../assets/icons/socialmedia/WhatsApp 1.png";

import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
////import { AiFillEdit } from "react-icons/ai";
const CreateProfile = () => {
    return (
        <div className="create-profile">
            <div className="create-profile-grid-container">
                <div className="header-container">
                    <div className="create-profile-grid-container">
                        <div className="create-profile-header">
                            <div className="head-back">
                                <IoMdArrowRoundBack />
                            </div>
                            <div className="head-title">Edit profile</div>
                            <div className="head-more">
                                <PiDotsThreeOutlineVerticalFill />
                            </div>
                        </div>
                        <div className="profile-pic-div">
                            <div className="profile-pic">
                                <img
                                    src="https://picsum.photos/100/100"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="profile-name">
                            <span>Tom Cruse</span>
                        </div>
                        <div className="profile-contact">
                            <span>youremail@domain.com | +01 234 567 89</span>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
                <div className="coverpic">
                    <img src="https://picsum.photos/900/700" alt="" />
                </div>
                <div className="profile-form">
                    <div>
                        <label htmlFor="">Bio</label>
                        <textarea
                            cols="35"
                            rows="3"
                            name="my_textarea"></textarea>
                    </div>
                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Headline</label>
                        <input type="text" />
                    </div>
                    <div className="colmn-2">
                        <div>
                            <label htmlFor="">Location</label> <br />
                            <select name="location" id="location">
                                <option value="">Choose location</option>
                                <option value="nyork">New York</option>
                                <option value="vancouver">Vancouver</option>
                                <option value="atlantis">Atlantis</option>
                                <option value="alpha">Alpha Centauri</option>
                                <option value="blackpool">Blackpool</option>
                                <option value="bognor">Bognor Regis</option>
                            </select>
                        </div>

                        <div>
                            <label htmlFor="">Gender</label> <br />
                            <select name="location" id="location">
                                <option value="">Choose Gender</option>
                                <option value="nyork">New York</option>
                                <option value="vancouver">Vancouver</option>
                                <option value="atlantis">Atlantis</option>
                                <option value="alpha">Alpha Centauri</option>
                                <option value="blackpool">Blackpool</option>
                                <option value="bognor">Bognor Regis</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">DOB</label>
                        <input type="date" id="birthday" name="birthday" />
                    </div>
                    <div>
                        <label for="">Organization</label>
                        <div className="colmn-2">
                            <div className="column-radio">
                                <div>
                                    <input
                                        type="radio"
                                        id=""
                                        name="org"
                                        value="School"
                                    />
                                    <label for="School">School</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id=""
                                        name="org"
                                        value="College"
                                    />
                                    <label for="College">College</label>
                                </div>
                            </div>
                            <div className="column-radio">
                                <div>
                                    <input
                                        type="radio"
                                        id=""
                                        name="org"
                                        value="Job"
                                    />
                                    <label for="">Job</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id=""
                                        name="org"
                                        value="Other"
                                    />
                                    <label for="">Other</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Name of the organization</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Choose Subject</label> <br />
                        <select name="location" id="location">
                            <option value="">Choose Subjects</option>
                            <option value="nyork">New York</option>
                            <option value="vancouver">Vancouver</option>
                            <option value="atlantis">Atlantis</option>
                            <option value="alpha">Alpha Centauri</option>
                            <option value="blackpool">Blackpool</option>
                            <option value="bognor">Bognor Regis</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="">Choose Traits</label>
                        <div className="traits-container">
                            <span>a</span>
                            <span>a</span>
                            <span>a</span>
                            <span>a</span>
                            <span>a</span>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="">Add Social Media</label>
                        <div className="social-media">
                            <div className="social-media-cards">
                                <img src={whatsapp} alt="" />
                            </div>
                            <div className="social-media-cards">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="social-media-cards">
                                <img src={Linkedin} alt="" />
                            </div>
                            <div className="social-media-cards">
                                <img src={addbtn} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateProfile;
