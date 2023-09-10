"use client";

import React from "react";

type Props = {
  children: React.ReactNode;
};

export const ProuductsCounter = ({ children }: Props) => {
  const [counter, setCounter] = React.useState(0);

  return (
    <div>
      <button onClick={() => setCounter(counter - 1)}>-</button>
      <input readOnly value={counter} />
      <button onClick={() => setCounter(counter + 1)}>+</button>
      {counter % 2 === 0 ? children : null}
    </div>
  );
};
