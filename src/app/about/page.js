"use client";
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();

  return (
    <div style={{ backgroundColor: "black", width: "100vw", height: "100vh" }}>
      <button
        type="button"
        onClick={() => router.push("/")}
        style={{
          color: "RGB(245,245,245)",
          margin: 10,
          marginLeft: 30,
          backgroundColor: "black",
          fontSize: "20px",
          border: "0px",
        }}
      >
        Back
      </button>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1 style={{ color: "white" }}>About me</h1>
          <div>
            {" "}
            <img style={{ borderRadius: "50%", width: 300 }} src="pro.jpeg" />
          </div>
          <p style={{ color: "white", width: 700, padding: 50 }}>
            So, how bad do you want to SUCCEED? Do you want it as bad as you
            want to breathe? Leave all your stuffs behind- Partying, fooling
            around, that basketball game on TV and whatever excuses you had
            which stopped you from performing. Focus and work on your habits
            because that’s how you will succeed. And for help, stretch out to a
            YouTube channel. Yes, you have heard it right. YouTube isn’t just
            for funny videos, silly prank invasions or drooling over
            Kardashian’s butt. They may relax you for while but they do no good.
            So, stop lurking and use YouTube for your own good. Get a daily dose
            of videos from these channels which I have penned down, practice the
            idea and you will see the change in yourself.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: 300,
            }}
          >
            <div style={{ color: "white" }}>2.7B Views 2011-11-2</div>
            <div style={{ color: "white" }}>Like-12M</div>
          </div>
        </div>
      </div>
    </div>
  );
}
