import "./assignment.scss";
import pic8 from "../../assets/icons/watch.jpg";

const Assignment = () => {
return (
<div className="Assignment">
        {/* .......part 1........ */}
        <div className="top">
                <div className="crop"></div>
                <div className="short">
                        <form >
                        <div className="face1"><input type="radio" name="education"/> Critical Analysis </div>
                        <div className="face2"><input type="radio" name="education" /> Multiple Choice</div>
                        <div className="face3"><input type="radio" name="education" /> Question & Answer</div>
                        </form>
                </div>
                <div className="crop2"></div>
        </div>
        {/* ..........part 2........ */}
        <div className="long">
                <textarea name="type"  cols="64" rows="3" placeholder="Add description"></textarea>
        </div>
        {/* ...........part3........... */}
        <div className="squre">
                <div className="squre2">
                        <div className="circle">
                                <div className="circle1"><p>1</p></div>
                                <div className="circle2"><p>2</p></div>
                                <div className="circle3"><p>3</p></div>
                                <div className="circle4"><p>4</p></div>
                                <div className="circle5"><p>5</p></div>
                                <div className="circle6"><p>+</p></div>
                        </div>
                        <div className="straight">
                                
                        </div>
                </div>
                <div className="round">
                        <input type="text"  placeholder="Add question"/>
                </div>
        <div className="clock">
                <div className="clock2">
                        <div className="watch">
                        <img src={pic8} alt="" />
                        </div>
                        <div className="watch2">
                                <select name="time" id="time">
                                        <option value="60"><p>60</p></option>
                                        <option value="30"><p>30</p></option>
                                </select>
                        </div>
                </div>
        </div>
        </div>
        {/* ......part4........ */}
        <div className="template">
                <p>Add Result Template</p>
        </div>

        
        
</div>

        );
};

export default Assignment;
