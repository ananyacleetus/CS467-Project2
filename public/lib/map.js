import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'; //stylesheet

import "..//css/map.css";

function Map(props) {
  var API_KEY = KEYS.GOOGLE_API_KEY;
  var mapQuery = "UIUC";
  return /*#__PURE__*/React.createElement("div", {
    id: "fullChart"
  }, /*#__PURE__*/React.createElement("iframe", {
    id: "map",
    loading: "lazy",
    allowFullScreen: true,
    src: "https://www.google.com/maps/embed/v1/place?key=" + API_KEY + "&q=" + mapQuery
  }));
}

export default Map;