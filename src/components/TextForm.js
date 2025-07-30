import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter the text here");

  const handleUpClick = () => {
    console.log("UpperCase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    // props.showAlert("Conveted to UpperCase", "success");
  };

  const handleLoClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    // props.showAlert("Conveted to LowerCase", "success");
  };

  const handleClearClick = () => {
    console.log("Clear the text" + text);
    let newText = " ";
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  return (
    <>
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1> {props.heading} </h1>
        <div className="mb-4">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "dark" ? "white" : "black",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          {" "}
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>
          {" "}
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>
          {" "}
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1> Your text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p> {0.08 * text.split(" ").length} Minutes read</p>
        <h2> Preview </h2>
        <p>{text}</p>
      </div>
    </>
  );
}
