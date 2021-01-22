import React, { useState } from "react";
import { data } from "./Components/data";
import List from "./Components/list";

const BirthdayApp = () => {
  const [state, setState] = useState(data);
  return (
    <section className="container">
      <h3 style={{ padding: "22px", backgroundColor: "#588ea5" , borderRadius: '5px' }}>{state.length} peoples have birthday.</h3>
      <List peoples={state} />
      <button
        onClick={(e) => {
          e.preventDefault();
          setState([]);
        }}
      >
        Clear All
      </button>
    </section>
  );
};

export default BirthdayApp;
