"use client";
import { useState } from "react";

export function Header() {
  const [bum, setbum] = useState(true);
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          onClick={() => setbum(false)}
          style={{
            marginRight: 40,
            margin: 10,
            backgroundColor: "RGB(33,33,33)",
            border:0,
            display: bum ? "flex" : "flex" 
          }}
        >
          <svg
            width="18"
            height="13"
            viewBox="0 0 18 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 1H0V0H18V1ZM18 6H0V7H18V6ZM18 12H0V13H18V12Z"
              fill="white"
            />
          </svg>
        </button>
        <img src="youtube.png" width="90px" height="20px" />
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 10,
        }}
      >
        <input
          placeholder="Search"
          style={{
            backgroundColor: "RGB(18,18,18)",
            border: "0 solid black",
            color: "white",
            height: 40,
            width: 362,
            fontSize: 20,
          }}
        ></input>
        <button
          style={{
            color: "white",
            backgroundColor: "RGB(47,47,47)",
            height: 36,
            width: 50,
            padding: 10,
            border: "0px solid black",
            marginLeft: 2,
          }}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.87 17.17L12.28 11.58C13.35 10.35 14 8.75 14 7C14 3.13 10.87 0 7 0C3.13 0 0 3.13 0 7C0 10.87 3.13 14 7 14C8.75 14 10.35 13.35 11.58 12.29L17.17 17.88L17.87 17.17ZM7 13C3.69 13 1 10.31 1 7C1 3.69 3.69 1 7 1C10.31 1 13 3.69 13 7C13 10.31 10.31 13 7 13Z"
              fill="white"
            />
          </svg>
        </button>
        <div
          style={{
            backgroundColor: "black",
            width: 40,
            height: 40,
            margin: "3px 5.5px",
            borderRadius: "50%",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg
            width="14"
            height="18"
            viewBox="0 0 14 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 0C5.34 0 4 1.37 4 3.07V8.93C4 10.63 5.34 12 7 12C8.66 12 10 10.63 10 8.93V3.07C10 1.37 8.66 0 7 0ZM13.5 9H12.5C12.5 12.03 10.03 14.5 7 14.5C3.97 14.5 1.5 12.03 1.5 9H0.5C0.5 12.24 2.89 14.93 6 15.41V18H8V15.41C11.11 14.93 13.5 12.24 13.5 9Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div style={{ display: "flex", width: 240, height: 40, flexshrink: 0 }}>
        {pro.map((cur) => (
          <div
            style={{
              display: "flex",
              width: 24,
              height: 14,
              padding: "5px 2px",
              justifycontent: "center",
              alignitems: "center",
              margin: "10px 5px",
            }}
          >
            {cur.icon}
          </div>
        ))}
      </div>
    </div>
  );
}
const pro = [
  {
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14 13H11V16H9V13H6V11H9V8H11V11H14V13ZM17 6H3V18H17V11.61L21 13.44V8.56L17 10.39V6ZM18 5V8.83L22 7V15L18 13.17V19H2V5H18Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 0V4H16V0H12ZM15 3H13V1H15V3ZM12 6V10H16V6H12ZM15 9H13V7H15V9ZM6 0V4H10V0H6ZM9 3H7V1H9V3ZM6 6V10H10V6H6ZM9 9H7V7H9V9ZM12 12V16H16V12H12ZM15 15H13V13H15V15ZM6 12V16H10V12H6ZM9 15H7V13H9V15ZM0 0V4H4V0H0ZM3 3H1V1H3V3ZM0 6V10H4V6H0ZM3 9H1V7H3V9ZM0 12V16H4V12H0ZM3 15H1V13H3V15Z"
          fill="white"
        />
      </svg>
    ),
  },
  {
    icon: (
      <svg
        width="16"
        height="21"
        viewBox="0 0 16 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 19H10C10 20.1 9.1 21 8 21C6.9 21 6 20.1 6 19ZM16 16.35V18H0V16.35L2 14.47V9.32001C2 6.40001 3.56 4.10001 6 3.34001V2.96001C6 1.54001 7.49 0.460006 8.99 1.20001C9.64 1.52001 10 2.23001 10 2.96001V3.35001C12.44 4.10001 14 6.41001 14 9.33001V14.48L16 16.35ZM15 16.77L13 14.89V9.42001C13 6.95001 11.81 5.06001 9.87 4.32001C8.61 3.79001 7.23 3.82001 6.03 4.35001C4.15 5.11001 3 6.99001 3 9.42001V14.89L1 16.77V17H15V16.77Z"
          fill="white"
        />
      </svg>
    ),
  },
];
