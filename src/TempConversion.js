import React from "react";

export default function TempConversion(props) {
  return (
    <span>
      <span className="temp-result">{props.celsius}</span>

      <span className="units">C</span>
    </span>
  );
}
