import React from "react";

import Loader from "../Loaders/Waterfall.jsx";
import "./loading.styles.css";
export default function Loading() {
  return (
    <div className="content-loading min-height flex active__purple">
      <Loader />
    </div>
  );
}
