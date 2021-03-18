import React, { useState } from "react";
import ReactDOM from "react-dom"; //stylesheet

import "..//css/layout.css";
import HeaderBar from "/lib/headerbar.js";
import Map from "/lib/map.js";
import Sidebar from "/lib/sidebar.js";

function Layout(props) {
  var [burglary, setBurglary] = useState(true);
  var [idUse, setIdUse] = useState(true);
  var [theftUnder, setTheftUnder] = useState(true);
  var [theftOver, setTheftOver] = useState(true);
  var [harrassment, setHarrassment] = useState(true);
  var [propertyDamage, setPropertyDamage] = useState(true);
  var [tresspassing, setTresspassing] = useState(true);
  var [sexualAssault, setSexualAssault] = useState(true);
  var [prostitution, setProstitution] = useState(true);
  var [underageLiquor, setUnderageLiquor] = useState(true);

  var changeBurglary = setVal => {
    setVal = !burglary;
    setBurglary(setVal);
  };

  var changeIdUse = setVal => {
    setVal = !idUse;
    setIdUse(setVal);
  };

  var changeTheftUnder = setVal => {
    setVal = !theftUnder;
    setTheftUnder(setVal);
  };

  var changeTheftOver = setVal => {
    setVal = !theftOver;
    setTheftOver(setVal);
  };

  var changeHarrassment = setVal => {
    setVal = !harrassment;
    setHarrassment(setVal);
  };

  var changePropertyDamage = setVal => {
    setVal = !propertyDamage;
    setPropertyDamage(setVal);
  };

  var changeTresspassing = setVal => {
    setVal = !tresspassing;
    setTresspassing(setVal);
  };

  var changeSexualAssault = setVal => {
    setVal = !sexualAssault;
    setSexualAssault(setVal);
  };

  var changeProstitution = setVal => {
    setVal = !prostitution;
    setProstitution(setVal);
  };

  var changeUnderageLiquor = setVal => {
    setVal = !underageLiquor;
    setUnderageLiquor(setVal);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "grid-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "A"
  }, /*#__PURE__*/React.createElement(HeaderBar, {
    className: "headerbar"
  })), /*#__PURE__*/React.createElement("div", {
    className: "B"
  }, /*#__PURE__*/React.createElement(Map, {
    className: "map",
    burglary: burglary,
    idUse: idUse,
    theftUnder: theftUnder,
    theftOver: theftOver,
    harrassment: harrassment,
    propertyDamage: propertyDamage,
    tresspassing: tresspassing,
    sexualAssault: sexualAssault,
    prostitution: prostitution,
    underageLiquor: underageLiquor
  })), /*#__PURE__*/React.createElement("div", {
    className: "D"
  }, /*#__PURE__*/React.createElement(Sidebar, {
    className: "sidebar",
    onChangeBurglary: e => {
      changeBurglary(e);
    },
    onChangeIdUse: e => {
      changeIdUse(e);
    },
    onChangeTheftUnder: e => {
      changeTheftUnder(e);
    },
    onChangeTheftOver: e => {
      changeTheftOver(e);
    },
    onChangeHarrassment: e => {
      changeHarrassment(e);
    },
    onChangePropertyDamage: e => {
      changePropertyDamage(e);
    },
    onChangeTresspassing: e => {
      changeTresspassing(e);
    },
    onChangeSexualAssault: e => {
      changeSexualAssault(e);
    },
    onChangeProstituion: e => {
      changeProstitution(e);
    },
    onChangeUnderageLiquor: e => {
      changeUnderageLiquor(e);
    }
  })));
}

export default Layout;
var domContainer = document.querySelector('#layout');
ReactDOM.render( /*#__PURE__*/React.createElement(Layout, null), domContainer);