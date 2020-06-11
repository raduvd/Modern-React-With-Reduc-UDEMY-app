import React from "react";
import LanguageContext from "./../context/LanguageContext";
import ColourContext from "./../context/ColourContext";

class Button extends React.Component {
  render() {
    return (
      <ColourContext.Consumer>
        {(color) => {
          console.log(color);
          return (
            <button className={`ui button ${color}`}>
              <LanguageContext.Consumer>
                {(language) =>
                  language === "english" ? "Submit" : "Submitere"
                }
              </LanguageContext.Consumer>
            </button>
          );
        }}
      </ColourContext.Consumer>
    );
  }
}
export default Button;
