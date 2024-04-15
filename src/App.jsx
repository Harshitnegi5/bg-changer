import React, { useState } from "react";

function App() {
  const [color, setcolor] = useState("black");
  return (
    <div
      style={{ backgroundColor: color }}
      className="w-full h-screen relative "
    >
      <div className="py-5 w-[50%] bg-zinc-100 absolute bottom-[10%] left-[25%] rounded-full flex justify-around items-center ">
        <button
          onClick={() => {
            setcolor("red");
          }}
          className="outline-none border-none  font-semibold px-10 bg-red-700 text-lg text-white py-4 rounded-full"
        >
          red
        </button>
        <button
          onClick={() => {
            setcolor("orange");
          }}
          className="outline-none border-none font-semibold px-10 bg-orange-700 text-lg text-white py-4 rounded-full"
        >
          orange
        </button>
        <button
          onClick={() => {
            setcolor("green");
          }}
          className="outline-none border-none font-semibold px-10 bg-green-700 text-lg text-white py-4 rounded-full"
        >
          green
        </button>
        <button
          onClick={() => {
            setcolor("blue");
          }}
          className="outline-none border-none  font-semibold px-10 bg-blue-700 text-lg text-white py-4 rounded-full"
        >
          blue
        </button>
        <button
          onClick={() => {
            setcolor("yellow");
          }}
          className="outline-none border-none font-semibold px-10 bg-yellow-700  text-lg text-white py-4 rounded-full"
        >
          yellow
        </button>
      </div>
    </div>
  );
}

export default App;
