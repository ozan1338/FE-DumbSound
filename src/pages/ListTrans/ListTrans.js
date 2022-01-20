import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ListTrans.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {useDispatch,useSelector} from "react-redux"
import { getAllPayment,updatePaymentStatus } from "../../action/paymentAction";

export default function ListTrans() {
  const dispatch = useDispatch()

  const paymentState = useSelector(state=>state.getAllPaymentReducer)
  const {payments} = paymentState

  const [menuToggle, setMenuToggle] = useState(false);

  useEffect(()=>{
    dispatch(getAllPayment())
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className="container">
        <Navbar />
        <div className="list-trans-body">
          <div className="list-trans-body-header">
            <h1>Incoming Transaction</h1>
          </div>
          <div className="Table-container">
            <table className="Table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>User</th>
                  <th>Bukti Transfer</th>
                  <th>Remaining Active</th>
                  <th>Status User</th>
                  <th>Status Payment</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {payments?.map((item,index) => {
                  return (
                    <tr key={index}>
                      <td>{index+1}</td>
                      <td>{item.user.fullname}</td>
                      <td>{}</td>
                      <td>26/Hari</td>
                      <td
                        className={
                          item.user.subscribe === "True"
                            ? "text-green"
                            : "text-red"
                        }
                      >
                        {item.user.subscribe === "True" ? "Active" : "Non Active"}
                      </td>
                      <td
                        className={
                          item.status === "Approve"
                            ? "text-green"
                            : item.status === "pending"
                            ? "text-yellow"
                            : "text-red"
                        }
                      >
                        {item.status}
                      </td>
                      <td
                        onClick={() =>
                          menuToggle
                            ? setMenuToggle(false)
                            : setMenuToggle(item.id)
                        }
                      >
                        <ArrowDropDownIcon fontSize="large" color="primary" />
                      {menuToggle === item.id ? (
                          <div className="menu-trans-list">
                            <ul>
                                <li className="text-green" onClick={()=>{dispatch(updatePaymentStatus(menuToggle,"Approve"))}}>
                                    Approve
                                </li>
                                <li className="text-red" onClick={()=>{dispatch(updatePaymentStatus(menuToggle,"cancel"))}}>
                                    Cancel
                                </li>
                            </ul>
                          </div>
                      ):null
                      }
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
