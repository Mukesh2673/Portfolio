"use client";
import React from "react";
// import "./particle-background.css";

const BackgroundParticles = ({ count =10 }) => {
    const circles = Array.from({ length: count });

  return (
    <div className="particles-container">
    {circles.map((_, i) => {
      const left = Math.random() * 100;
      const size = Math.random() * 20 + 5; // particle size 5px to 25px
      const delay = Math.random() * 30;
      const duration = 20 + Math.random() * 20; // 20s to 40s animation duration

      return (
        <div
          className="circle-container"
          key={i}
          style={{
            left: `${left}%`,
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        >
          <div
            className="circle"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        </div>
      );
    })}
  </div>
  );
};

export default BackgroundParticles;
