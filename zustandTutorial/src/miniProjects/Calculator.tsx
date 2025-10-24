import { useState } from "react";

const Calculator = () => {
  const [input, setInput] = useState("");

  const clearInput = () => setInput("");
  const deleteInput = () => setInput((prev) => prev.slice(0, -1));

  const display = (value: string) => setInput(input + value);

  const calculate = () => {
    setInput(eval(input));
    // setInput("");
  };

  return (
    <section className="flex justify-center h-screen items-center">
      <div className="flex flex-col p-10 bg-amber-200 rounded-lg">
        <input
          type="text"
          value={input}
          className=" text-2xl p-3 bg-slate-950 text-white font-semibold"
        />
        <div className="mt-5 grid grid-cols-3 gap-3 w-full">
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => clearInput()}
          >
            C
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => deleteInput()}
          >
            del
          </button>
          <button className="bg-amber-800 text-white p-4 text-2xl cursor-pointer">
            +
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            value={1}
            onClick={() => display("1")}
          >
            1
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("2")}
          >
            2
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("-")}
          >
            -
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("3")}
          >
            3
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("4")}
          >
            4
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("*")}
          >
            *
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("5")}
          >
            5
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("6")}
          >
            6
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("/")}
          >
            /
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("7")}
          >
            7
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("8")}
          >
            8
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("9")}
          >
            9
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display("0")}
          >
            0
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => display(".")}
          >
            .
          </button>
          <button
            className="bg-amber-800 text-white p-4 text-2xl cursor-pointer"
            onClick={() => calculate()}
          >
            =
          </button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
