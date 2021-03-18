import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'; //stylesheet

import "..//css/map.css";

function Map(props) {
  var API_KEY = KEYS.GOOGLE_API_KEY;
  var mapQuery = "UIUC"; //These props are sent from the callback functions from the sidebar to the main layout to the map
  //They can be used to indicate which crime types should be displayed

  var burglary = props.burglary;
  var idUse = props.idUse;
  var theftUnder = props.theftUnder;
  var theftOver = props.theftOver;
  var harrassment = props.harrassment;
  var propertyDamage = props.propertyDamage;
  var tresspassing = props.tresspassing;
  var sexualAssault = props.sexualAssault;
  var prostitution = props.prostitution;
  var underageLiquor = props.underageLiquor; // console.log(burglary);

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