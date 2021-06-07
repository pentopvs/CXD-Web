import React from "react";
import Prodhead from "../../Components/Prodhead/Prodhead"
import Prodgif from "../../Components/Prodhead/Prodgif"
import Prodfoot from "../../Components/Prodhead/Prodfoot"
import Emp1 from "../../assets/Emapthy/Empathy1Persona.gif"
import Emp2 from "../../assets/Emapthy/Emapthy2Compare.gif"
import Emp3 from "../../assets/Emapthy/Emapthy3FlexibleLayout.gif"
import Emp4 from "../../assets/Emapthy/Empathy4ExportMap.gif"
import Emp5 from "../../assets/Emapthy/Emapthy5CustomCard.gif"

const empathy =()=>{
    return(
      <>
        <Prodhead
          head={'Empathy Mapping Tool Online'}
          subhead={'Empathy map is a tool that is used to gain deeper insights of customers, users and employees.'}
          button={'Build Empathy Map for Free'}
        />
        <Prodgif 
            title={'Persona linked empathy mapping'}
            subt={'An empathy map and persona are linked to one another, so if you have created multiple personas, then this feature allows you to create an empathy map for each persona.'}
            gif={Emp1}/>
        <Prodgif
            title={'Compare and analyze empathy maps'}
            subt={'Once you create multiple persona maps, you can bring them together and compare them with each other to find the difference.'}
            gif={Emp2}/>
        <Prodgif
            title={'Flexible and intuitive layout'}
            subt={'The empathy module is flexible enough to accommodate modifications or additions but rigid enough to scale.'}
            gif={Emp3}/>
        <Prodgif
            title={'Customize cards'}
            subt={'To give your map the feel you want,  you can customize your empathy map cards by adding different colors according to the different personas.'}
            gif={Emp4}/>
        <Prodgif
            title={'Export your map'}
            subt={'Do you want your empathy map as a PNG image, then don’t you worry. You can export your map into a PNG image.'}
            gif={Emp5}/>
        <div class="col-12 text-center mt-5">
            <h1 style={{ color: '#00041f' }}>Rich text editor</h1>
            <p className="mt-3" style={{ color: 'grey' }}>Edit your text to any size fold and look you want at any time. Give your maps the feel you like.</p>
        </div>
        <Prodfoot
          button={'CREATE EMPATHY MAP NOW'}
        />
      </>
    );
};

export default empathy;