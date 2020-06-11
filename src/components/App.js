import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "./../context/LanguageContext";
import ColourContext from "./../context/ColourContext";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = (newLanguage) => {
    this.setState({ language: newLanguage });
  };
  render() {
    return (
      <div className="ui container">
        App<div>Select a language</div>
        <i
          onClick={() => this.onLanguageChange("english")}
          className="flag us"
        ></i>
        <i
          onClick={() => this.onLanguageChange("romania")}
          className="flag ro"
        ></i>
        <ColourContext.Provider value="red">
          <LanguageContext.Provider value={this.state.language}>
            <UserCreate></UserCreate>
          </LanguageContext.Provider>
        </ColourContext.Provider>
        <LanguageContext.Provider value={"romana"}>
          <UserCreate></UserCreate>
        </LanguageContext.Provider>
        <UserCreate></UserCreate>
      </div>
    );
  }
}
export default App;
