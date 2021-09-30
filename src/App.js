import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😎": "cool",
  "🍫": "chocolate",
  "❤️": "love",
  "🎂": "cake",
  "🙈": "blushing face",
  "🔥": "fire"
};

var emoji = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) { //processing
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "we don't have this in our database";
    }
    setMeaning(meaning); //set meaning using set state in view
  }

  function emojiClickHandler(emoji) { //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning); //set meaning using set state in view
  }
  return (
    <div className="App">
      <h1>Emojipreter !</h1>
      <input
        placeholder="Put an emoji here to know the meaning of it"
        onChange={emojiInputHandler}
      />
      
      <h2>{meaning}</h2> 
      {emoji.map(function (emoji) {
        return (
          <span onClick={() => emojiClickHandler(emoji)} key={emoji}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

/*VISER -- View -->Interact --> State in Event Handler
  --> Render */
