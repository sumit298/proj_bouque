import React from "react";

import { FaFileCode, FaLightbulb } from "react-icons/fa";
import { connect } from "react-redux";
import { changeMode } from "./Redux/actions";

const Buttons = (props) => {
  var { mode, changeMode } = props;
  return (
    <div className="buttonsContainer">
      <div>
        <div className="buttons">
          <FaLightbulb />
          <span className="tooltiptext">
            {mode ? "Day Mode" : "Night Mode"}
          </span>
        </div>
        <div className="buttons">
          <FaFileCode />
          <span className="tooltiptext">Download Code</span>
        </div>
      </div>
    </div>
  );
};


export default connect(null, {changeMode})(Buttons)


