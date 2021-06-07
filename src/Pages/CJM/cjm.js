import React from "react";
import Prodhead from "../../Components/Prodhead/Prodhead"
import Prodfoot from "../../Components/Prodhead/Prodfoot"
import Prodgif from "../../Components/Prodhead/Prodgif"
import CJM1 from "../../assets/CJM/CJM1Flexible.gif"
import CJM2 from "../../assets/CJM/CJM2Story.gif"
import CJM3 from "../../assets/CJM/CJM3Touchpoint.gif"
import CJM4 from "../../assets/CJM/CJM4Emotions.gif"
import CJM5 from "../../assets/CJM/CJM5Files.gif"
import CJM6 from "../../assets/CJM/CJM6AddCpmments.gif"
import CJM7 from "../../assets/CJM/CJM7Chat.gif"
import CJM8 from "../../assets/CJM/CJM8Share.gif"
import CJM9 from "../../assets/CJM/CJM9Audit.gif"


const cjm =()=>{
    return(
      <>
        <Prodhead
          head={'Customer Journey Mapping Tool'}
          subhead={"Customer journey mapping is a tool to analyze and improve the customer's experience."}
          button={'CREATE CUSTOMER JOURNEY MAP FOR FREE'}
        />
        <Prodgif 
            title={'Flexible and powerful layout'}
            subt={"CXDeployer's journey mapping tool helps you to create customer experience maps, employee journey maps, user journey maps, service blueprints with ease and flexibility."}
            gif={CJM1}/>
        <Prodgif
            title={'Visualize the journey'}
            subt={'How can maps be complete without adding pictures to them? Add the images you wish to add to the journey map and make it more personalized, just the way you want it.'}
            gif={CJM2}/>
        <Prodgif
            title={'Capture touchpoints/customer actions'}
            subt={'Worried about how to add customer touchpoints to the map? Worry no more, add these points in your journey map with the CX Deployer tool and add it to your map to teach your customer’s review and loyalty.'}
            gif={CJM3}/>
        <Prodgif
            title={'Capture customer emotions/feelings'}
            subt={"Use Line Lane to catch in-the-moment feelings, whether they're positive, neutral, or negative, at various points along the journey."}
            gif={CJM4}/>
        <Prodgif
            title={'Add files'}
            subt={"Adding pertinent information to a record is always a good idea. You may connect new files to an entity's history, which will allow you to keep all relevant data in one location."}
            gif={CJM5}/>
        <Prodgif
            title={'Add comments'}
            subt={"Add comments to your journey map for pointing out any errors and corrections. The comments can be beneficial to keep a track of changes for team members while editing."}
            gif={CJM6}/>
        <Prodgif
            title={'Real-time messaging'}
            subt={"Want to suggest changes to the other team member while creating the map? Now you can chat with other people in real-time and convey your suggestions easily."}
            gif={CJM7}/>
        <Prodgif
            title={'Share maps'}
            subt={"How will you share with your teammates and take their inputs on the journey map you created. Don’t worry, it can be done with the share maps feature of CXDeployer."}
            gif={CJM8}/>
        <Prodgif
            title={'Audit trail and journey map history'}
            subt={"You can check and revisit your previous development, alteration, copying, moving, and deleting process with the help of the audit trail and journey map history feature."}
            gif={CJM9}/>
        <div class="col-12 text-center mt-5" style={{paddingLeft: "130px", paddingRight: "130px"}}>
            <h1 style={{ color: '#00041f' }}>Real-time Mapping</h1>
            <p className="mt-3" style={{ color: 'grey' }}>Multiple people working on the same journey map? Well, now it has become easier with real-time collaboration. Multiple teammates can work on the same journey map without hindering each other's work.</p>
        </div>
        <Prodfoot
          button={'BUILD YOUR FIRST JOURNEY MAP NOW'}
        />
      </>
    );
};

export default cjm;