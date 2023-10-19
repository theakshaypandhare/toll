import "./acpage.scss";
import profile from "../../assets/icons/download.jpg";
import { BsSearch } from "react-icons/bs";
import { BsList } from "react-icons/bs";
import instagram from "../../assets/icons/socialmedia/image 8.png";
import whatsup from "../../assets/icons/socialmedia/WhatsApp 1.png";
import linkedin from "../../assets/icons/socialmedia/174857 1.png";
import { AiOutlinePlus } from "react-icons/ai";

const AcPage = () => {
  return (
    <>
      <div className="acpage">
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
          <button>Admin</button>
          <button>Videos</button>
          <button>Discussion</button>
        </div>
        <div className="continue">
          <div className="about-us">
            <h6>About us</h6>
            <div className="line"></div>
          </div>
          <div className="paragraph">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
        </div>
        <div className="continue-1">
            <div className="structure">
                <h5>Organization Structure</h5>
                <div className="lines"></div>
                <h6>Community</h6>
            </div>
            <div className="one">
              <img src={profile} alt="" />
              <h5>John Cena</h5>
              <h6>Admin</h6>
            </div>
            <div className="stright-1"></div>
            <div className="one">
              <img src={profile} alt="" />
              <h5>St. Mary</h5>
              <h6>Moderator</h6>
            </div>
            <div className="stright-1"></div>
            <div className="one">
              <img src={profile} alt="" />
              <h5>Joshua</h5>
              <h6>Moderator</h6>
            </div>
            <div className="stright-1"></div>
            <div className="one">
              <img src={profile} alt="" />
              <h5>Starlight</h5>
              <h6>Moderator</h6>
            </div>
            <div className="stright-1"></div>
            <div className="one">
              <img src={profile} alt="" />
              <h5>Harvy Specter</h5>
              <h6>Influencer</h6>
            </div>
            <div className="stright-1"></div>
            <div className="one">
              <img src={profile} alt="" />
              <h5>Sheldon Cooper</h5>
              <h6>Influencer</h6>
            </div>
          </div>
          <div className="continue-2">
            <div className="sub-community">
              <h6>Sub-Community</h6>
              <div className="sub-line"></div>
            </div>
            <div className="search-point">
              <div className="input-bar">
                <div className="img-1"><BsSearch/></div>
                <input type="text" placeholder="Search" />
                <div className="img-2"><BsList/></div>
              </div>
            </div>
            <div className="first">
              <img src={profile} alt="" />
              <h4>John Cena</h4>
              <h5>Design</h5>
              <h6>Admin</h6>
            </div>
            <div className="stright-1"></div>
            <div className="first">
              <img src={profile} alt="" />
              <h4>St. Mary</h4>
              <h5>Codepen</h5>
              <h6>Admin</h6>
            </div>
            <div className="stright-1"></div>
            <div className="first">
              <img src={profile} alt="" />
              <h4>Joshua</h4>
              <h5>Codepen</h5>
              <h6>Moderator</h6>
            </div>
            <div className="stright-1"></div>
            <div className="first">
              <img src={profile} alt="" />
              <h4>Joshua</h4>
              <h5>Codepen</h5>
              <h6>Influencer</h6>
            </div>
            <div className="stright-1"></div>
            <div className="first">
              <img src={profile} alt="" />
              <h4>St. Mary</h4>
              <h5>Adobe</h5>
              <h6>Influencer</h6>
            </div>
            <div className="stright-1"></div>
            <div className="first">
              <img src={profile} alt="" />
              <h4>Joshua</h4>
              <h5>Technova</h5>
              <h6>Influencer</h6>
            </div>
          </div>
          <div className="continue-3">
            <div className="social-media">
              <h6>Social Media</h6>
              <div className="under-line"></div>
            </div>
            <div className="social-apps">
              <div className="insta"><img src={instagram} alt="" /></div>
              <div className="whats-up"><img src={whatsup} alt="" /></div>
              <div className="linked-in"><img src={linkedin} alt="" /></div>
              <div className="add-icons">
                <div className="space_1">
                  <div className="space_2"><div className="plus"><AiOutlinePlus/></div></div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default AcPage;
