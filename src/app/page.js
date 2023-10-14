'use client'
import { Header } from "../Component/Header";
import { Body } from "../Component/Body";
import { useState } from "react";

export default function Home() {
  const [bum, setbum] = useState(true);
  return (
    <div
      style={{
        backgroundColor: "RGB(33,33,33)",
      }}
    >
      <Header setbum/>
      <Body bum/>
      <footer></footer>
    </div>
  );
}
