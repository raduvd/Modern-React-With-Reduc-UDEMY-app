import React from "react";
import LanguageContext from "./../context/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext;

  render() {
    const labelText = this.context === "english" ? "Name" : "Nume";
    return (
      <div className="ui field">
        <label>{labelText}</label>
        <input />
      </div>
    );
  }
}
export default Field;
