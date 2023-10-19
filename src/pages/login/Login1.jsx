import "./login1.scss";

import v1 from "../../assets/vectors/2 1.png";
import v2 from "../../assets/vectors/2-1 1.png";
import appstore from "../../assets/icons/plays.png";
import playstore from "../../assets/icons/apps.png";
import google from "../../assets/icons/google.png";
import facebook from "../../assets/icons/fb.png";
import TOL from "../../assets/icons/tol.png";
const Login1 = () => {
    return (
        <div className="login">
            <div className="grid-container">
                <div className="item1">1</div>
                <div className="item2">2</div>
                <div className="heade">
                    <ul>
                        <li style={{padding:'2% 0 0 0'}}>
                            <span><img src={TOL} style={{height:'80%',width:'80%'}} alt="" /></span>
                        </li>
                        <li>
                            <span>Channel</span>
                        </li>
                        <li>
                            <span>Our Libraries</span>
                        </li>
                        <li>
                            <span>Our community</span>
                        </li>
                        <li>
                            <span>Activities</span>
                        </li>
                    </ul>
                </div>
                <div className="fote">
                    <ul>
                        <li>
                            <span style={{color:'#00ADB5'}}>@Townoflearning</span>
                        </li>
                        <li>
                            <span>Privacy</span>
                        </li>
                        <li>
                            <span>Cookies</span>
                        </li>
                        <li>
                            <span>AdChoices</span>
                        </li>
                        <li>
                            <span>Terms</span>
                        </li>
                        <li>
                            <span>Help</span>
                        </li>
                    </ul>
                </div>
                <div className="item7">
                    <img src={v2} alt="" />
                </div>
                <div className="item6">
                    <img src={v1} alt="" />
                </div>
                <div className="item4">
                    <div className="subitem1">
                        <p>Career & Finance with our platform</p>
                    </div>
                </div>
                <div className="item3">
                    <div className="subitem1">
                        <div className="container px-5 pt-5 d-flex flex-column">
                            <h3>Create An accounts</h3>
                            <span>Its completely free!!</span>
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex flex-column">
                                    <label htmlFor="">Email</label>
                                    <input type="email" placeholder="@.comn" />
                                </div>
                                <div className="d-flex flex-column">
                                    <label htmlFor="">Password</label>
                                    <input
                                        type="password"
                                        placeholder="*********"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="d-flex justify-content-between">
                                    <span>
                                        {" "}
                                        <input
                                            type="checkbox"
                                            name=""
                                            id=""
                                        />{" "}
                                        Remeber
                                    </span>{" "}
                                    <span>forgot Password</span>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button className="w-50">sign up</button>
                                </div>
                                <div className="d-flex justify-content-around">
                                    <button>
                                        <i>
                                            <img src={facebook} alt="11" />
                                        </i>
                                        Facebook
                                    </button>
                                    <button>
                                        <i>
                                            <img src={google} alt="11" />
                                        </i>
                                        Google
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="item5">
                    <div>
                        <span>
                            Career & Finance
                            <br />
                            without our platform
                        </span>
                    </div>
                </div>
                <div className="item8">
                    <div className="buttonstore">
                        <div className="d-flex justify-content-center align-items-center">
                            <div>
                                <img src={playstore} alt="" />
                            </div>
                        </div>
                        <div>
                            <img src={appstore} alt="" />
                        </div>
                    </div>
                </div>
                <div className="item9">
                    <span>
                        “Discover, Connect, Learn, Earn & Grow - Your path to
                        success starts here”
                    </span>
                </div>
            </div>
        </div>
    );
};
export default Login1;
