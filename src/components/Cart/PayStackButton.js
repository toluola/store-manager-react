import React, { Component } from "react";
import { navigate } from "@reach/router";
//import the library
import PaystackButton from "react-paystack";

class App extends Component {
  state = {
    key: "pk_test_a9de4f30af9ee4b5fb5dc87fcf90f38447ce58fe", //PAYSTACK PUBLIC KEY
    email: "foobar@example.com", // customer email
    amount: 10000000 //equals NGN100,
  };

  callback = response => {
    this.props.clearCart();
    navigate("/");
  };

  close = () => {
    console.log("Payment closed");
  };

  getReference = () => {
    //you can put any unique reference implementation code here
    let text = "";
    let possible =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-.=";

    for (let i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  };

  render() {
    return (
      <div>
        <PaystackButton
          text="Make Payment"
          class="payButton"
          callback={this.callback}
          close={this.close}
          disabled={true}
          embed={true}
          reference={this.getReference()}
          email={this.state.email}
          amount={this.state.amount}
          paystackkey={this.state.key}
          tag="button"
        />
      </div>
    );
  }
}

export default App;
