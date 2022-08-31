import React from "react";
import "./styles.css";
function TextStyle({ text, coloredIndices, style }) {
  if (text.split(" ").length < Math.max(...coloredIndices)) {
    throw new Error("Colored Indexes out of bounds");
  }
  const splitText = text.trim().split(" ");
  const finalText = splitText.map((word, index) => {
    return (
      <h1 className="text-style" key={index} style={style}>
        {word}
        {coloredIndices.includes(index) ? (
          <svg
            style={{ position: "absolute", top: "-20px", right: "-3px" }}
            width="93"
            height="10"
            viewBox="0 0 93 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.742188"
              width="91.2667"
              height="9.12667"
              fill="#019FFE"
            />
          </svg>
        ) : (
          ""
        )}
      </h1>
    );
  });
  return <div className="text-style-wrapper">{finalText}</div>;
}

export default TextStyle;
