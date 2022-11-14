import thankYouImg from "./illustration-thank-you.svg";

const ThankYou = ({ selectedInput }) => {
  return (
    <div>
      <img src={thankYouImg} alt="Thank you" />
      <div className="rating-output">
        <p>You selected {selectedInput} out of 5</p>
      </div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
      <button></button>
    </div>
  );
};

export default ThankYou;
