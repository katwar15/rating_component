import iconStar from "./icon-star.svg";
import { useState } from "react";

const RateUs = (prop) => {
  const [rateUs, setRateUs] = useState(0);
  return (
    <>
      <div class="rate">
        <img src={iconStar} alt="" />
        <h1 className="title">How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <ul>
          <li>
            <button
              class="button_rate"
              onClick={() => setRateUs(1)}
              type="radio"
              name="ratings"
              id="rating-1"
              value="1"
            >
              1
            </button>
          </li>
          <li>
            <button
              class="button_rate"
              onClick={() => setRateUs(2)}
              type="radio"
              name="ratings"
              id="rating-2"
              value="2"
            >
              2
            </button>
          </li>
          <li>
            <button
              class="button_rate"
              onClick={() => setRateUs(3)}
              type="radio"
              name="ratings"
              id="rating-3"
              value="3"
            >
              3
            </button>
          </li>
          <li>
            <button
              class="button_rate"
              onClick={() => setRateUs(4)}
              type="radio"
              name="ratings"
              id="rating-4"
              value="4"
            >
              4
            </button>
          </li>
          <li>
            <button
              class="button_rate"
              onClick={() => setRateUs(5)}
              type="radio"
              name="ratings"
              id="rating-5"
              value="5"
            >
              5
            </button>
          </li>
        </ul>
        <button
          class="button_submit"
          onClick={() => prop.submitHandler(rateUs)}
          type="submit"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default RateUs;
