import React, { useState, useEffect } from "react";
import { Icon } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons'; //stylesheet

import "..//css/sidebar.css";

function Sidebar(props) {
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
    className: "fullsidebar"
  }, /*#__PURE__*/React.createElement("h2", null, "Crime Descriptions:"), /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(FormLabel, null, "Select one or more filters:"), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: burglary,
      onChange: changeBurglary
    }),
    label: "Burglary"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: idUse,
      onChange: changeIdUse,
      id: "idUse"
    }),
    label: "Unlawful use of I.D."
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: theftUnder,
      onChange: changeTheftUnder,
      id: "theftUnder"
    }),
    label: "Theft $500 and under"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: theftOver,
      onChange: changeTheftOver,
      id: "theftOver"
    }),
    label: "Theft over $500"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: harrassment,
      onChange: changeHarrassment,
      id: "harrassment"
    }),
    label: "Harrassment"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: propertyDamage,
      onChange: changePropertyDamage,
      id: "propertyDamage"
    }),
    label: "Criminal damange to property"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: tresspassing,
      onChange: changeTresspassing,
      id: "tresspassing"
    }),
    label: "Tresspassing"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: sexualAssault,
      onChange: changeSexualAssault,
      id: "sexualAssault"
    }),
    label: "Sexual Assault"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: prostitution,
      onChange: changeProstitution,
      id: "prostitution"
    }),
    label: "Prostituion"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      checked: underageLiquor,
      onChange: changeUnderageLiquor,
      id: "underageLiquor"
    }),
    label: "Liquor-underage"
  }))), /*#__PURE__*/React.createElement("h2", null, "Date/Time Filters:"));
}

export default Sidebar;