import React, { useState,useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landingpage.css";
import { useSelector, useDispatch } from "react-redux";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { getAllMusic } from "../../action/musicAction";
import Loading from "../../components/Loading/Loading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from "jwt-decode";
import { getNotif, updateNotif } from "../../action/userAction";

export default function LandingPage() {
  document.title = "DUMBSOUND | HOME"

  const openState = useSelector((state) => state.modalReducer);
  const { openLogin, openRegister } = openState;

  const dispatch = useDispatch()

  const [showMusic, setShowMusic] = useState([]);

  const musicState = useSelector((state)=>state.getAllMusicReducer)
  const {musics,loading} = musicState

  const audio = musics?.map(item => {
    return ({
      cover: item.thumbnail,
      musicSrc: item.attache,
      name: item.title,
      singer: item.artist?.name
    }
    )})

  const loginState = useSelector(state=>state.loginReducer)
  const {login, payment} = loginState

  //console.log(payment)

  const notifState = useSelector(state=>state.getNotifReducer)
  const {statusNotif,msg} = notifState

  //console.log(statusNotif);

  let decodedToken = 0;

  if (login) {
    const token = JSON.parse(localStorage.getItem("currentUser"));
    if (token) {
      decodedToken = jwt_decode(token);
      //console.log(decodedToken);
    }
  }

  //const toastId = React.useRef(null);
  const customId = "custom-id-yes";

  const notifyToPay = () => {
    toast.info("Please Pay First",{
      position: "bottom-right",
      autoClose: "1000",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
    })
  }
  
  const notify = (message) => {
      if(message.match("Approve")){
        toast.success(message,{
          position: "bottom-right",
          autoClose: "1000",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          toastId: customId,
          onClose: ()=>{dispatch(updateNotif(decodedToken.id,"false",""))},
          onClick: ()=>{dispatch(updateNotif(decodedToken.id,"false",""))},
          
        })
      }else{
        toast.error(message,{
          position: "bottom-right",
          autoClose: "1000",
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          toastId: customId,
          onClose: ()=>{dispatch(updateNotif(decodedToken.id,"false",""))},
          onClick: ()=>{dispatch(updateNotif(decodedToken.id,"false",""))},
        })
      }
  }


  useEffect(()=>{
    dispatch(getAllMusic())
    if(login){
      dispatch(getNotif(decodedToken.id))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div
        className="header"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/images/Background-image-1.png"
          })`,
        }}
      >
        <Navbar />
        {openLogin ? <Login /> : null}
        {openRegister ? <Register /> : null}
        {statusNotif === "true" ? notify(msg) : null}
        <div className="text-header">
          <h1>Connect on DumbSound</h1>
          <p>
            Discovery, Stream, and share a constantly expanding mix of music
            from emerging and major artists around the world
          </p>
        </div>
      </div>
      <div className="body">
        <h1>Dengarkan Dan Rasakan</h1>
        <div className="row">
          {loading ? <Loading /> : musics.map((item, index) => {
            return (
              <div
                onClick={() => {
                  login ? payment ? payment.status === "Approve" ? setShowMusic(index) : notifyToPay() : notifyToPay() : dispatch({type: "OPEN_LOGIN"});
                }}
                key={index}
                className="column-6"
              >
                <img alt="thumbnail-1" src={item.thumbnail} />
                <div className="detail">
                  <div className="detail-name">
                    <h3>{item.title}</h3>
                    <p>{item.artist?.name}</p>
                  </div>
                  <div className="detail-year">
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {showMusic.length !== 0 ? (
          <ReactJkMusicPlayer
            audioLists={audio}
            toggleMode={false}
            mode="full"
            showReload={false}
            showThemeSwitch={false}
            showDownload={false}
            playIndex={showMusic}
          />
        ) : null}
        <ToastContainer onClick={()=>updateNotif(decodedToken.id,"false","")} />
      </div>
    </>
  );
}
