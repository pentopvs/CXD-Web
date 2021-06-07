import React from "react";
import "../../Components/Prodhead/Prod.css"
import Prodhead from "../../Components/Prodhead/Prodhead"
import Prodfoot from "../../Components/Prodhead/Prodfoot"
import Prodgif from "../../Components/Prodhead/Prodgif"
import Idea1 from "../../assets/Idea/Idea1Capture.gif"
import Idea2 from "../../assets/Idea/Idea2HideMe.gif"
import Idea3 from "../../assets/Idea/Idea3Benefit.gif"
import Idea4 from "../../assets/Idea/Idea4HashTag2.gif"
import Idea5 from "../../assets/Idea/Idea5AddFile.gif"
import Idea6 from "../../assets/Idea/Idea6Vote.gif"
import Idea7 from "../../assets/Idea/Idea7Rate2.gif"
import Idea8 from "../../assets/Idea/Idea8Collaborate.gif"

const idea =()=>{
    return(
      <>
        <Prodhead
          head={'Manage Ideas to Improve Experience'}
          subhead={'Discover, capture, refine, prioritize, innovate and improve customer journey and experience.'}
          button={'CAPTURE IMPROVEMENT IDEA'}
        />
        <Prodgif 
            title={'Capture improvement ideas'}
            subt={"With CXDeployer's ideation management, you can capture more ideas if you want to change your journey map. Employees should be able to submit ideas as they come up with them."}
            gif={Idea1}/>
        <Prodgif 
            title={'Anonymous idea posting'}
            subt={'Your colleagues can hide their identify when dropping an idea.'}
            gif={Idea2}/>
        <Prodgif 
            title={'Categorize idea by benefit type'}
            subt={'You can categorize the ideas that look useful to you on the basis of the benefit you want to derive. This will help to keep your ideas organized.'}
            gif={Idea3}/>
        <Prodgif 
            title={'#Hashtags'}
            subt={"You can also add relevant hashtags to your ideas allowing you to quickly find ideas on that same topic."}
            gif={Idea4}/>
        <Prodgif 
            title={'Add files'}
            subt={"Want to submit an idea but don’t know how to explain it well? Add the attachment files and documents while submitting to support your idea."}
            gif={Idea5}/>
        <Prodgif 
            title={'Idea voting'}
            subt={"Upvote on ideas that have the most potential for further development in order to grow the best ideas."}
            gif={Idea6}/>
        <Prodgif 
            title={'Idea rating'}
            subt={"Post your ideas and ask the members for their input by asking them to rate your ideas on a scale of 1 to 5. The rating can be done based on the effort or cost required to implement an idea and the benefit derived from it."}
            gif={Idea7}/>
        <Prodgif 
            title={'Collaborate and refine ideas'}
            subt={"Collaborate on new ideas with your team, review the ideas, give suggestions, and refine the new ideas and leverage each other’s collective knowledge."}
            gif={Idea8}/>
        <Prodfoot
          button={'CAPTURE JOURNEY AND EXPERIENCE TRANSFORMATION IDEAS NOW!'}
        />
      </>
    );
};

export default idea;