import "./addassign.scss";

const AddAssign = () => {
  return (
    <>
      <div className="addassign">
        <div className="inside">
          <div className="top"></div>
          <div className="input">
            <form>
              <div className="radio1">
                 <input type="radio" name="test" /> Critical analysis
              </div>
              <div className="radio2">
                <input type="radio" name="test" /> Multiple choice
                </div>
              <div className="radio3">
                <input type="radio" name="test" /> Question & Answer
                </div>
            </form>
          </div>
          <div className="bottom"></div>
        </div>
        <div className="factor">
          <select name="factor" id="factor">
            <option value="factor 1">Add evaluation factor</option>
            <option value="factor 2">factor 2</option>
            <option value="factor 3">factor 3</option>
          </select>
        </div>
        <div className="button">
          <button>100</button>
        </div>
        <div className="content">
          <div className="content_1">
            <select name="content" id="content">
              <option value="Content and information ">
                Content and information{" "}
              </option>
              <option value="content">content</option>
            </select>
            <h6>30</h6>
          </div>
          <div className="content_1">
            <select name="content" id="content">
              <option value="Content and information ">
                Content and information{" "}
              </option>
              <option value="content">content</option>
            </select>
            <h6>30</h6>
          </div>
          <div className="content_1">
            <select name="content" id="content">
              <option value="Content and information ">
                Content and information{" "}
              </option>
              <option value="content">content</option>
            </select>
            <h6>20</h6>
          </div>
          <div className="content_1">
            <select name="content" id="content">
              <option value="Content and information ">
                Content and information{" "}
              </option>
              <option value="content">content</option>
            </select>
            <h6>20</h6>
          </div>
        </div>
        <div className="note">
          <div className="paragraph">
            <h6>Note</h6>
            <p>
              Add evaluation factors based on the type of case study, type of
              assignment, the topic and subjects to the case study belong. Also
              assign points to each factor based on all the aspects but make
              sure total points should be 100
            </p>
          </div>
        </div>
        <div className="calculation">
            <h6> Add a calculation template</h6>
            <div></div>
        </div>
        <div className="descrip">
          <textarea name="content" id="content" cols="47" rows="10" placeholder="Add content"></textarea>
        </div>
        <div className="save">
            <button>Save</button>
        </div>
      </div>
    </>
  );
};

export default AddAssign;
