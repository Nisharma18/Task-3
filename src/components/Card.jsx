import React, { useState } from "react";

const Card = () => {
  const [inputText, setInputText] = useState("");
  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputText.trim()) {
      setCards([...cards, inputText]); // Add new card to the list
      setInputText(""); // Clear the input after enter
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Take a Note..."
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown} // Replaced onKeyPress with onKeyDown
      />
      <div style={{ marginTop: "20px" }}>
        {cards.map((text, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              display: "inline-block",
              wordWrap: "break-word",
              maxWidth: "300px",
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </>
  );
};

export default Card;





