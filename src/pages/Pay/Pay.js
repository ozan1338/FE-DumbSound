import React,{useState} from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Pay.css";
import AlertError from "../../components/AlertError/AlertError"
import AlertSuccess from "../../components/AlertSuccess/AlertSuccess"
import AlertInfo from "../../components/AlertInfo/AlertInfo"
import Loading from "../../components/Loading/Loading"
import {useDispatch,useSelector} from "react-redux"
import { addPayment } from "../../action/paymentAction";

export default function Pay() {

  document.title = "DUMBSOUND | PAY"

  const dispatch = useDispatch()

  const [form,setForm] = useState(null)

  const paymentState = useSelector(state=>state.addPaymentReducer)
  const {loading,error,msg} = paymentState

  const handleChange = (event) => {
    setForm(event.target.files)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    //alert("nihao")

    if(!form){
      dispatch({type: "OPEN_ALERT_ERROR"})
    }else{
      const formData = new FormData()
      //console.log(form);
      formData.set("attache", form[0], form[0].name)

      dispatch(addPayment(formData))
    }
  }

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="body-pay">
          {error ? <AlertError message={error} />: msg ? <AlertInfo message={msg} /> : <AlertSuccess message="Payment Success... Please Wait Untill Admin Approve" />}
          <h1>Premium</h1>
          <p>
            Bayar sekarang dan nikmati streaming music yang kekinian dari{" "}
            <strong>DUMB</strong><strong>SOUND</strong> <strong>DUMB</strong>
            <strong>SOUND</strong> : 0981312323
          </p>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Input Your Account Number" name="" />
              <label  htmlFor="attache" >Attache Proof of Transfer <img alt="attache-1" src={process.env.PUBLIC_URL + "/assets/images/attache-1.png"} /></label>
              <input onChange={handleChange} id="attache" type="file" name="attache" />
              <button type="submit">{loading ? <Loading /> : "Send" }</button>
          </form>
        </div>
      </div>
    </>
  );
}
