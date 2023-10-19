import "./hiking.scss";
import coolicon from "../../assets/icons/coolicon.png";
import ellipse5 from "../../assets/icons/Ellipse 5.png";
import ellipse4 from "../../assets/icons/Ellipse 4.png";
import send from "../../assets/icons/send.png";
import vector from "../../assets/icons/Vector.png";
import camera from "../../assets/icons/camera.png";
const Hiking = () => {
    return (
      <>
        <div className="hiking">
                <div className="upper_side">
                    <div className="back_to">
                        <img src={coolicon} alt="" />
                    </div>
                    <div className="pro_file">
                        <img src={ellipse5} alt="" />
                        <div className="name">
                            <h3>Hiking </h3>
                            <h5>20 Members</h5>
                        </div>
                    </div>
                </div>
                <div className="last_time">
                    <span>Today, 8.30pm</span>
                </div>
                <div className="khurana">
                    <div className="part-1">
                        <img src={ellipse5} alt="" />
                        <h6>Khurana K</h6>
                    </div>
                    <div className="part-2">
                        <h3>Hey There!</h3>
                        <h6>8.30</h6>
                    </div>
                </div>
                <div className="khuranak">
                    <div className="part-1">
                        <img src={ellipse5} alt="" />
                        <h6>Khurana K</h6>
                    </div>
                    <div className="part-2">
                        <h3>How are you?</h3>
                        <h6>8.30</h6>
                    </div>
                </div>
                <div className="you">
                    <div className="text">
                        <h3>I am fine and how are you?</h3>
                        <h6>8.30</h6>
                    </div>
                </div>
                <div className="you-1">
                    <span>you</span>
                </div>
                <div className="keshav">
                    <div className="part-1">
                        <img src={ellipse4} alt="" />
                        <h6>Keshav</h6>
                    </div>
                    <div className="part-2">
                        <h3>I'm good too!</h3>
                        <h6>8.31</h6>
                    </div>
                </div>
                <div className="blank">

                </div>
                <div className="share">
                    <img src={send} alt="" />
                    <div className="replace">
                        <div className="icon_1"><img src={vector} alt="" /></div>
                        <input type="text" placeholder="Type your message here..." />
                        <div className="icon_2"><img src={camera} alt="" /></div>
                    </div>
                </div>



        </div>
      </>
  );
};

export default Hiking;