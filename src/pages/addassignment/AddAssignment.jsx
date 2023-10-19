import "./addassignment.scss";

const AddAssignment = () => {
  return (
    <>
      <div className="AddAssignment">
        {/* ............part1............. */}
        <div className="first">
          <div className="second"></div>
          <div className="third">
            <form>
              <div className="third1">
                <input type="radio" name="education" /> Critical Analysis
              </div>
              <div className="third2">
                <input type="radio" name="education" /> Multiple Choice
              </div>
              <div className="third3">
                <input type="radio" name="education" /> Question & Answer
              </div>
            </form>
          </div>
          <div className="second2"></div>
        </div>
        {/* ...............part 2............... */}
        <div className="drop">
          <div className="down">
            <select name="factor" id="factor">
              <option value="factor1">Add evalution factor</option>
              <option value="factor2">factor2</option>
              <option value="factor3">factor3</option>
            </select>
          </div>
        </div>
        {/* ...............part 3......... */}
        <div className="tap">
          <button>100</button>
        </div>
        {/* ...........part4........... */}
        <div className="split">
          <div className="combine1">
            <select name="info" id="info">
              <option value="content and information">
                Content and information
              </option>
              <option value="content">content</option>
              <option value="info">info</option>
            </select>
            <p>30</p>
          </div>
          <div className="combine2">
            <select name="con" id="con">
              <option value="content and information">
                Content and information
              </option>
              <option value="content">content</option>
              <option value="info">info</option>
            </select>
            <p>30</p>
          </div>
        </div>
        <div className="split2">
          <div className="combine3">
            <select name="formation" id="formation">
              <option value="content and information">
                Content and information
              </option>
              <option value="content">content</option>
              <option value="info">info</option>
            </select>
            <p>20</p>
          </div>
          <div className="combine4">
            <select name="format" id="format">
              <option value="content and information">
                Content and information
              </option>
              <option value="content">content</option>
              <option value="info">info</option>
            </select>
            <p>20</p>
          </div>
        </div>
        {/* .......part5....... */}
        <div className="most">
          <div className="note1">
            <p>Note</p>
          </div>
          <div className="note2">
            <p>
              Add evaluation factors based on the type of case study, type of
              assignment, the topic and subjects to the case study belong. Also
              assign points to each factor based on all the aspects but make
              sure total points should be 100
            </p>
          </div>
        </div>
        {/* .........part 6........ */}
        <div className="scrool">
          <p>Add a calculation Template</p>
        </div>
        {/* ..........part7........ */}
        <div className="descrip">
          <textarea name="content" id="content" cols="47" rows="10" placeholder="Add content"></textarea>
        </div>
        {/* ..........part8........ */}
        <div className="clik">
          <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddAssignment;
