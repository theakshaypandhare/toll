import "./navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <div className="navbarr">
            <div className="leftt">
                <Link to="/" style={{ textDecoration: "none" }}>
                    <span>TOL</span>
                </Link>
                <HomeOutlinedIcon />
                <div className="frnds">
                    <PeopleOutlinedIcon />
                </div>
            </div>
            <div className="centerr">
                <div className="search">
                    <SearchOutlinedIcon />
                    <input type="text" placeholder="Search..." />
                </div>
            </div>
            <div className="rightt"><Link to="/messages">
                <div className="chaticon">
                    <ChatOutlinedIcon />
                </div>
                </Link><Link to="/notification">
                <NotificationsOutlinedIcon />
                </Link><Link to="/profile">
                <div className="profileicon">
                    <PersonOutlineOutlinedIcon />
                </div>
                </Link>
                <Link to="profile" style={{color:"black",textDecoration:'none'}}>
                    <div className="user">
                        <img
                            src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/09/ce/b1/09ceb14e-c92d-fe1a-88e2-016fad828b6e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg"
                            alt=""
                        />
                        <span>Tom</span>
                    </div>
                </Link>
            </div>
        </div>
    );
};
export default Navbar;
