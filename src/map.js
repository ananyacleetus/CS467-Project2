import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'

//stylesheet
import "..//css/map.css";

function Map(props) {

  const API_KEY = KEYS.GOOGLE_API_KEY;
  const mapQuery = "UIUC";

    return (

        <div id="fullChart">

          <p>Testing Callback:</p>

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
