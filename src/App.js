import React, { Component } from "react";
import Houses from "./Houses";
import "./styles.css";
import House from "./House";
import Character from "./Character";

class App extends Component {
  houses = Houses.map(e => {
    return (
      <House
        houseName={e.houseName}
        houseImgSrc={e.imgSrc}
        founder={e.founder}
        element={e.element}
      />
    );
  });
  characters = Houses.map(e => {
    return (
      <Character
        charName={e.notableCharacter.charName}
        charImg={e.notableCharacter.imgSrc}
        houseName={e.houseName}
      />
    );
  });

  render() {
    return (
      <div>
        <div>
          <h1>Houses</h1>
          {this.houses}
        </div>
        <div>
          <h1>Characters</h1>
          {this.characters}
        </div>
      </div>
    );
  }
}
export default App;
