import React, {useState} from "react";
import ReactDOM from "react-dom";

//stylesheet
import "..//css/layout.css";

import HeaderBar from "/lib/headerbar.js";
import Map from "/lib/map.js";
import Sidebar from "/lib/sidebar.js";



function Layout (props) {

     const[burglary, setBurglary] = useState(true);
     const[idUse, setIdUse] = useState(true);
     const[theftUnder, setTheftUnder] = useState(true);
     const[theftOver, setTheftOver] = useState(true);
     const[harrassment, setHarrassment] = useState(true);
     const[propertyDamage, setPropertyDamage] = useState(true);
     const[tresspassing, setTresspassing] = useState(true);
     const[sexualAssault, setSexualAssault] = useState(true);
     const[prostitution, setProstitution] = useState(true);
     const[underageLiquor, setUnderageLiquor] = useState(true);

     const[startDate, setStartDate] = useState("2020-01-25");
     const[endDate, setEndDate] = useState("2021-03-19");


     const changeBurglary = (setVal) => {
       setVal = !burglary;
       setBurglary(setVal);
     }
     const changeIdUse = (setVal) => {
       setVal = !idUse;
       setIdUse(setVal);

     }
     const changeTheftUnder = (setVal) => {
       setVal = !theftUnder;
       setTheftUnder(setVal);

     }
     const changeTheftOver = (setVal) => {
       setVal = !theftOver;
       setTheftOver(setVal);

     }
     const changeHarrassment = (setVal) => {
       setVal = !harrassment;
       setHarrassment(setVal);

     }
     const changePropertyDamage = (setVal) => {
       setVal = !propertyDamage;
       setPropertyDamage(setVal);

     }
     const changeTresspassing = (setVal) => {
       setVal = !tresspassing;
       setTresspassing(setVal);

     }
     const changeSexualAssault = (setVal) => {
       setVal = !sexualAssault;
       setSexualAssault(setVal);

     }
     const changeProstitution = (setVal) => {
       setVal = !prostitution;
       setProstitution(setVal);

     }
     const changeUnderageLiquor = (setVal) => {
       setVal = !underageLiquor;
       setUnderageLiquor(setVal);

     }

     const changeStartDate = (setVal) => {
       setStartDate(setVal);

     }
     const changeEndDate = (setVal) => {
       setEndDate(setVal);

     }



    return (

      <div className="grid-container">
        <div className="A">
        <HeaderBar className="headerbar"/>
        </div>
        <div className="B">
        <Map className="map"
          burglary={burglary}
          idUse={idUse}
          theftUnder={theftUnder}
          theftOver={theftOver}
          harrassment={harrassment}
          propertyDamage={propertyDamage}
          tresspassing={tresspassing}
          sexualAssault={sexualAssault}
          prostitution={prostitution}
          underageLiquor={underageLiquor}
          startDate={startDate}
          endDate={endDate}
          />
        </div>
        <div className="D">
        <Sidebar className="sidebar"
          onChangeBurglary={(e) => { changeBurglary(e) }}
          onChangeIdUse={(e) => { changeIdUse(e) }}
          onChangeTheftUnder={(e) => { changeTheftUnder(e) }}
          onChangeTheftOver={(e) => { changeTheftOver(e) }}
          onChangeHarrassment={(e) => { changeHarrassment(e) }}
          onChangePropertyDamage={(e) => { changePropertyDamage(e) }}
          onChangeTresspassing={(e) => { changeTresspassing(e) }}
          onChangeSexualAssault={(e) => { changeSexualAssault(e) }}
          onChangeProstituion={(e) => { changeProstitution(e) }}
          onChangeUnderageLiquor={(e) => { changeUnderageLiquor(e) }}
          onChangeStartDate={(e) => { changeStartDate(e) }}
          onChangeEndDate={(e) => { changeEndDate(e) }}/>

        </div>
      </div>
    );

  }


export default Layout;


const domContainer = document.querySelector('#layout');

ReactDOM.render(<Layout/>, domContainer);
