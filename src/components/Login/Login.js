import React, {useState} from "react";
import './Login.css'
import { useDispatch,useSelector } from "react-redux";
import { loginUser } from "../../action/userAction";
import AlertError from "../AlertError/AlertError"
import Loading from "../Loading/Loading"

export default function Login() {
    const dispatch = useDispatch()

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const close = (event) => {
      if (event.target.getAttribute("class") === "modal") {
        dispatch({ type: "CLOSE_MODAL" });
      }
    };

    const loginState = useSelector(state=>state.loginReducer)
    const {error, loading} = loginState

    const handleSubmit = (event) => {
      event.preventDefault()

      const data = {
        email,
        password
      }

      dispatch(loginUser(data))

    }


  return (
    <div className="modal" onClick={close}>
      <div className="modal-body">
        <form onSubmit={handleSubmit}>
        {error ? <AlertError message={error} /> : null}
          <div className="form-heading">
            <h3>LOGIN</h3>
          </div>
          <input onChange={(event)=>{setEmail(event.target.value)}} type="text" placeholder="Email" required />  
          <input onChange={(event)=>{setPassword(event.target.value)}} type="password" placeholder="Password" required />
          <button type="submit">{loading ? <Loading /> : "Login"}</button>
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
