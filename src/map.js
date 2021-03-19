import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

//stylesheet
import "..//css/map.css";

const API_KEY = KEYS.GOOGLE_API_KEY;
var map;
var overlayView;

function MapContainer(props) {

  const mapQuery = "UIUC";
  const UIUCLat = 40.1019523;
  const UIUCLong = -88.2271615;

  const pointData = [{lat: 40.10935, long: -88.2310087}, {lat: 40.1125993, long: -88.2272643}, {lat: 40.1090874, long: -88.2313091}];

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

  var circleRadius = 10;
  var zoomSize = 15;
  var padding = 10;

  // console.log(burglary);

  // <Marker
  //   name={'Current location'} />


  // const mapStyle={ position: "relative", width: "1200px", height: "1000px", margin: "-3.5% 3.5%", display: "block"};

  // var map = new google.maps.Map(d3.select("#map").node(), {
  //   zoom: 16,
  //   center: new google.maps.LatLng(UIUCLat, UIUCLong),
  //   mapTypeId: google.maps.MapTypeId.TERRAIN,
  //   style: mapStyle
  // });

  // map = d3.select("#map").node;
  // var map = d3.select("#map");


  window.addEventListener("load", initMap);


  function initMap() {

    map = new google.maps.Map(d3.select("#map").node(), {
      zoom: zoomSize,
      center: new google.maps.LatLng(UIUCLat, UIUCLong),
      mapTypeId: google.maps.MapTypeId.TERRAIN,
    });




  //
  // var overlayView = new google.maps.OverlayView({
  //                 setMap : map
  //             });


  overlayView = new google.maps.OverlayView({
    setMap: map
  });


  overlayView.onAdd = function () {

    console.log("onAdd");

    var layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "crimeSpots");

    overlayView.draw = function () {
      var projection = this.getProjection();

      var marker = layer.selectAll("svg")
      .data(pointData)
      .each(transform)
      .enter()
      .append("svg")
      .each(transform)
      .attr("class", "marker");


      marker.append("circle")
      .attr("r", circleRadius)
      .attr("cx", padding)
      .attr("cy", padding)
      .attr("stroke", "#1EA1F2")
      .attr("fill", "#1EA1F2");


      // var marker = layer.selectAll(".marker")
      // .data(pointData)
      // .each(transform)
      // .enter()
      // .append("circle")
      // .each(transform)
      // .attr("class", "marker")
      // .attr("r", circleRadius)
      // .attr("cx", padding)
      // .attr("cy", padding)
      // .attr("stroke", "#1EA1F2")
      // .attr("fill", "#1EA1F2");



      function transform(d) {
        d = new google.maps.LatLng(d.lat, d.long);
        // d = new google.maps.LatLng(40.0, -88.0);
        d = projection.fromLatLngToDivPixel(d);
        return d3.select(this)
        .style("left", (d.x - padding) + "px")
        .style("top", (d.y - padding) + "px");
      }
    };


  };

  overlayView.setMap(map);

    };

  // overlayView.onRemove = function () {
  //   d3.select(this.getPanes().overlayLayer).remove(".crimeSpots");
  // };

  // <Map google={props.google} zoom={16} id="map"
  //   initialCenter={
  //     {
  //       lat: UIUCLat,
  //       lng: UIUCLong
  //     }
  //   }
  //   style={mapStyle}>
  //   {
  //
  // }
  // </Map>

  // map = google.maps.getMap();

  // map = document.getElementById("#map");
  // <OverlayView
  //  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
  // </OverlayView>



  // useEffect(() => {
  //   initMap();
  // });


  useEffect(() => {
    initMap();
}, [props]);

  return (

    <div id="fullChart">
      <div id="map"></div>

    </div>

  );

}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer)
