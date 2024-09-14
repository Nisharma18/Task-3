import React, { useState } from "react";

const Card = () => {
  const [inputText, setInputText] = useState("");
  const [cards, setCards] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const addCard = () => {
    if (inputText.trim()) {
      setCards([...cards, inputText]); // Add new card to the list
      setInputText(""); // Clear the input after adding a card
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addCard();
    }
  };

  const deleteCard = (index) => {
    const updatedCards = cards.filter((_, i) => i !== index);
    setCards(updatedCards); // Remove card at the specified index
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        
      }}
    >
      <input
        type="text"
        placeholder="Take a Note..."
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        style={{ padding: "10px", width: "300px" }}
      />
      <button
        onClick={addCard} // Trigger addCard on button click
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          cursor: "pointer",
          borderRadius: "5px",
        }}
      >
        Add
      </button>
      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}>
        {cards.map((text, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              marginBottom: "10px",
              marginRight: "10px",
              display: "flex",
              alignItems: "center",
              wordWrap: "break-word",
              maxWidth: "300px",
              position: "relative",
            }}
          >
            <span style={{ flexGrow: 1 }}>{text}</span>
            <button
              onClick={() => deleteCard(index)}
              style={{
                marginLeft: "10px",
                padding: "5px",
                backgroundColor: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              {/* Using an emoji as an icon, but resized to 10px */}
              <span
                role="img"
                aria-label="delete"
                style={{ fontSize: "10px", color: "#FF4D4D" }}
              >
                🗑️
              </span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
