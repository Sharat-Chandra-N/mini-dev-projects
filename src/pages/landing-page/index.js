import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const randomColorGenerator = () => {
    return (
      "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0")
    );
  };

  const landingCardsData = [
    {
      id: 1,
      name: "Expense Calculator",
      color: randomColorGenerator(),
      path: "expense-calculator",
    },
  ];

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          padding: "5% 10%",
          overflowY: "auto",
          maxHeight: "80vh",
        }}
      >
        {landingCardsData?.map((card) => {
          return (
            <Link
              key={card?.id}
              to={card?.path}
              style={{
                width: "calc(25% - 40px)",
                margin: "20px",
                background: `${card?.color}60`,
                color: card?.color,
                border: `1px solid ${card?.color}`,
                borderRadius: "10px",
                height: "15vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
              }}
            >
              <div>
                <h4>{card?.name}</h4>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default LandingPage;
