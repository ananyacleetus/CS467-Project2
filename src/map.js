import * as d3 from "d3";
import { text, utcParse } from "d3";
import React, { useState, useEffect } from "react";
import * as KEYS from '/dist/config.js'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



//stylesheet
import "..//css/map.css";
import { teal } from "@material-ui/core/colors";



const API_KEY = KEYS.GOOGLE_API_KEY;
var map;
var overlayView;

function MapContainer(props) {

  // TODO:
  // - Investigate Google Maps event listeners for mouseover/mouseout events and how to get data from them for the tooltip (regular tooltip won't work with gmaps)
  //      - Example of Google Maps event listener: https://jsfiddle.net/svigna/VzYF6/
  // - Import police crime data and create a hardcoded array of each possible location's coordinates (we can then filter the data to show all crime at that location displayed at that coordinate)
  // - Fix projection (scaling from coordinates to pixels) so the points occur closer to the right spots on the map (can be done after police data is imported)
  // - Scale circle radius to change based on summed number of crimes of the same type in one location
  // - Scale circle radius depending on Zoom value?
  // - Set up date filter to filter data upon submit being clicked

  const mapQuery = "UIUC";
  const UIUCLat = 40.1019523;
  const UIUCLong = -88.2271615;

  const colorData = [
    {crimeType: "burglary", outlineColor: "#FF4747", fillColor: "#FFADAD"},
    {crimeType: "idUse", outlineColor: "#FFA93F", fillColor: "#FFD6A5"},
    {crimeType: "theftUnder", outlineColor: "#FFE24E", fillColor: "#FFEE99"},
    {crimeType: "theftOver", outlineColor: "#6FFF52", fillColor: "#CAFFBF"},
    {crimeType: "harrassment", outlineColor: "#37EEFF", fillColor: "#9BF6FF"},
    {crimeType: "propertyDamage", outlineColor: "#3B86FF", fillColor: "#A0C4FF"},
    {crimeType: "tresspassing", outlineColor: "#664AFF", fillColor: "#BDB2FF"},
    {crimeType: "sexualAssault", outlineColor: "#B352FF", fillColor: "#DEBCFF"},
    {crimeType: "prostitution", outlineColor: "#FF5AFF", fillColor: "#FFC6FF"},
    {crimeType: "underageLiquor", outlineColor: "#B1B1A8", fillColor: "#DDDDD1"},
  ];


  const fillColors = [
    "#FFADAD",
    "#FFD6A5",
    "#FFEE99",
    "#CAFFBF",
    "#9BF6FF",
    "#A0C4FF",
    "#BDB2FF",
    "#DEBCFF",
    "#FFC6FF",
    "#DDDDD1",
  ];

  const outlineColors = [
    "#FF4747",
    "#FFA93F",
    "#FFE24E",
    "#6FFF52",
    "#37EEFF",
    "#3B86FF",
    "#664AFF",
    "#B352FF",
    "#FF5AFF",
    "#B1B1A8",
  ];

  const crimeTypes = [
    "burglary",
    "idUse",
    "theftUnder",
    "theftOver",
    "harrassment",
    "propertyDamage",
    "tresspassing",
    "sexualAssault",
    "prostitution",
    "underageLiquor"
  ];


  const fakeData = [
    {lat: 40.10935, long: -88.2310087, crime: "harrassment"},
    {lat: 40.1125993, long: -88.2272643, crime: "prostitution"},
    {lat: 40.109223, long: -88.229840, crime: "prostitution"},
    {lat: 40.118330, long: -88.227558, crime: "sexualAssault"},
    {lat: 40.114890, long: -88.225889, crime: "underageLiquor"},
    {lat: 40.098889, long: -88.2208739, crime: "idUse"},
    {lat: 40.100002, long: -88.219933, crime: "underageLiquor"},
    {lat: 40.110298, long: -88.232009, crime: "tresspassing"},
    {lat: 40.1090874, long: -88.230003, crime: "theftOver"}];

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

    const startDate = props.startDate;
    const endDate = props.endDate;

    var circleRadius = 15;
    var strokeWidth = 3;
    var zoomSize = 15;
    var padding = 25;

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

    let map; 

    let markers_burglary = [];

    function initMap() {

      map = new google.maps.Map(d3.select("#map").node(), {
        zoom: zoomSize,
        center: new google.maps.LatLng(UIUCLat, UIUCLong),
        mapTypeId: google.maps.MapTypeId.TERRAIN,
      });


      // official 
      var infowindow = new google.maps.InfoWindow();
      var marker , i;
      for(i = 0; i < fakeData.length ; i++){
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(fakeData[i].lat, fakeData[i].long),
          map: map,
        })
        
        
        google.maps.event.addListener(marker, "mouseover", 
            (function(marker, i){
              return function(){
                infowindow.setContent(fakeData[i].crime);
                infowindow.open(map, marker);
              }
            })
            (marker, i)
          )
         
        if(fakeData[i].crime == "harrassment"){
          markers_burglary.push(marker);
        }

      }
      
      
      overlayView = new google.maps.OverlayView({
        setMap: map
      });

      overlayView.onAdd = function () {

        console.log("onAdd");

        var layer = d3.select(this.getPanes().overlayLayer).append("div").attr("class", "crimeSpots");

        overlayView.draw = function () {
          var projection = this.getProjection();

          const tooltip = d3.select("#tooltip");

          var marker = layer.selectAll("svg")
          .data(fakeData)
          .each(transform)
          .enter()
          .append("svg")
          .each(transform)
          .attr("class", "marker");


          marker.append("circle")
          .attr("r", circleRadius)
          .attr("cx", padding)
          .attr("cy", padding)
          .attr("stroke-width", strokeWidth)
          .attr("stroke", function(d) {
            var crimeIdx = crimeTypes.indexOf(d.crime);
            return outlineColors[crimeIdx];
          })
          .attr("fill", function(d) {
            var crimeIdx = crimeTypes.indexOf(d.crime);
            return fillColors[crimeIdx];
          })

          .on("mouseover", (mouseEvent, d) => {
            // Runs when the mouse enters a dot.  d is the corresponding data point.
            tooltip.style("opacity", 1);
            tooltip.text("Crime:" + d.crime);
          })

          .on("mousemove", (mouseEvent, d) => {
            /* Runs when mouse moves inside a dot */
            // var leftOffset = d3.pointer(mouseEvent)[0] + 3
            // var leftOffset = dateScale((d.date)) + 3;
            // tooltip.style("left", leftOffset + "px");
            //
            // var topOffset = d3.pointer(mouseEvent)[1] + 3
            // var topOffset = priceScale(parseFloat(d.close)) + PADDING.TOP + 3;
            // tooltip.style("top", topOffset + "px");
          })
          .on("mouseout", (mouseEvent, d) => {
            tooltip.style("opacity", 0);
          });



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

    // Removes the markers from the map, but keeps them in the array.
    function setMarkersOnOffMap(map, markers_burglary) {
      for(var i = 0; i < markers_burglary.length; i++){
        arrayName[i].setMap(map);
      }
    }

    // Shows any markers currently in the array.
    function showMarkers() {
      setMarkersOnOffMap(map, markers_burglary);
    }

    function clearMarkers(){
      setMarkersOnOffMap(null, markers_burglary);
    }


    useEffect(() => {
      initMap();
    }, [props]);

    return (

      <div id="fullChart">
        <div id="tooltip" className="tooltip" style={{ "opacity": 0 }}>Hover over a point to start!</div>
        <div id="map"></div>

      </div>

    );

  }

  export default Map;
 

  export default GoogleApiWrapper({
    apiKey: API_KEY
  })(MapContainer)
