import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Landingpage.css";
import { useSelector } from "react-redux";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import ReactJkMusicPlayer from "react-jinke-music-player";
import "react-jinke-music-player/assets/index.css";

export default function LandingPage() {
  const openState = useSelector((state) => state.modalReducer);
  const { openLogin, openRegister } = openState;

  const [showMusic, setShowMusic] = useState(false);

  const data = [
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
    {
      img: process.env.PUBLIC_URL + "/assets/images/Rectangle-4.png",
      nama: "Circles",
      artis: "Post Malone",
      year: "2019",
    },
  ];

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
          {data.map((item, index) => {
            return (
              <div
                onClick={() => {
                  setShowMusic(true);
                }}
                key={index}
                className="column-6"
              >
                <img alt="thumbnail-1" src={item.img} />
                <div className="detail">
                  <div className="detail-name">
                    <h3>{item.nama}</h3>
                    <p>{item.artis}</p>
                  </div>
                  <div className="detail-year">
                    <p>{item.year}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {showMusic ? (
          <ReactJkMusicPlayer
            toggleMode={false}
            mode="full"
            showReload={false}
            showThemeSwitch={false}
            showDownload={false}
            audioLists={false}
          />
        ) : null}
      </div>
    </>
  );
}
