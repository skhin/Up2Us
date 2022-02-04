import React, { useState } from "react";
import "./Price.css";
import { Button, message } from "antd";

const Price = ({ setQNumber, setEstablishment, establishment }) => {
  const [activePrice, setActivePrice] = useState();

  // PRICE DATA
  const priceData = [
    {
      id: 1,
      amount: "$$",
    },
    {
      id: 2,
      amount: "$$$",
    },
    {
      id: 3,
      amount: "$$$$",
    },
    {
      id: 4,
      amount: "I don't care",
    },
  ];

  // SELECTING PRICE OPTION
  const handleOption = (item) => {
    setActivePrice(item.id);
    setEstablishment({ ...establishment, price: item.amount });
  };

  // MOVE TO NEXT QUESTION
  const handleNextQuestion = () => {
    if (activePrice) {
      setQNumber(3);
    } else {
      message.warning("Please select Price Range to proceed!");
    }
  };

  return (
    <div className="pricePage container">
      <div className="heading">
        <h1>Question 2: PRICE</h1>
      </div>
      <div className="pricePage_container">
        <h1>How much are you willing to spend?</h1>
        <div className="price_bx">
          {priceData.map((item) => (
            <div
              className="price"
              key={item.id}
              onClick={() => handleOption(item)}
            >
              <h1
                style={{
                  fontSize: `${activePrice === item.id ? "22px" : "30px"}`,
                  color: `${activePrice === item.id ? "#2ecc71" : ""}`,
                }}
              >
                {item.amount}
              </h1>
            </div>
          ))}
        </div>
        <div className="price_btn">
          <Button onClick={() => setQNumber(1)} type="primary" size="large">
            Back
          </Button>
          <Button onClick={handleNextQuestion} type="primary" size="large">
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Price;
