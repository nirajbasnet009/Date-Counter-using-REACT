import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Steps />
    </div>
  );
}

function Steps() {
  [step, setStep] = useState(1);

  return (
    <div>
      <button onClick={() => setStep((step) => step - 1)}>-</button>
      <span> Step: {step} </span>
      <button onClick={() => setStep((step) => step + 1)}>+</button>
      <Count step={step} />
    </div>
  );
}

function Count({ step }) {
  [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count - step)}>-</button>
      <span> Count: {count} </span>
      <button onClick={() => setCount((count) => count + step)}>+</button>
      <Display count={count} />
    </div>
  );
}

function Display({ count }) {
  const d = new Date();
  d.setDate(d.getDate() + count);
  return (
    <div>
      <br />
      {count === 0
        ? "Today is "
        : count > 0
        ? `${count} day from today is `
        : `${count} days ago was `}
      <span>{d.toDateString()}</span>
    </div>
  );
}
