import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount, reset, StateType } from "./store/store";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state: StateType) => state.count);
  const [amount, setAmount] = useState<number>(0);

  const incrementByAmountHandler = () => {
    dispatch(incrementByAmount(amount));
  };
  return (
    <>
      <h1>Counter: Redux Toolkit + TypeScript</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          marginBottom: "20px",
          fontSize: "20px",
        }}
      >
        <h2>Current Count: {count}</h2>
        <div style={{
          display: "flex",
          gap: "10px"
        }}>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(reset())}>Reset</button>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(Number(e.target.value))}
          />
          <button disabled={amount <= 0} onClick={incrementByAmountHandler}>
            Increment by {amount}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
