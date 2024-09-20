import React from "react";

const Error = () => {
  return (
    <div
      className="screenContainer"
      style={{
        height: "100vh",
        justifyContent: "center",
        fontSize: 100,
        color: "white",
        textAlign: "center",
      }}
    >
      404
      <br /> ERROR
      <a
        href="/"
        style={{
          color: "rgb(171, 25, 255)",

          fontSize: 30,
        }}
      >
        Go Home
      </a>
    </div>
  );
};

export default Error;
