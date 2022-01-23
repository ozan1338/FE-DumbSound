import React, { useState,useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landingpage.css";
import { useSelector, useDispatch } from "react-redux";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";
import { getAllMusic } from "../../action/musicAction";
import Loading from "../../components/Loading/Loading"

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
  const {login} = loginState

  useEffect(()=>{
    dispatch(getAllMusic())
    
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
                  login ? setShowMusic(index) : dispatch({type: "OPEN_LOGIN"});
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
      </div>
    </>
  );
}
