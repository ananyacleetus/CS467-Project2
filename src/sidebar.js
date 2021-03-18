import React, {useState, useEffect} from "react";
import { Icon } from '@material-ui/core';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import { ArrowDropDown, ArrowDropUp } from '@material-ui/icons';

 //stylesheet
 import "..//css/sidebar.css";


 function Sidebar (props) {

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

     return (

       <div className="fullsidebar">

         <h2>Crime Descriptions:</h2>

           <FormControl>
             <FormLabel id="selectText">Select one or more filters:</FormLabel>
             <FormGroup>
               <FormControlLabel
                 control={<Checkbox checked={burglary} onChange={changeBurglary} className="burglary"/>}
                 label="Burglary"
               />
               <FormControlLabel
                 control={<Checkbox checked={idUse} onChange={changeIdUse} className="idUse"/>}
                 label="Unlawful use of I.D."
               />
               <FormControlLabel
                 control={<Checkbox checked={theftUnder} onChange={changeTheftUnder} className="theftUnder"/>}
                 label="Theft $500 and under"
               />
               <FormControlLabel
                 control={<Checkbox checked={theftOver} onChange={changeTheftOver} className="theftOver"/>}
                 label="Theft over $500"
               />
               <FormControlLabel
                 control={<Checkbox checked={harrassment} onChange={changeHarrassment} className="harrassment"/>}
                 label="Harrassment"
               />
               <FormControlLabel
                 control={<Checkbox checked={propertyDamage} onChange={changePropertyDamage} className="propertyDamage"/>}
                 label="Criminal damange to property"
               />
               <FormControlLabel
                 control={<Checkbox checked={tresspassing} onChange={changeTresspassing} className="tresspassing"/>}
                 label="Tresspassing"
               />
               <FormControlLabel
                 control={<Checkbox checked={sexualAssault} onChange={changeSexualAssault} className="sexualAssault"/>}
                 label="Sexual Assault"
               />
               <FormControlLabel
                 control={<Checkbox checked={prostitution} onChange={changeProstitution} className="prostitution"/>}
                 label="Prostituion"
               />
               <FormControlLabel
                 control={<Checkbox checked={underageLiquor} onChange={changeUnderageLiquor} className="underageLiquor"/>}
                 label="Liquor-underage"
               />

             </FormGroup>
           </FormControl>


         <h2>Date/Time Filters:</h2>

   </div>

   );

   }

 export default Sidebar;
