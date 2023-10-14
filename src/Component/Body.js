"use client";

import { HomeIcon } from "@/assets/icons/home-icon";
import { ExploreIcon } from "@/assets/icons/explore-icon";
import { LibraryIcon } from "@/assets/icons/library-icon";
import { HistoryIcon } from "@/assets/icons/history-icon";
import { YourIcon } from "@/assets/icons/your-icon";
import { WatchIcon } from "@/assets/icons/watch-icon";
import { LikedIcon } from "@/assets/icons/liked-icon";
import { ShowIcon } from "@/assets/icons/show-icon";
import { You } from "@/assets/icons/you";
import { Gaming } from "@/assets/icons/Gaming";
import { Live } from "@/assets/icons/live";
import { Videos } from "./Videos";
// import { useEffect, useState } from "react";
import "./style.css";
import { useRouter } from "next/navigation";

export function Body() {
  const router = useRouter();

  return (
    <div style={{ display: "flex" }}>
      <div style={{ borderBottom: "2px solid RGB(48,48,48)", width: "220px" }}>
        <button
          type="button"
          onClick={() => router.push("/about")}
          style={{
            color: "RGB(245,245,245)",
            margin: 10,
            marginLeft: 30,
            backgroundColor: "rgb(33,33,33)",
            fontSize: "20px",
            border: "0px",
          }}
        >
          About me
        </button>
        <div
          style={{
            margin: 30,
            borderWidth: 5,
            borderBottomColor: "white",
            borderBottom: "2px solid RGB(48,48,48)",
          }}
        >
          {Icon.map((cur) => (
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: 8 }}>{cur.icon}</div>
              <div style={{ color: "RGB(245,245,245)", margin: 10 }}>
                {cur.text}
              </div>
            </div>
          ))}
        </div>

        <div style={{ margin: 30, borderBottom: "2px solid RGB(48,48,48)" }}>
          {" "}
          {sideItems.map((cur) => (
            <div style={{ display: "flex" }}>
              <div style={{ marginTop: 10 }}>{cur.icon}</div>
              <div style={{ color: "RGB(245,245,245)", margin: 10 }}>
                {cur.text}
              </div>{" "}
            </div>
          ))}
        </div>
        <div style={{ borderBottom: "2px solid RGB(48,48,48)" }}>
          <h3 style={{ color: "RGB(170,170,170)", margin: 15 }}>
            Subscriptions
          </h3>
          <div
            style={{ margin: 30, borderWidth: 5, borderBottomColor: "white" }}
          >
            {Name.map((nam) => (
              <div style={{ color: "RGB(245,245,245)", margin: 10 }}>{nam}</div>
            ))}
          </div>
        </div>
        <div style={{ borderBottom: "2px solid RGB(48,48,48)" }}>
          <h3 style={{ color: "RGB(170,170,170)", margin: 15 }}>
            More From Youtube
          </h3>
          <div
            style={{ margin: 30, borderWidth: 5, borderBottomColor: "white" }}
          >
            {More.map((nam) => (
              <div style={{ display: "flex" }}>
                <div style={{ marginTop: 10 }}>{nam.icon}</div>
                <div style={{ color: "RGB(245,245,245)", margin: 10 }}>
                  {nam.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          borderBottom: "2px solid RGB(48,48,48)",
          borderTop: "2px solid RGB(48,48,48)",
          overflowX: "scroll",
        }}
      >
        <div
          style={{
            margin: 30,
            padding: "12px 24px",
            display: "flex",
            borderWidth: 3,
            borderColor: "white",
            gap: "12px",
            width: "1500px",
            overflowX: "scroll",
          }}
        >
          <button style={styles.categoryButton}>All</button>
          <div>
            {new Array(21).fill(10).map(() => (
              <button style={styles.categoryButton}>Item</button>
            ))}
          </div>
        </div>
        <Videos />
      </div>
    </div>
  );
}
const sideItems = [
  {
    icon: <LibraryIcon />,
    text: "Library",
  },
  {
    icon: <HistoryIcon />,
    text: "Histoy",
  },
  {
    icon: <YourIcon />,
    text: "Your Videos",
  },
  {
    icon: <WatchIcon />,
    text: "Watch later",
  },
  {
    icon: <LikedIcon />,
    text: "Liked Video",
  },
  {
    icon: <ShowIcon />,
    text: "Show Video",
  },
];
const Name = [
  "James Gouse",
  "Alan Cooper",
  "Marcus Levin",
  "Alexis Sears",
  "Jesica Lambert",
  "Anna White",
  "Skylar Dias",
  "Show 13 more",
];
const More = [
  {
    icon: <You />,
    text: "Youtube Premuim",
  },
  {
    icon: <Gaming />,
    text: "Gaming",
  },
  {
    icon: <Live />,
    text: "Live",
  },
];
const Icon = [
  {
    icon: <HomeIcon />,
    text: "Home",
  },
  {
    icon: <ExploreIcon />,
    text: "Explore",
  },
  {
    icon: <HomeIcon />,
    text: "Subscription",
  },
];
const styles = {
  categoryButton: {
    border: 0,
    color: "white",
    backgroundColor: "RGB(48,48,48)",
    borderRadius: 32,
    padding: "8px 12px",
    border: "0.3px solid #AAA",
    background: "#303030",
  },
};
