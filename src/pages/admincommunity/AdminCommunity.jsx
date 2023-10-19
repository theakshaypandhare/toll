import "./admincommunity.scss";
import pic from "../../assets/icons/download.jpg";
import pic2 from "../../assets/icons/th.jpg";
import pic3 from "../../assets/icons/OIP.jpg";
import pic4 from "../../assets/icons/socialmedia/image 8.png";
import pic5 from "../../assets/icons/socialmedia/WhatsApp 1.png"
import pic6 from "../../assets/icons/socialmedia/Facebook_Logo_(2019) 1.png"
import pic7 from "../../assets/icons/socialmedia/174857 1.png"
const AdminCommunity = () => {
  return (
    <>
      {/* ........part 1.......... */}
      <div className="AdminCommunity">
        <div className="back">
          <div className="pro">
            <img src={pic} alt="" />
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
        {/* .......part 2......... */}
        <div className="buttons">
          <button>About Us</button>
          <button>Admin</button>
          <button>Videos</button>
          <button>Discussion</button>
        </div>
        <br></br>
        {/* .........part 3........... */}
        <div className="word">
          <div
            style={{
              width: "100%",
              textAlign: "center",
              paddingTop: "13px",
              color: "#00ADB5",
              textDecoration: "underline",
              textDecorationColor: "#0000004F",
              textDecorationStyle: "solid",
            }}
          >
            <h6>About Us</h6>
          </div>
          <div className="pack">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
        </div>
        {/* ............part 4.......... */}
        <div className="contain">
          <div className="cap">
            <div className="heading">organization Struture</div>
            <div className="line"></div>
            <div className="heading-2">Community</div>
          </div>
          <div className="cap-2">
            <div className="slab-1">
              <img src={pic} alt="" />
              <p>John Cena</p>
              <div>
                <p>Admin</p>
              </div>
            </div>
            <div className="tap-1"></div>
            <div className="slab-2">
              <img src={pic} alt="" />
              <p>St. Mary</p>
              <div>
                <p>Moderator</p>
              </div>
            </div>
            <div className="tap-2"></div>
            <div className="slab-3">
              <img src={pic} alt="" />
              <p>Joshua</p>
              <div>
                <p>Moderator</p>
              </div>
            </div>
            <div className="tap-3"></div>
            <div className="slab-4">
              <img src={pic} alt="" />
              <p>StarLight</p>
              <div>
                <p>Moderator</p>
              </div>
            </div>
            <div className="tap-4"></div>
            <div className="slab-5">
              <img src={pic} alt="" />
              <p>Harvy Spector</p>
              <div>
                <p>Influencer</p>
              </div>
            </div>
            <div className="tap-5"></div>
            <div className="slab-6">
              <img src={pic} alt="" />
              <p>Sheldon Cooper</p>
              <div>
                <p>Influencer</p>
              </div>
            </div>
          </div>
        </div>
        {/* ..........part 5......... */}
        <div className="maintain">
          <div className="point">
          <div className="glow">Sub-Community</div>
          <div className="sub"></div>
          </div>
          <div className="gap">
            <div className="searchbar">
              <input type="text" placeholder="Search..." width="300px"></input>
              <div className="img1"><img src={pic2} alt="" width="22px" height="22px"/></div>
              <div className="img2"><img src={pic3} alt="" width="22px" height="22px" /></div>
            </div>
          </div>
          <div className="gray">
            <div className="blac1">
              <div className="blue1"><img src={pic} alt="" /></div>
              <div className="pink1"><p>John Cena</p></div>
              <div className="red1"><p>Design</p></div>
              <div className="green1"><p>Admin</p></div>
            </div>
            <div className="area1"></div>
            <div className="blac2">
              <div className="blue2"><img src={pic} alt="" /></div>
              <div className="pink2"><p>St Mary</p></div>
              <div className="red2"><p>Codepen</p></div>
              <div className="green2"><p>Admin</p></div>
            </div>
            <div className="area2"></div>
            <div className="blac3">
              <div className="blue3"><img src={pic} alt="" /></div>
              <div className="pink3"><p>Joshua</p></div>
              <div className="red3"><p>Codepen</p></div>
              <div className="green3"><p>Moderator</p></div>
            </div>
            <div className="area3"></div>
            <div className="blac4">
              <div className="blue4"><img src={pic} alt="" /></div>
              <div className="pink4"><p>John Cena</p></div>
              <div className="red4"><p>Codepen</p></div>
              <div className="green4"><p>Influencer</p></div>
            </div>
            <div className="area4"></div>
            <div className="blac5">
              <div className="blue5"><img src={pic} alt="" /></div>
              <div className="pink5"><p>St Mary</p></div>
              <div className="red5"><p>Adobe</p></div>
              <div className="green5"><p>moderator</p></div>
            </div>
            <div className="area5"></div>
            <div className="blac6">
              <div className="blue6"><img src={pic} alt="" /></div>
              <div className="pink6"><p>Joshua</p></div>
              <div className="red6"><p>Technova</p></div>
              <div className="green6"><p>moderator</p></div>
            </div>
            
          </div>
        </div>
        <div className="best">
          <div className="great">
            <div className="good">Social Media</div>
            <div className="nice"></div>
          </div>
          <div className="social">
            <img src={pic4} alt="" />
            <img src={pic5} alt="" />
            <img src={pic6} alt="" />
            <img src={pic7} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminCommunity;
