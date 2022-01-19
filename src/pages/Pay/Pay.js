import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Pay.css";

export default function Pay() {
  return (
    <>
      <div className="container">
        <Navbar />
        <div className="body-pay">
          <h1>Premium</h1>
          <p>
            Bayar sekarang dan nikmati streaming music yang kekinian dari{" "}
            <strong>DUMB</strong><strong>SOUND</strong> <strong>DUMB</strong>
            <strong>SOUND</strong> : 0981312323
          </p>
          <form>
              <input type="text" placeholder="Input Your Account Number" />
              <label htmlFor="proofAttachment" >Attache Proof of Transfer</label>
              <input id="proofAttachment" type="file" />
              <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
