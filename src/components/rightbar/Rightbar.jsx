import "./rightbar.scss"
const Rightbar = () => {
    return (
        <div className="rightbar">
            <div className="container">
                <div className="item">
                    <span>suggested for you</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/09/ce/b1/09ceb14e-c92d-fe1a-88e2-016fad828b6e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" alt="" />
                            <span>John</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/09/ce/b1/09ceb14e-c92d-fe1a-88e2-016fad828b6e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" alt="" />
                            <span>John</span>
                        </div>
                        <div className="buttons">
                            <button>Follow</button>
                            <button>dismiss</button>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <span>
                        Latest Activity
                    </span>
                    <div className="user">
                        <div className="userInfo">
                            <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/09/ce/b1/09ceb14e-c92d-fe1a-88e2-016fad828b6e/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg" alt="" />
                            <p><span>
                                John
                            </span>
                                changed their profile photo</p>
                        </div>
                        <span>1 min Ago</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Rightbar;