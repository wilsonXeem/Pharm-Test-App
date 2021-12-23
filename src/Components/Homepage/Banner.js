import React from "react";

export default function Banner({children}) {
  return (
    <>
      <div className="banner">
        <h1>WELCOME TO PHARM TEST</h1>
        <p style={{ fontSize: "large" }}>
          Take a test to assess how well you understood
        </p>
        {children}
      </div>
    </>
  );
}
