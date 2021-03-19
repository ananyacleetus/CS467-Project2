import React, { useState, useEffect } from "react";
import { Icon } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@material-ui/icons/CheckBoxOutlineBlankTwoTone'; //stylesheet

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
    props.onChangeBurglary(setVal);
  };

  var changeIdUse = setVal => {
    setVal = !idUse;
    setIdUse(setVal);
    props.onChangeIdUse(setVal);
  };

  var changeTheftUnder = setVal => {
    setVal = !theftUnder;
    setTheftUnder(setVal);
    props.onChangeTheftUnder(setVal);
  };

  var changeTheftOver = setVal => {
    setVal = !theftOver;
    setTheftOver(setVal);
    props.onChangeTheftOver(setVal);
  };

  var changeHarrassment = setVal => {
    setVal = !harrassment;
    setHarrassment(setVal);
    props.onChangeHarrassment(setVal);
  };

  var changePropertyDamage = setVal => {
    setVal = !propertyDamage;
    setPropertyDamage(setVal);
    props.onChangePropertyDamage(setVal);
  };

  var changeTresspassing = setVal => {
    setVal = !tresspassing;
    setTresspassing(setVal);
    props.onChangeTresspassing(setVal);
  };

  var changeSexualAssault = setVal => {
    setVal = !sexualAssault;
    setSexualAssault(setVal);
    props.onChangeSexualAssault(setVal);
  };

  var changeProstitution = setVal => {
    setVal = !prostitution;
    setProstitution(setVal);
    props.onChangeProstituion(setVal);
  };

  var changeUnderageLiquor = setVal => {
    setVal = !underageLiquor;
    setUnderageLiquor(setVal);
    props.onChangeUnderageLiquor(setVal);
  };

  return /*#__PURE__*/React.createElement("div", {
    className: "fullsidebar"
  }, /*#__PURE__*/React.createElement("h2", null, "Crime Descriptions:"), /*#__PURE__*/React.createElement(FormControl, null, /*#__PURE__*/React.createElement(FormLabel, {
    id: "selectText"
  }, "Select one or more filters:"), /*#__PURE__*/React.createElement(FormGroup, null, /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: burglary,
      onChange: changeBurglary,
      className: "burglary"
    }),
    label: "Burglary"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: idUse,
      onChange: changeIdUse,
      className: "idUse"
    }),
    label: "Unlawful use of I.D."
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: theftUnder,
      onChange: changeTheftUnder,
      className: "theftUnder"
    }),
    label: "Theft $500 and under"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: theftOver,
      onChange: changeTheftOver,
      className: "theftOver"
    }),
    label: "Theft over $500"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: harrassment,
      onChange: changeHarrassment,
      className: "harrassment"
    }),
    label: "Harrassment"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: propertyDamage,
      onChange: changePropertyDamage,
      className: "propertyDamage"
    }),
    label: "Criminal damange to property"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: tresspassing,
      onChange: changeTresspassing,
      className: "tresspassing"
    }),
    label: "Tresspassing"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: sexualAssault,
      onChange: changeSexualAssault,
      className: "sexualAssault"
    }),
    label: "Sexual Assault"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: prostitution,
      onChange: changeProstitution,
      className: "prostitution"
    }),
    label: "Prostitution"
  }), /*#__PURE__*/React.createElement(FormControlLabel, {
    control: /*#__PURE__*/React.createElement(Checkbox, {
      icon: /*#__PURE__*/React.createElement(CheckBoxOutlineBlankTwoToneIcon, null),
      checked: underageLiquor,
      onChange: changeUnderageLiquor,
      className: "underageLiquor"
    }),
    label: "Liquor-underage"
  }))), /*#__PURE__*/React.createElement("h2", null, "Date/Time Filters:"));
}

export default Sidebar;