import React from 'react'
import "./Register.css"

import { useDispatch } from "react-redux";

export default function Register() {
    const dispatch = useDispatch();

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
              <h3>REGISTER</h3>
            </div>
            <input type="text" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="text" placeholder="Full Name" required />
            <select  name='gender'>
                <option value="Male">Male</option>
                <option value="Femal">Female</option>
            </select>
            <input type="text" placeholder="Phone" required />
            <input type="text" placeholder="Address" required />
            <button type="submit">Login</button>
            <div className="form-link">
              <span>
                Dont have an account ? <strong onClick={()=>dispatch({type: "OPEN_LOGIN"})}>Here</strong>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
}
