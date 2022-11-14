import { useState } from "react";
import { Card } from "./components/Card/Card";
import { ThankCard } from "./components/ThankCard/ThankCard";

function App() {
  const [selectedInput, setSelectedInput] = useState(0);

  const submitHandler = (rat) => {
    setSelectedInput(rat);
  };

  return (
    <div>
      <Card />
      {selectedInput ? (
        <ThankYou selectedInput={selectedInput} />
      ) : (
        <RateUs submitHandler={submitHandler} />
      )}
    </div>
  );
}

export default App;
