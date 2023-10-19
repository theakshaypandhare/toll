import { Link } from "react-router-dom";
import "./leftbar.scss"
import brain from "../../assets/icons/brain.png";
import cup from "../../assets/icons/cup.png";
import stat from "../../assets/icons/statistic.png";
const Leftbar = () => {
    return (
        <div className="leftbar">
            <div className="container">
                <div className="menu">
                    <div className="profile-grid ">
                        <div className="grid-child1 ">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeT4Vqyxfy5Y_kB_d2Kmm-s95YcCgKaLuvw&usqp=CAU" alt="" />

                        </div>
                        <div className="grid-child2 ">
                            <div>
                                <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/09/ce/b1/09ceb14e-c92d-fe1a-88e2-016fad828b6e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" alt="" />
                            </div>
                        </div>
                        <div className="grid-child3 ">
                            <div style={{ borderRadius: '6px', width: '100%', textAlign: 'center',marginTop:'10px', }}>
                                <h5>Tom Cruse</h5>
                                <div style={{ backgroundColor: '#00ADB5', borderRadius: '6px', width: '100%', color: 'white', fontSize: '15px',lineHeight:'180%' }}>
                                    <p>Entreprenure  |  Marketer  |  Learner</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid-1">
                        <div>
                            <div className="" style={{ display: 'grid', textAlign: 'center' }}>
                                <p>Basrains</p>
                                {/* <img style={{ width: "50px",height:"50px"}} src="src/assets/brain.png" alt="" /> */}
                                <img src={brain} alt="" />
                            </div>
                        </div>
                        <div class="vertical"></div>
                        <div>
                            <div style={{ display: 'grid', textAlign: 'center' }}>
                                <p>Knowledge Valuation</p>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {/* <img style={{ width: "50px",height:"50px" }} src="src/assets/istockphoto-1176397624-170667a-removebg-preview 1.jpg" alt="" /> */}
                                    <img src={cup} alt="" />

                                </div>
                            </div>
                        </div>
                        <div class="vertical"></div>
                        <div>
                            <div style={{ display: 'grid', textAlign: 'center' }}>
                                <p>Statistics</p>
                                {/* <img style={{ width: "50px" }} src="https://www.iconpacks.net/icons/2/free-sun-icon-3337-thumb.png" alt="" /> */}
                                <img src={stat} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <span>
                        Your shortcuts
                    </span>
                    <div className="user">
                    <Link to="/cspage" style={{ textDecoration: 'none' ,}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Community</span>
                        </Link>
                    </div>
                    <div className="user">
                    <Link to="/leadvalution" style={{ textDecoration: 'none' ,}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Leaderboard Valuation</span>
                        </Link>
                    </div>
                    <div className="item">
                       
                    <Link to="/analyatics" style={{ textDecoration: 'none' ,}}>
                         <img src="https://cdn-icons-png.flaticon.com/512/167/167486.png" alt="" />
                        <span>Statistics</span>
                        </Link>
                    </div>
                    <div className="item">
                    <Link to="/criticalanalysis" style={{ textDecoration: 'none' ,}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/167/167486.png" alt="" />
                        <span>Critical Analaysis</span>
                        </Link>
                    </div>
                    <div className="item">
                    <Link to="/AsPage" style={{ textDecoration: 'none' ,}}>
                        <img src="https://cdn-icons-png.flaticon.com/512/167/167486.png" alt="" />
                        <span>Multiple Choice</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/CreateCaseStudy" style={{ textDecoration: 'none' ,}}>
                        <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png" alt="" />
                        <span>Add Case Studies</span>
                        </Link>
                    </div>
                    <div className="item">
                        <Link to="/createchannel" style={{ textDecoration: 'none' ,}}>
                        <img src="https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Settings-icon.png" alt="" />
                        <span>Create Channel</span>
                        </Link>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="menu">
                    <span>
                        Your shortcuts
                    </span>
                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Tom</span>
                    </div>
                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Tom</span>
                    </div>
                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Tom</span>
                    </div>
                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Tom</span>
                    </div>
                </div>
                {/* <hr /> */}
                <div className="menu">
                    <span>
                        others
                    </span>
                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Tom</span>
                    </div>
                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/8131/8131340.png" alt="" />
                        <span>Tom</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Leftbar;