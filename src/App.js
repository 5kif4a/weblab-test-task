import { useEffect, useRef, useState } from "react";

// rewrite as pure function component
const Counter = ({ counter }) => {
  return <span>{counter}</span>;
};

// rewrite as pure function component
const RandomList = ({ count }) => {
  const generateNumbers = () => {
    return Array(count)
      .fill()
      .map(() => Math.ceil(Math.random() * 101));
  };

  return (
    <ul>
      {generateNumbers().map((number, index) => (
        <li key={index}>{number}</li>
      ))}
    </ul>
  );
};

function App() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  const counterRef = useRef(initialState);

  const increment = () => {
    setCounter(counterRef.current + 1);
  };

  useEffect(() => {
    counterRef.current = counter;
  });

  useEffect(() => {
    setInterval(increment, 3000);
  }, []);

  return (
    <div>
      <button onClick={increment}>Инкрементировать</button>
      <Counter counter={counter} />
      <RandomList count={counter} />
    </div>
  );
}

export default App;
