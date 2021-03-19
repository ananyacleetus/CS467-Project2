import * as d3 from "d3";
import { utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'; //stylesheet

import "..//css/map.css";
var API_KEY = KEYS.GOOGLE_API_KEY;
var map;

function MapContainer(props) {
  var mapQuery = "UIUC";
  var UIUCLat = 40.1019523;
  var UIUCLong = -88.2271615;
  var pointData = [{
    lat: 45,
    long: -89
  }, {
    lat: 39,
    long: -85
  }]; //These props are sent from the callback functions from the sidebar to the main layout to the map
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
  var underageLiquor = props.underageLiquor;
  var circleRadius = 10;
  var zoomSize = 16;
  var padding = 10; // console.log(burglary);
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

  function initMap() {
    map = new google.maps.Map(d3.select("#map").node(), {
      zoom: zoomSize,
      center: new google.maps.LatLng(UIUCLat, UIUCLong),
      mapTypeId: google.maps.MapTypeId.TERRAIN
    });
  }

  ; //
  // var overlayView = new google.maps.OverlayView({
  //                 setMap : map
  //             });

  var overlayView = new google.maps.OverlayView({
    setMap: map
  });

  overlayView.onAdd = function () {
    var layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "crimeSpots");

    overlayView.draw = function () {
      var projection = this.getProjection();
      var marker = layer.selectAll("svg").data(pointData).each(transform).enter().append("svg").each(transform).attr("class", "marker");
      marker.append("circle").attr("r", circleRadius).attr("cx", padding).attr("cy", padding).attr("stroke", "#1EA1F2").attr("fill", "#1EA1F2");

      function transform(d) {
        d = new google.maps.LatLng(d.lat, d.long); // d = new google.maps.LatLng(40.0, -88.0);

        d = projection.fromLatLngToDivPixel(d);
        return d3.select(this).style("left", d.x - padding + "px").style("top", d.y - padding + "px");
      }
    };
  }; // <Map google={props.google} zoom={16} id="map"
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


  overlayView.setMap(map); // <OverlayView
  //  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
  // </OverlayView>
  // useEffect(() => {
  //   initMap();
  // });

  useEffect(() => {
    initMap();
  }, [props]);
  return /*#__PURE__*/React.createElement("div", {
    id: "fullChart"
  }, /*#__PURE__*/React.createElement("div", {
    id: "map"
  }));
}

export default GoogleApiWrapper({
  apiKey: API_KEY
})(MapContainer);