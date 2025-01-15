import { atom, useAtom } from "jotai";
import React from "react";
import { BounceingAtom } from "../services/Atom";

export const ComponentThree = () => {
  const [isBouncing] = useAtom(BounceingAtom);

  return (
    <div
      className={`bg-slate-200  text-black p-10 rounded-xl  ${
        isBouncing ? "animate-bounce" : ""
      } mt-5`}
    >
      Hello world from ComponentThree
      <br />
    </div>
  );
};
export const ComponentTwo = () => {
  return (
    <div className="bg-blue-950 text-slate-50 p-10   rounded-xl ">
      hello from second component
      <br />
      <ComponentThree />
    </div>
  );
};
function ComponentOne() {
  const [isBouncing, setIsBouncing] = useAtom(BounceingAtom);

  return (
    <div className="bg-red-200 p-10 rounded-xl ">
      Hello world from ComponentOne.
      <button
        onClick={() => {
          setIsBouncing(false);
        }}
        className="border-2 rounded-md w-20 p-2 bg-blue-500"
      >
        pause
      </button>
      <br />
      <ComponentTwo />
    </div>
  );
}

function GlobalState() {
  const [isBouncing, setIsBouncing] = useAtom(BounceingAtom);
  return (
    <div className=" h-screen flex flex-col justify-center items-center">
      <button
        onClick={() => {
          setIsBouncing(!isBouncing);
        }}
        className="p-2 border-2 rounded-lg w-20 bg-blue-500"
      >
        {" "}
        play
      </button>

      <ComponentOne />
    </div>
  );
}

export default GlobalState;
