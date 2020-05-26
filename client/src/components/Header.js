import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render = () => {
    return (
      <div className="ui secondary menu">
        <Link to="/" className="item">
          Stream App
        </Link>
        <div className="right menu">
          <Link to="/" className="item">
            All Streams
          </Link>
        </div>
      </div>
    );
  };
}
export default Header;
