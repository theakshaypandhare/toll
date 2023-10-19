import "./cspage.scss";
import profile from "../../assets/icons/download.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { BiMessageRounded } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
const CsPage = () => {
  return (
    <>
      <div className="cspage">
        <div className="grid">
          <div className="profile">
            <img src={profile} alt="" />
            <h5>LearnToGrow</h5>
          </div>
          <div className="channel">
            <div className="part_1">
              <h6>110k</h6>
              <h6>17k</h6>
              <h6>27k</h6>
            </div>
            <div className="part_2">
              <p>
                Channel
                <br />
                Valuation
              </p>
              <p> Followers</p>
              <p>
                Leaderboard
                <br />
                Valuation
              </p>
            </div>
            <div className="part_3">
              <button>+ Follow</button>
            </div>
          </div>
        </div>

        <div className="about">
          <button>About Us</button>
          <Link to="/acpage">
          <button>Admin</button>
          </Link>
          <button>Videos</button>
          <button>Discussion</button>
        </div>

        <div className="new">
          <Link to="/AddCaseStudy"><div className="create">
            <span>
              <AiOutlinePlusSquare />
            </span>
            <h6>Create case study</h6>
          </div></Link>
          <div className="container">
            <div className="enterprener">
              <p>
                Entrepreneurship is the ability and readiness to develop,
                organize and run a business enterprise, along with any of its
                uncertainties in order to make a profit. The most prominent
                example of entrepreneurship is the starting of new businesses.
              </p>
            </div>
            <div className="enterpreneurship">
              <h3>Entrepreneurship</h3>
              <h5>Risk analysis </h5>
              <h6>This case study is about risk..<strong>more</strong></h6>
              <div className="items">
                <div className="item-1"><AiOutlineEye /> <span>368k</span></div>
                <div className="item-2"><BiMessageRounded /> <span>2,386</span></div>
                <div className="item-3"><BsPerson /> <span>752</span></div>
              </div>
            </div>
            <div className="enterprener">
              <p>
                Entrepreneurship is the ability and readiness to develop,
                organize and run a business enterprise, along with any of its
                uncertainties in order to make a profit. The most prominent
                example of entrepreneurship is the starting of new businesses.
              </p>
            </div>
            <div className="enterpreneurship">
              <h3>Entrepreneurship</h3>
              <h5>Risk analysis </h5>
              <h6>This case study is about risk..<strong>more</strong></h6>
              <div className="items">
                <div className="item-1"><AiOutlineEye /> <span>368k</span></div>
                <div className="item-2"><BiMessageRounded /> <span>2,386</span></div>
                <div className="item-3"><BsPerson /> <span>752</span></div>
              </div>
            </div>
            <div className="enterprener">
              <p>
                Entrepreneurship is the ability and readiness to develop,
                organize and run a business enterprise, along with any of its
                uncertainties in order to make a profit. The most prominent
                example of entrepreneurship is the starting of new businesses.
              </p>
            </div>
            <div className="enterpreneurship">
              <h3>Entrepreneurship</h3>
              <h5>Risk analysis </h5>
              <h6>This case study is about risk..<strong>more</strong></h6>
              <div className="items">
                <div className="item-1"><AiOutlineEye /> <span>368k</span></div>
                <div className="item-2"><BiMessageRounded /> <span>2,386</span></div>
                <div className="item-3"><BsPerson /> <span>752</span></div>
              </div>
            </div>
            <div className="enterprener">
              <p>
                Entrepreneurship is the ability and readiness to develop,
                organize and run a business enterprise, along with any of its
                uncertainties in order to make a profit. The most prominent
                example of entrepreneurship is the starting of new businesses.
              </p>
            </div>
            <div className="enterpreneurship">
              <h3>Entrepreneurship</h3>
              <h5>Risk analysis </h5>
              <h6>This case study is about risk..<strong>more</strong></h6>
              <div className="items">
                <div className="item-1"><AiOutlineEye /> <span>368k</span></div>
                <div className="item-2"><BiMessageRounded /> <span>2,386</span></div>
                <div className="item-3"><BsPerson /> <span>752</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CsPage;
