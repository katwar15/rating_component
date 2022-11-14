import { useState } from "react";
import RateUs from "./components/RateUs/RateUs";
import ThankCard from "./components/ThankCard/ThankCard";
import "./App.css";

function App() {
  const [selectedInput, setSelectedInput] = useState(0);

  const submitHandler = (rat) => {
    setSelectedInput(rat);
  };

  return (
    <div>
      {selectedInput ? (
        <ThankCard selectedInput={selectedInput} />
      ) : (
        <RateUs submitHandler={submitHandler} />
      )}
    </div>
  );
}

export default App;
