import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./ListTrans.css";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function ListTrans() {
  const [menuToggle, setMenuToggle] = useState(false);

  const data = [
    {
      id: 1,
      user: "Ozan",
      BuktiTransfer: "bca.jpg",
      remainigActive: 26,
      StatusUser: "Active",
      StatusPayment: "Approve",
    },
    {
      id: 2,
      user: "Ozan",
      BuktiTransfer: "bca.jpg",
      remainigActive: 26,
      StatusUser: "Non Active",
      StatusPayment: "Cancel",
    },
    {
      id: 3,
      user: "Ozan",
      BuktiTransfer: "bca.jpg",
      remainigActive: 26,
      StatusUser: "Active",
      StatusPayment: "Pending",
    },
    {
      id: 4,
      user: "Ozan",
      BuktiTransfer: "bca.jpg",
      remainigActive: 26,
      StatusUser: "Active",
      StatusPayment: "Approve",
    },
  ];

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
                {data.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.user}</td>
                      <td>{item.BuktiTransfer}</td>
                      <td>{item.remainigActive}/Hari</td>
                      <td
                        className={
                          item.StatusUser === "Active"
                            ? "text-green"
                            : "text-red"
                        }
                      >
                        {item.StatusUser}
                      </td>
                      <td
                        className={
                          item.StatusPayment === "Active"
                            ? "text-green"
                            : item.StatusPayment === "Pending"
                            ? "text-yellow"
                            : "text-red"
                        }
                      >
                        {item.StatusPayment}
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
                                <li className="text-green">
                                    Approve
                                </li>
                                <li className="text-red">
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
