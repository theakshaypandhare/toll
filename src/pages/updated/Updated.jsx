import "./updated.scss";
import { AiOutlinePlus } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { Link } from "react-router-dom";

const Updated = () => {
    return (
      <>
      <div className="updated">
            <div className="inside">
                <div className="top"></div>
                <div className="input">
                    <form >
                    <div className="radio1"><input type="radio" name="test" /> Critical analysis</div>
                    <Link to='/OptionAdd'>
 <div className="radio2"><input type="radio" name="test" /> Multiple choice</div>
                    </Link><div className="radio3"><input type="radio" name="test" /> Question & Answer</div>
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
              </div>
            </div>


       <Link to="/addassign">
        <div className="addresult">Add result template</div>
      
       </Link></div>


    </>
  );
};

export default Updated;