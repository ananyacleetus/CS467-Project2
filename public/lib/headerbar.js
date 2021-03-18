import React from "react"; //stylesheet

import "..//css/headerbar.css";

function HeaderBar() {
  return /*#__PURE__*/React.createElement("div", {
    className: "headerbox"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "UIUC Crime Map"));
}

export default HeaderBar;