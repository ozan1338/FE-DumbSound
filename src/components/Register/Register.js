import React, {useState} from 'react'
import "./Register.css"
import AlertError from "../AlertError/AlertError"
import Loading from "../Loading/Loading"
import { useDispatch,useSelector } from "react-redux";
import { registerUser } from '../../action/userAction';

export default function Register() {
    const dispatch = useDispatch();

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [fullname,setFullName] = useState('')
    const [gender,setGender] = useState('')
    const [phone,setPhone] = useState('')
    const [address,setAddress] = useState('')

    const loginState = useSelector(state=>state.registerUserReducer)
    const {error, loading} = loginState

    //console.log(gender)

    const close = (event) => {
      if (event.target.getAttribute("class") === "modal") {
        dispatch({ type: "CLOSE_MODAL" });
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault()

      const form = {
        email,
        password,
        fullname,
        gender,
        phone,
        address,
        status: "0",
        subscribe: "False"
      }

      dispatch(registerUser(form))
    }


    return (
        <div className="modal" onClick={close}>
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {error ? <AlertError message={error} /> : null}
            <div className="form-heading">
              <h3>REGISTER</h3>
            </div>
            <input onChange={(event)=>{setEmail(event.target.value)}} name='email' type="text" placeholder="Email" required />
            <input onChange={(event)=>{setPassword(event.target.value)}} name='password' type="password" placeholder="Password" required />
            <input onChange={(event)=>{setFullName(event.target.value)}} name='fullname' type="text" placeholder="Full Name" required />
            <select onChange={(event)=>{setGender(event.target.value)}}  name='gender'>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
            </select>
            <input onChange={(event)=>{setPhone(event.target.value)}} name='phone' type="text" placeholder="Phone" required />
            <input onChange={(event)=>{setAddress(event.target.value)}} name='address' type="text" placeholder="Address" required />
            <button type="submit">{loading ? <Loading /> : "Register"}</button>
            <div className="form-link">
              <span>
                Already have an account ? <strong onClick={()=>dispatch({type: "OPEN_LOGIN"})}>Here</strong>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
}
