import "./chatpage.scss";
import ellipse from "../../assets/icons/Ellipse 1.png";
import send from "../../assets/icons/send.png";
import vector from "../../assets/icons/Vector.png";
import camera from "../../assets/icons/camera.png";
import coolicon from "../../assets/icons/coolicon.png";
const ChatPage = () => {
    return (
      <>
        <div className="chatpage">
                <div className="upper_side">
                    <div className="back_to">
                        <img src={coolicon} alt="" />
                    </div>
                    <div className="pro_file">
                        <img src={ellipse} alt="" />
                        <div className="name">
                            <h3>Khurana K</h3>
                            <h5>Kanya Khurana</h5>
                        </div>
                    </div>
                </div>
                <div className="last_time">
                    <span>Today, 8.30pm</span>
                </div>
                <div className="sms_1">
                    <div className="first">Hey There!</div>
                    <div className="second">How are you?</div>
                </div>
                <div className="sms_2"><span>8.30</span></div>
                <div className="sms_3">
                    <div className="first">Hello!</div>
                    <div className="second">I am fine and how are you?</div>
                </div>
                <div className="sms_4"><span>8.30</span></div>
                <div className="blank"></div>
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

export default ChatPage;