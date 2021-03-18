import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
// import fs from "fs";

//stylesheet
import "..//css/map.css";

function Map(props) {

    return (

        <div id="fullChart">

            <svg id="chart_svg" width="1000" height="700"></svg>

        </div>

    );

}


export default Map;
