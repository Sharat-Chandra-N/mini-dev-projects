import React from "react";

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
      path: "/expense-calculator",
    },
  ];

  return (
    <>
      <h2 style={{textAlign:"center"}}> Mini React Project</h2>
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
            <a
              href={`${window.location.pathname}${card?.path}`}
              target="_blank"
              rel="noreferrer"
              key={card?.id}
              style={{
                width: "calc(25% - 40px)",
                margin: "20px",
                background: `${card?.color}60`,
                color: card?.color,
                border: `1px solid ${card?.color}`,
                borderRadius: "10px",
                textDecoration: "none",
                height: "15vh",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <h4>{card?.name}</h4>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};

export default LandingPage;
