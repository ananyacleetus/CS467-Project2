import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//stylesheet
import "..//css/map.css";

const API_KEY = KEYS.GOOGLE_API_KEY;

function MapContainer(props) {

  const mapQuery = "UIUC";
  const UIUCLat = 40.1019523;
  const UIUCLong = -88.2271615;
  // const UIUCcenterPoint = new props.google.maps.LatLng(UIUCLat, UIUCLong);


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


const mapStyle={ position: "relative", width: "1200px", height: "1000px", margin: "-3.5% 3.5%", display: "block" };

    return (

    <div id="fullChart">
        <Map google={props.google} zoom={14} id="map" initialCenter={
          {
            lat: UIUCLat,
            lng: UIUCLong
          }
        } style={mapStyle}>
       <Marker
               name={'Current location'} />

     </Map>
   </div>

    );

}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)
