import React from "react";
import { useSelector } from "react-redux";

const CatFact = () => {
  const fact = useSelector(state => state.fact);
  return <div className="fact">{fact.text}</div>;
};

export default CatFact;
