import React from "react";
import { useDispatch } from "react-redux";

import { getFact } from "../actions/index";

const CatButton = () => {
  const dispatch = useDispatch();

  const handleFetch = e => {
    e.preventDefault();
    dispatch(getFact());
  };
  return (
    <div>
      <button onClick={handleFetch}>Fetch Fact</button>
    </div>
  );
};

export default CatButton;
