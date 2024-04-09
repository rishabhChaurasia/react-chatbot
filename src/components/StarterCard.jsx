import React from "react";
import Card from "./Card";

const staterPrompt = [
  {
    inputValue: "Find YouTube videos with inspiring best man speeches",
  },
  {
    inputValue: "Help me craft a text response to a friend",
  },
  {
    inputValue: "Help me find YouTube videos to care for a specific plant",
  },
  {
    inputValue: "Flights to Tokyo and Seoul, and things to do",
  },
];

const StarterCard = () => {
  return (
    <div className="starterCard">
      {staterPrompt.map((val, idx) => {
        return <Card key={idx} {...val} />;
      })}
    </div>
  );
};

export default StarterCard;
