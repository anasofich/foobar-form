import { Link } from "react-router-dom";

export default function PaymentMethod(props) {
  return (
    <div className="paymentMethod">
      <h2>Payment Method</h2>
      <div className="methods">
        <div className="cardP">
          <svg xmlns="http://www.w3.org/2000/svg" width="40.5" height="31.5" viewBox="0 0 40.5 31.5">
            <path
              id="Icon_awesome-credit-card"
              data-name="Icon awesome-credit-card"
              d="M0,30.375A3.376,3.376,0,0,0,3.375,33.75h33.75A3.376,3.376,0,0,0,40.5,30.375V18H0Zm13.5-4.781a.846.846,0,0,1,.844-.844h9.563a.846.846,0,0,1,.844.844v2.813a.846.846,0,0,1-.844.844H14.344a.846.846,0,0,1-.844-.844Zm-9,0a.846.846,0,0,1,.844-.844h5.063a.846.846,0,0,1,.844.844v2.813a.846.846,0,0,1-.844.844H5.344a.846.846,0,0,1-.844-.844Zm36-19.969V9H0V5.625A3.376,3.376,0,0,1,3.375,2.25h33.75A3.376,3.376,0,0,1,40.5,5.625Z"
              transform="translate(0 -2.25)"
            />
          </svg>
        </div>
        <div className="cashP">
          <svg xmlns="http://www.w3.org/2000/svg" width="48.318" height="32.275" viewBox="0 0 48.318 32.275">
            <path
              id="Icon_payment-cash"
              data-name="Icon payment-cash"
              d="M54.768,17.954V47.02a2.071,2.071,0,0,1-.472,1.132,1.542,1.542,0,0,1-1.132.472H8.053a1.537,1.537,0,0,1-1.132-.472,2.063,2.063,0,0,1-.472-1.132V17.954a2.068,2.068,0,0,1,.472-1.132,1.545,1.545,0,0,1,1.132-.472h45.11a1.548,1.548,0,0,1,1.132.472,2.079,2.079,0,0,1,.472,1.132ZM51.559,38.9V26.07a6.173,6.173,0,0,1-4.53-1.887,6.283,6.283,0,0,1-1.887-4.624H16.075a6.288,6.288,0,0,1-1.887,4.624,6.177,6.177,0,0,1-4.53,1.887V38.9a6.183,6.183,0,0,1,4.53,1.887,6.292,6.292,0,0,1,1.887,4.624H45.141a6.287,6.287,0,0,1,1.887-4.624,6.181,6.181,0,0,1,4.53-1.887ZM38.63,32.487a16.539,16.539,0,0,1-.472,3.586,12.094,12.094,0,0,1-1.51,3.4A8.2,8.2,0,0,1,34.1,42.019a6.931,6.931,0,0,1-6.983,0,8.174,8.174,0,0,1-2.548-2.548,12.062,12.062,0,0,1-1.51-3.4,16.46,16.46,0,0,1-.472-3.586A16.475,16.475,0,0,1,23.06,28.9a12.056,12.056,0,0,1,1.51-3.4,8.2,8.2,0,0,1,2.548-2.548,6.929,6.929,0,0,1,6.982,0A8.243,8.243,0,0,1,36.648,25.5a12.1,12.1,0,0,1,1.51,3.4,16.523,16.523,0,0,1,.472,3.586ZM25.8,38.9h9.626V36.546H32.213V25.221H29.381l-3.775,3.491,1.982,1.982a15.451,15.451,0,0,0,1.321-1.416H29v7.266H25.795V38.9Z"
              transform="translate(-6.449 -16.35)"
            />
          </svg>
        </div>
        <div className="mpP">
          <img src="../images/mobilepay-logo.svg" />
        </div>
      </div>
      <Link className="checkoutBtn" to="/payment">
        CHECKOUT
      </Link>
    </div>
  );
}
