import "./optionadd.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { RiPencilFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const OptionAdd = () => {
    return (
      <>
      <div className="optionadd">
        <div className="inside">
                <div className="top"></div>
                <div className="input">
                    <form >
                    <div className="radio1"><input type="radio" name="test" /> Critical analysis</div>
                    <div className="radio2"><input type="radio" name="test" /> Multiple choice</div>
                    <div className="radio3"><input type="radio" name="test" /> Question & Answer</div>
                    </form>
                </div>
                <div className="bottom"></div>
        </div>

        <div className="adddescrip">
              <textarea name="text"  cols="64" rows="3" placeholder="Add  description"></textarea>
        </div>


        <div className="slot">
            <div className="numbers">
                <div className="main-1">
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                  <button>4</button>
                  <button>5</button>
                  <div className="button"><button> <span><AiOutlinePlus/> </span></button></div>
                </div>
                <div className=""></div>
                <input type="text" placeholder="Add question" />
                <div className="choose">
                  <div className="clock"> <BiTimeFive/> </div>
                  <div className="clock-1">
                  <select name="time" id="time">
                      <option value="60">60</option>
                       <option value="30">30</option>
                  </select>
                  </div>
                </div>
                <div className="multi-options">
                  <input type="text" placeholder="Add an Option " />
                  <input type="text" placeholder="Add an Option " />
                  <input type="text" placeholder="Add an Option " />
                  <input type="text" placeholder="Add an Option "/>
                </div>
                <div className="add-more"> <h6> + Add more options</h6> </div>
                <div className="query"><h6>What is the meaning of UI UX Design ?</h6></div>
                <div className="select">
                  <div className="section">
                  <button>A</button>
                  <h6>User Interface and User Experience</h6>
                  <span><RiPencilFill/></span>
                  </div>
                  <div className="section">
                  <button>B</button>
                  <h6>User Interface and User Experience</h6>
                  <span><RiPencilFill/></span>
                  </div>
                  <div className="section">
                  <button>C</button>
                  <h6>User Interface and User Experience</h6>
                  <span><RiPencilFill/></span>
                  </div>
                  <div className="section">
                  <div className="clr"><button>D</button></div>
                  <h6>User Interface and User Experience</h6>
                  <span><RiPencilFill/></span>
                  </div>
                </div>
            </div>
        </div>
        <div className="result">                       <Link to='/addassign'>

          <h6>Add result template</h6></Link>
        </div>

      </div>
      
      
      </>
  );
};

export default OptionAdd;