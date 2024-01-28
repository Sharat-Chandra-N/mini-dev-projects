import React from "react";
import LandingPage from "./pages/landing-page";
import { Routes, Route } from "react-router-dom";
import * as Comps from "./pages";

const App = () => {
  const basepath = "/mini-dev-projects";
  const routersArray = [
    {
      id: 1,
      path: "expense-calculator",
      component: <Comps.ExpenseCalc />,
    },
  ];
  return (
    <Routes>
      <Route path={basepath} element={<LandingPage />} />
      {routersArray?.map((route) => (
        <Route key={route?.id} path={`${basepath}/${route?.path}`} element={route?.component} />
      ))}
    </Routes>
  );
};

export default App;
