import "./casestudy.scss";
import profile from "../../assets/icons/download.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
const CaseStudy = () => {
  return (
    <div className="CaseStudy">
      <div className="back">
        <div className="pro">
          <img src={profile} alt="" />
        </div>
        <h5>LearnToGrow</h5>
        <div className="num">
          <h6>110k</h6>
          <h6>17k</h6>
          <h6>27k</h6>
        </div>
        <div className="followers">
          <p>
            Channel
            <br />
            Valuation
          </p>
          <p>Followers</p>
          <p>
            Leaderboard <br />
            Valuation
          </p>
        </div>
        <div className="last">
          <button>+ Follow</button>
        </div>
      </div>
      <br></br>
      <div className="buttons">
        <button>About Us</button>
        <button>Admin</button>
        <button>Videos</button>
        <button>Discussion</button>
      </div>
      <br></br>

      <div className="videos">
        <div className="create-study">
          <span>
            <AiOutlinePlusSquare />
          </span>
          <h6>Create case study</h6>
        </div>
        <br />
        <br />
        <div className="enterprener-1">
          <div className="part-1">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="part-2">
            <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="icons-1">
              <div className="div-a">
                <AiOutlineEye />
              </div>
              <div className="div-b">
                <p>368k</p>
              </div>
              <div className="div-c">
                <BiMessageRounded />
              </div>
              <div className="div-d">
                <p>2,386</p>
              </div>
              <div className="div-e">
                <BsPerson />
              </div>
              <div className="div-f">
                <p>752</p>
              </div>
            </div>
          </div>
        </div>
        <div className="enterprener-2">
          <div className="part-1">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="part-2">
            <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="icons-1">
              <div className="div-a">
                <AiOutlineEye />
              </div>
              <div className="div-b">
                <p>368k</p>
              </div>
              <div className="div-c">
                <BiMessageRounded />
              </div>
              <div className="div-d">
                <p>2,386</p>
              </div>
              <div className="div-e">
                <BsPerson />
              </div>
              <div className="div-f">
                <p>752</p>
              </div>
            </div>
          </div>
        </div>
        <div className="enterprener-3">
          <div className="part-1">
            <p>
              Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.
            </p>
          </div>
          <div className="part-2">
          <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
            <h6>
              This case study is about risk..<strong>more</strong>
            </h6>
            <div className="icons-1">
            <div className="div-a">
                <AiOutlineEye />
              </div>
              <div className="div-b">
                <p>368k</p>
              </div>
              <div className="div-c">
                <BiMessageRounded />
              </div>
              <div className="div-d">
                <p>2,386</p>
              </div>
              <div className="div-e">
                <BsPerson />
              </div>
              <div className="div-f">
                <p>752</p>
              </div>
            </div>
          </div>
        </div>
        <div className="enterprener-4">
          <div className="part-1"><p> Entrepreneurship is the ability and readiness to develop, organize
              and run a business enterprise, along with any of its uncertainties
              in order to make a profit. The most prominent example of
              entrepreneurship is the starting of new businesses.</p></div>
              <div className="part-2">
              <h3>Entrepreneurship</h3>
            <h5>Risk analysis </h5>
              <h6>
              This case study is about risk..<strong>more</strong>
              </h6>
            <div className="icons-1">
              
            <div className="div-a">
                <AiOutlineEye />
              </div>
              <div className="div-b">
                <p>368k</p>
              </div>
              <div className="div-c">
                <BiMessageRounded />
              </div>
              <div className="div-d">
                <p>2,386</p>
              </div>
              <div className="div-e">
                <BsPerson />
              </div>
              <div className="div-f">
                <p>752</p>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
