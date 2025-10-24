import { useCounterStore } from "../store/counter-store";

const Counter = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <h1 className="text-5xl">{count}</h1>
      <button
        onClick={increment}
        className="bg-amber-300 p-4 rounded-2xl text-2xl outline-0 cursor-pointer active:bg-amber-500"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="bg-amber-300 p-4 rounded-2xl text-2xl outline-0 cursor-pointer active:bg-amber-500"
      >
        decrement
      </button>
    </div>
  );
};

export default Counter;
