import React from "react";
import Prodhead from "../../Components/Prodhead/Prodhead"
import Prodfoot from "../../Components/Prodhead/Prodfoot"
import Prodgif from "../../Components/Prodhead/Prodgif"
import Task1 from "../../assets/Task/Task1PreBuilt.gif"
import Task2 from "../../assets/Task/Task2CustomProject.gif"
import Task3 from "../../assets/Task/Task3AddPhase.gif"
import Task4 from "../../assets/Task/Task4AddTask.gif"
import Task5 from "../../assets/Task/Task5AssignOwner.gif"
import Task6 from "../../assets/Task/Task6Scheduling.gif"
import Task7 from "../../assets/Task/Task7Checklist.gif"
import Task8 from "../../assets/Task/Task8Tracking.gif"

const task =()=>{
    return(
      <>
        <Prodhead
          head={'Manage Implementation of the Best Idea'}
          subhead={'Project manage the execution of the selected idea and accelerate the realization of the future state of the customer experience.'}
          button={'EXECUTE EXPERIENCE INNOVATION'}
        />
        <Prodgif 
            title={'Pre-built improvement methods'}
            subt={'Stuck at a place where you need improvement but can’t add? Select from the in-built improvement methods to improve your journey mapping.'}
            gif={Task1}/>
        <Prodgif
            title={'Create a custom project plan template'}
            subt={'Now create your own roadmap for your next journey improvement project and use it with your teammates for other projects as well.'}
            gif={Task2}/>
        <Prodgif
            title={'Add project phases'}
            subt={'Don’t know when a project will be over? Now you can create phases of a project, and exactly know how much time will a journey map take to complete.'}
            gif={Task3}/>
        <Prodgif
            title={'Add Task'}
            subt={'Add tasks for yourself and other team members with information and deadlines. Find out when they submit it and check their progress.'}
            gif={Task4}/>
        <Prodgif
            title={'Assign owner and priority'}
            subt={'Assign owner and allocate tasks based on the priority list so that you don’t miss a deadline.'}
            gif={Task5}/>
        <Prodgif
            title={'Task scheduling'}
            subt={'Task scheduling will help you to assign the start and end times to a set of tasks, subject to certain constraints.'}
            gif={Task6}/>
        <Prodgif
            title={'Add attachments and checklist'}
            subt={'Adding pertinent information to a task keep all relevant data related to that task in one location. You can also add checklist to a task.'}
            gif={Task7}/>
        <Prodgif
            title={'Progress tracking'}
            subt={'Track the progress of the allotted tasks and know real-time visual representation of the status of a project.'}
            gif={Task8}/>
        <div class="col-12 text-center mt-5">
            <h1 style={{ color: '#00041f' }}>Notification- new task or overdue task</h1>
            <p className="mt-3" style={{ color: 'grey' }}>Now get notification when a new task is assigned to you. Get notified when a deadline is near or when a task is completed.</p>
        </div>
        <Prodfoot
          button={'IMPLEMENT JOURNEY AND EXPERIENCE IMPROVEMENT IDEAS NOW!'}
        />
      </>
    );
};

export default task;