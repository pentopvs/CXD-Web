import React from "react";
import Prodhead from "../../Components/Prodhead/Prodhead"
import Prodfoot from "../../Components/Prodhead/Prodfoot"
import Prodgif from "../../Components/Prodhead/Prodgif"
import Per1 from "../../assets/Persona/Persona-PremadeTemplates3.gif"
import Per2 from "../../assets/Persona/Persona2CustomTemplates.gif"
import Per3 from "../../assets/Persona/Person3AddImage.gif"
import Per4 from "../../assets/Persona/Persona4ComparePersona.gif"
import "../../Components/Prodhead/Prod.css"


const persona =()=>{
    return(
      <>
        <Prodhead
          head={'Persona Mapping Tool'}
          subhead={'Persona mapping is the process of creating fictional yet realistic client profiles inclusive of personal features, ambitions, motives, attitudes, and other factors are reflected in them.'}
          button={'CREATE FIRST PERSONA FOR FREE'}
        />
        <Prodgif 
            title={'Select from pre-made templates'}
            subt={'You can pick the best-suited template for your persona mapping from various pre-made sample templates based on a different persona types.'}
            gif={Per1}/>
        <Prodgif
            title={'Use custom templates to reuse them'}
            subt={'If you wish to reuse the same template again, you can use the custom template option, that will give you details according to your previous persona mapping, saving you from the effort of starting from scratch.'}
            gif={Per2}/>
        <Prodgif
            title={'Add pictures'}
            subt={'How can a map be complete without adding pictures to them? Add the images you wish to add in the persona map and make it more personalized, just the way you want it.'}
            gif={Per3}/>
        <Prodgif
            title={'Compare personas'}
            subt={"Compare persona which aids in the comprehension of your target audience by categorizing them into easily distinguishable groups and exposing each persona's distinct needs and frustrations."}
            gif={Per4}/>
        <div class="fopo col-12 text-center mt-5" >
            <h1 style={{ color: '#00041f' }}>Real-time collaboration</h1>
            <p className="mt-3" style={{ color: 'grey' }}>Multiple stakeholders working on the same persona mapping project? Well, now it has become easier with real-time collaboration. Multiple teammates can work on the same project without hindering each other's work.</p>
        </div>
        <Prodfoot
          button={'BUILD YOUR PERSONA MAP NOW!'}
        />
      </>
    );
};

export default persona;