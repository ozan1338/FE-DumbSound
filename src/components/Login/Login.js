import React from "react";
import './Login.css'
import { useDispatch } from "react-redux";

export default function Login() {
    const dispatch = useDispatch()


    const close = (event) => {
      if (event.target.getAttribute("class") === "modal") {
        dispatch({ type: "CLOSE_MODAL" });
      }
    };
  return (
    <div className="modal" onClick={close}>
      <div className="modal-body">
        <form>
          <div className="form-heading">
            <h3>LOGIN</h3>
          </div>
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <div className="form-link">
            <span>
              Dont have an account ? <strong onClick={()=>dispatch({type: "OPEN_REGISTER"})}>Here</strong>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}
