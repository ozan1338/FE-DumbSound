import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useDispatch,useSelector } from "react-redux";
import { logoutUser } from "../../action/userAction";

export default function Navbar() {
  
  const loginState = useSelector((state) => state.loginReducer);
  const { login } = loginState;
  

  const status = JSON.parse(localStorage.getItem("status"))


  const [menuToggle, setMenuToggle] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className="navbar">
      <div className="navbar-brand">
        <Link to="/">
          <img
            alt="icon"
            src={process.env.PUBLIC_URL + "/assets/images/Group.svg"}
          />
          <div className="text-brand">
            <h1 className="first-text">DUMB</h1>
            <h1 className="second-text">SOUND</h1>
          </div>
        </Link>
      </div>
      <div className="navbar-btn">
        {login ? (
          <div className="navbar-img">
            <div className="profile">
              <img
                onClick={() => {
                  menuToggle ? setMenuToggle(false) : setMenuToggle(true);
                }}
                src={process.env.PUBLIC_URL + "/assets/images/image-6.png"}
                alt="profile"
              />
            </div>

            {menuToggle ? (
                <div className="menu">
                <ul>
                {status ? (
                    <>
                    <li>
                    <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/vinyl-1.png"
                      }
                    />
                    <Link to="/add-music">
                      Add Music
                    </Link>
                  </li>
                    <li>
                    <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/image-2.png"
                      }
                    />
                    <Link to="/add-artist">
                      Add Artis
                    </Link>
                  </li>
                    </>
                ) : <li>
                    <img
                      alt="icon"
                      src={
                        process.env.PUBLIC_URL + "/assets/images/bill-1.svg"
                      }
                    />
                    <Link to="/pay">
                      Pay
                    </Link>
                  </li>
                }
                  
                  <li>
                    <img
                      alt="icon"
                      src={process.env.PUBLIC_URL + "/assets/images/logout-1.svg"}
                    />
                    <p onClick={()=>{dispatch(logoutUser())}}
                    >
                      Logout
                    </p>
                  </li>
                </ul>
                </div>
            ) : null}
          </div>
        ) : (
          <div>
            <button
              onClick={() => dispatch({ type: "OPEN_LOGIN" })}
              className="btn-login"
            >
              Login
            </button>
            <button
              onClick={() => dispatch({ type: "OPEN_REGISTER" })}
              className="btn-register"
            >
              Register
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
