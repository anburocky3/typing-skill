import { useEffect, useRef, useState } from "react";
import paragraphData from "./data";
import React from "react";

function App() {
  const [textData, setTextData] = useState("");

  let charIndex = 0;

  const inputRef = useRef<HTMLInputElement>(null);

  const randomParagraph = () => {
    const randIndex = Math.floor(Math.random() * paragraphData.length);
    let draftText = "";
    paragraphData[randIndex].split("").forEach((span) => {
      draftText += span;
    });

    setTextData(draftText);
  };

  useEffect(() => {
    randomParagraph();
  }, []);

  const focusInputEl = () => {
    inputRef.current?.focus();
  };

  const initTyping = () => {
    const typedChar = inputRef.current?.value.split("")[charIndex];

    if (paragraphData[charIndex] === typedChar) {
      console.log("correct");
    } else {
      console.log("wrong");
    }
    charIndex++;
    // console.log(typedChar, inputRef.current?.value);
  };

  return (
    <>
      <div
        className="bg-blue-500 min-h-screen p-10 font-poppins flex items-center"
        onClick={focusInputEl}
      >
        <div className="bg-white  rounded max-w-xs w-full ">
          <h4 className="font-medium text-gray-800 p-5">Your Typing history</h4>
          <ul className="">
            {[1, 2, 3, 4, 5].map((num) => (
              <li
                className="flex items-center hover:bg-gray-100 rounded text-sm px-5 py-3 border-b"
                key={`history-${num}`}
              >
                <div className="text-4xl rounded-full mr-4 w-6">{num}</div>
                <div>
                  <span className="font-medium">06-July-2023 - (04:00PM)</span>
                  <ul className="flex space-x-4 text-xs pt-1">
                    <li>23s</li>
                    <li>4 Mistakes</li>
                    <li>WPM 18</li>
                    <li>CPM 25</li>
                  </ul>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded-lg p-5 max-w-xl mx-auto ">
          <div className="border rounded">
            <input
              ref={inputRef}
              type="text"
              className="px-3 py-2 bg-gray-100 border w-full outline-none"
              placeholder="Start Typing here"
              autoFocus
              onInput={initTyping}
            />
            <div className="p-3 text-gray-600 text-justify">{textData}</div>
            <hr className="" />
            <div className="flex space-x-4 p-3 items-center">
              <div className="flex items-center space-x-4 flex-1 justify-between ">
                <div>
                  Time Left: <span className="font-semibold">23</span>s
                </div>
                <div>
                  Mistakes: <span className="font-semibold">4</span>
                </div>
                <div>
                  WPM: <span className="font-semibold">18</span>
                </div>
                <div>
                  CPM: <span className="font-semibold">56</span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="px-3 py-1 rounded bg-blue-500 text-white"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
