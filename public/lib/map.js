import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'; //stylesheet

import "..//css/map.css";
var API_KEY = KEYS.GOOGLE_API_KEY;

function MapContainer(props) {
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

  var mapStyle = {
    position: "relative",
    width: "1200px",
    height: "1000px",
    margin: "-2% 3.5%",
    display: "block"
  };
  return /*#__PURE__*/React.createElement("div", {
    id: "fullChart"
  }, /*#__PURE__*/React.createElement(Map, {
    google: props.google,
    zoom: 14,
    id: "map",
    style: mapStyle
  }, /*#__PURE__*/React.createElement(Marker, {
    name: 'Current location'
  }), /*#__PURE__*/React.createElement(InfoWindow, null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "TEST")))));
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);