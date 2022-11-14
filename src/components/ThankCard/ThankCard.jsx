import thankYouImg from "./illustration-thank-you.svg";

const ThankCard = ({ selectedInput }) => {
  return (
    <div class="thank_you">
      <img src={thankYouImg} alt="Thank you" />
      <p class="rate_info">You selected {selectedInput} out of 5</p>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don't hesitate to get in touch!
      </p>
    </div>
  );
};

export default ThankCard;
