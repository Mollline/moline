"use client";

import { useState, useEffect } from "react";
import { FetchData } from "./airtable/airtable";
import ReactPlayer from "react-player";
import './style.css'


export function Videos() {
  const [res, setRes] = useState([]);
  useEffect(() => {
    FetchData(setRes);
  }, []);
  // console.log(res);

  return (
    <div
      style={{
        backgroundColor: "black",
        width: "1900px",
        position: "absolute",
        overflowY:'scroll'
      }}
    >
      {" "}
      <div
        style={{
          margin: "20px 30px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {res.map((el, i) => (
          <Card el={el} />
        ))}
      </div>
    </div>
  );
}

const Card = ({ el }) => {
  const [show, setshow] = useState(true);
  return (
    <div style={{ margin: "30px 10px", position: "relative", width: 280 }}>
      <div style={{ border: "1px black solid" }}>
        <button
          onClick={() => setshow(false)}
          style={{
            width: 300,
            height: 200,
            border: 0,
            borderColor:'black',
            display: show ? "flex" : "none",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              display: show ? "flex" : "none",
              backgroundColor:'while'
            }}
            src={el.fields.video}
          />
        </button>
        <div style={{ display: show ? "none" : "flex" }} className="modal">
          <div>
          <ReactPlayer
            width={1200}
            height={700}
            position={"fixed"}
            display={'flex'}
            justifyContent={'center'}
            alignItem={'center'}
            url={el.fields.link}
          />
          </div>
          <button
            style={{
              color: "white",
              backgroundColor: "black",
              display: show ? "none" : "flex",
              height: 5,
              width: 5,
              border: 0,
              marginTop:-800,
              fontSize:40
            }}
            onClick={() => setshow(true)}
          >
            x
          </button>
        </div>
      </div>
      <div style={{ display: "flex", margin: 20 }}>
        <div>
          <img
            style={{
              borderRadius: 20,
              margin: 10,
              height: 35,
              width: 35,
            }}
            src={el.fields.Profile}
          />
        </div>
        <div>
          <div
            style={{
              color: "white",
              fontSize: "18px",
              marginBottom: "10px",
            }}
          >
            {el.fields.text}
          </div>
          <div style={{ color: "RGB(133,133,133)" }}>{el.fields.Name}</div>
          <div style={{ color: "RGB(133,133,133)" }}>
            {el.fields.Like} Views {el.fields.Time}
          </div>
        </div>
      </div>
    </div>
  );
};
const styles = {
  modal: {
    background: "rgba(0,0, 0, 0.5)",
    backgroundcolor: "gray",
    display: "flex",
    width: "100vw",
    height: "100vh",
  },
};
