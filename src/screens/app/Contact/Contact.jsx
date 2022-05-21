import React from "react";

import "./contact.styles.css";
export default function Contact(props) {
  const { showColor, onChangeColor } = props;
  return (
    <>
      <main className={`main__contact ${onChangeColor()}`}></main>
    </>
  );
}
