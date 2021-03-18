import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'

//stylesheet
import "..//css/map.css";

function Map(props) {

  const API_KEY = KEYS.GOOGLE_API_KEY;
  const mapQuery = "UIUC";


  //These props are sent from the callback functions from the sidebar to the main layout to the map
  //They can be used to indicate which crime types should be displayed
  const burglary = props.burglary;
  const idUse = props.idUse;
  const theftUnder = props.theftUnder;
  const theftOver = props.theftOver;
  const harrassment = props.harrassment;
  const propertyDamage = props.propertyDamage;
  const tresspassing = props.tresspassing;
  const sexualAssault = props.sexualAssault;
  const prostitution = props.prostitution;
  const underageLiquor = props.underageLiquor;

  // console.log(burglary);


    return (

        <div id="fullChart">
        <iframe
        id="map"
        loading="lazy"
        allowFullScreen
        src={"https://www.google.com/maps/embed/v1/place?key=" + API_KEY + "&q=" + mapQuery}>
        </iframe>
        </div>

    );

}


export default Map;
