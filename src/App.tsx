import { useEffect, useState } from "react";
import "./styles.css";

const slowOperation = () => {
  let counter = 0;
  while (counter < 10000) {
    counter++;
  }
  return counter;
};

export default function App() {
  const [lazyState] = useState(() => slowOperation());

  console.log(`rerender (${performance.now()})`);

  useEffect(() => {
    console.log(`didmount (${performance.now()})`);
  }, []);

  useEffect(() => {
    console.log(`finish lazy: lazyState (${performance.now()})`);
  }, [lazyState]);

  return (
    <div className="App">
      <h1>{lazyState}</h1>
    </div>
  );
}
