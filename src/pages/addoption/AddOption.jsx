import "./addoption.scss";
import pic9 from "../../assets/icons/watch.jpg";
import pic11 from "../../assets/icons/notedown.png";

const AddOption = () => {
  return (
    <>
      <div className="AddOption">
        {/* ..........part1.......... */}
        <div className="trik">
          <div className="clue"></div>
          <div className="fit">
            <form>
              <div className="fit1">
                <input type="radio" name="education2" /> Critical Analysis
              </div>
              <div className="fit2">
                <input type="radio" name="education2" /> Multiple Choice
              </div>
              <div className="fit3">
                <input type="radio" name="education2" /> Question & Answer
              </div>
            </form>
          </div>
          <div className="clue2"></div>
        </div>
        {/* .........part 2........ */}
        <div className="txt">
          <textarea
            name="type"
            cols="64"
            rows="3"
            placeholder="Add description"
          ></textarea>
        </div>
        {/* ............Part 3.......... */}
     <div className="charge">
        <div className="carry">
                          <div className="angle">
                                <div className="angle1"><p>1</p></div>
                                <div className="angle2"><p>2</p></div>
                                <div className="angle3"><p>3</p></div>
                                <div className="angle4"><p>4</p></div>
                                <div className="angle5"><p>5</p></div>
                                <div className="angle6"><p>+</p></div>
                        </div>
                        <div className="straight">
                                
                        </div>
         </div>
              
        
        <div className="blank">
                        <input type="text"  placeholder="Add question"/>
        </div>
        <div className="sub">
                <div className="sub2">
                        <div className="sup">
                        <img src={pic9} alt="" />
                        </div>
                        <div className="sup2">
                                <select name="time" id="time">
                                        <option value="60"><p>60</p></option>
                                        <option value="30"><p>30</p></option>
                                </select>
                        </div>
                </div>
        </div>

        <div className="skill">
           <div className="from1">
            <input type="text" placeholder="Add an Option"/>
           </div>
           <div className="from2">
            <input type="text" placeholder="Add an Option"/>
           </div>
           <div className="from3">
            <input type="text" placeholder="Add an Option"/>
           </div>
           <div className="from4">
            <input type="text" placeholder="Add an Option"/>
           </div>

        </div>
        <div className="ride">
          <p>+ Add more options</p>
        </div>
        <div className="title">
          <p>What is the meaning of UI UX Design ?</p>
        </div>

        <div className="ctrl">
          <div className="build1">
            <div className="lockf"><div className="lock1"><p>A</p></div></div>
            <div className="lock2"><p>User Interface and User Experience</p></div>
            <div className="lock3"><img src={pic11} alt="" height="35px" width="35px" /></div>
          </div>
          <div className="build2">
            <div className="lockf1"><div className="shift1"><p>B</p></div></div>
            <div className="shift2"><p>User Interface and User Experience</p></div>
            <div className="shift3"><img src={pic11} alt="" /></div>
          </div>
          <div className="build3">
            <div className="lockf2"><div className="gallery1"><p>C</p></div></div>
            <div className="gallery2"><p>User Interface and User Experience</p></div>
            <div className="gallery3"><img src={pic11} alt="" /></div>
          </div>
          <div className="build4">
            <div className="lockf3"><div className="fab1"><p>D</p></div></div>
            <div className="fab2"><p>User Interface and User Experience</p></div>
            <div className="fab3"><img src={pic11} alt="" /></div>
          </div>
        </div>
        </div>
        <div className="edit">
          <p>Add result template</p>
        </div>
      </div>
    </>
  );
};

export default AddOption;
