import React, { useState, useEffect } from "react";
import "./Style/Plans.css";
import axios from "axios";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
const Plans = () => {
  const history = useHistory();
  const [plan, setPlan] = useState("100 1");
  const [plann, setPlann] = useState("100");
  const [month, setMonth] = useState("1");
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const Change = (e) => {
    let temp = e.split(" ");
    setPlan(e);
    setPlann(temp[0]);
    setMonth(temp[1]);
  };
  const [buyloading, setbuyloading] = useState(false);
  console.log(user);
  function loadScript(src) {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  }

  async function displayRazorpay() {
    try {
      const res = await loadScript(
        "https://checkout.razorpay.com/v1/checkout.js"
      );

      if (!res) {
        alert("Razorpay SDK failed to load. Are you online?");
        return;
      }
      setbuyloading(true);
      const response = await axios.post(
        `http://pgrdemo.herokuapp.com/users/createOrder`,
        {
          amount: plann,
        }
      );

      if (!response.data) {
        // alert('Server error. Are you online?');
        NotificationManager.error("Something went Wrong");
        setbuyloading(false);
        return;
      }

      // Getting the order details back
      const { amount, id: order_id, currency } = response.data;

      const options = {
        key: "rzp_test_hv6LKzFbQ6yQcc", // Enter the Key ID generated from the Dashboard
        amount,
        currency,
        name: "PGR Demo.",
        description: `Buy ${user.result.name}`,
        modal: {
          ondismiss: function () {
            setbuyloading(false);
          },
        },
        handler: async function (response) {
          const data = {
            orderCreationId: order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpayOrderId: response.razorpay_order_id,
            razorpaySignature: response.razorpay_signature,
            userId: user.result._id,
            amount,
            dur: month,
          };
          // dispatch(actions.buyuserRequest(data));

          const resp = await axios.post(
            "http://pgrdemo.herokuapp.com/users/buy",
            data
          );

          if (resp.status == 201) {
            NotificationManager.success("Purchase successFull!");
            resp.data.token = user.token;
            setUser(resp.data);
            localStorage.setItem("profile", JSON.stringify(resp.data));
            history.replace("/");
          } else {
            NotificationManager.error("Couldnt buy user");
          }
          setbuyloading(false);
        },
        prefill: {
          name: "PGR Demo",
          email: "pgrdemo@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Praedico Global Research",
        },
        theme: {
          color: "#61dafb",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error) {
      console.log(error, "sad");
      NotificationManager.error("Something Went Wrong Try Again!!");
      setbuyloading(false);
    }
  }

  return (
    <>
      <div
        className="card plans"
        style={{ width: "24rem", boxShadow: "0 2px 10px 4px gray" }}
      >
        <div className="card-img-top img"></div>
        <div className="card-body">
          <h5 className="card-title plans-title">Buy Our Plans</h5>
          <p className="card-text plans-text">
            <p>1 Month Plan - $100</p>
            <p>3 Months Plan - $300</p>
            <p>6 Months Plan - $600</p>
            <p>12 Months Plan - $1000</p>
          </p>
          <label>Select Your Plan</label>
          <div>
            <select
              className="select-plan"
              value={plan}
              onChange={(e) => Change(e.target.value)}
            >
              <option value="100 1">1 Month Plan - $100</option>
              <option value="300 3">3 Months Plan - $300</option>
              <option value="600 6">6 Months Plan - $600</option>
              <option value="1000 12">12 Months Plan - $1000</option>
            </select>
            <Button
              disabled={user?.result.payment}
              variant="contained"
              color="primary"
              onClick={() => {
                if (user) {
                  displayRazorpay();
                } else {
                  history.replace("/login");
                }
              }}
              style={{ cursor: "pointer" }}
            >
              {buyloading ? (
                <CircularProgress size={30} color="#fff" />
              ) : user?.result.payment ? (
                "Bought"
              ) : (
                "Buy Plan"
              )}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plans;
