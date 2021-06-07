import React from "react";
import Prodhead from "../../Components/Prodhead/Prodhead"
import Prodfoot from "../../Components/Prodhead/Prodfoot"
import Prodgif from "../../Components/Prodhead/Prodgif"
import BMC1 from "../../assets/BMC/BMC1Easy.gif"
import BMC2 from "../../assets/BMC/BMC2Drag.gif"
import BMC3 from "../../assets/BMC/BMC3Custom.gif"
import BMC4 from "../../assets/BMC/BMC4Chat.gif"
import BMC5 from "../../assets/BMC/BMC5Track.gif"


const bmc =()=>{
    return(
      <>
        <Prodhead
          head={'Business Model Canvas Tool'}
          subhead={'Business model canvas is a strategic tool to create new value propositions or evaluate existing ones.'}
          button={'Build Empathy Map for Free'}
        />
        <Prodgif 
            title={'Easy to organize'}
            subt={'A simple and flexible structure to organize cards and elements of canvas.'}
            gif={BMC1}/>
        <Prodgif
            title={'Drag and drop'}
            subt={'Just grab a card from the canvas, drag it to the other location and drop it there. Save time on editing.'}
            gif={BMC2}/>
        <Prodgif
            title={'Customize cards'}
            subt={'To give your map the feel you want,  you can customize your empathy map cards by adding different colors according to the different personas.'}
            gif={BMC3}/>
        <Prodgif
            title={'Collaborate with teams'}
            subt={'Collaborate with your team no matter where they are and work on the canvas at the same time.'}
            gif={BMC4}/>
        <Prodgif
            title={'Track Changes'}
            subt={'You can check and revisit your previous development, alteration and changes with the help of the activity log and map history feature and keep track of who’s done what.'}
            gif={BMC5}/>
        <Prodfoot
          button={'BUILD YOUR BUSINESS MODEL NOW'}
        />
      </>
    );
};

export default bmc;