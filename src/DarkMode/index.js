import React from "react";
// import { withRouter, BrowserRouter as Router, Switch } from "react-router-dom";
import { connect } from "react-redux";
// import Buttons from "./SwitchContainer";
import './style.css'
import Buttons from "./SwitchContainer";


// Piece of Shitttttttttttttttttttt................
const DarkModeApp = (props) => {
  return (
    <div className={props.mode ? "App" : "night"}>
      <h1 style={{ height: 50, marginBottom: 0, padding: 5 }}>React Editor</h1>
      <Buttons mode={props.mode} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    mode: state.mode,
  };
};

export default connect(mapStateToProps)(DarkModeApp);
