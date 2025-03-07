import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const btnClicked = async () => {
    if (!name) {
      setMessage("Name is required.");
      return;
    }
    try {
      const response = await axios.get(
       
        `http://localhost:5000/api/greet?name=${name}`
       
      );
     

      setMessage(response.data.message);
    } catch (error) {
      console.log(error)
   
    }
  };
  return (
    <div className="flex justify-center items-center mt-20">
      <div className=" w-[500px] h-[400px] shadow-2xl shadow-black rounded-2xl flex flex-col justify-center items-center">
        <h1 className="font-bold text-2xl pb-20">Greeting Page</h1>
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          className="border border-gray-800 rounded-sm w-[300px] p-1 outline-none"
          type="text"
          placeholder="Enter your name..."
        />
        <button
          onClick={btnClicked}
          className="px-3 py-2 w-30 mt-4 cursor-pointer bg-black text-white rounded-sm "
        >
          Greeting
        </button>
        {message && <h1 className="mt-4 text-lg text-gray-700">{message}</h1>}
      </div>
    </div>
  );
};

export default App;
