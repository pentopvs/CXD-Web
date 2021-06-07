import React from "react";
import "./Prod.css";

const Prodgif =(props)=> {
  return (
      <div class="gifpar row mt-5 ml-5" style={{height: "350px", width: "100%"}}>
          <div class="giftx col-4 ml-5 my-auto">
            <h1 className="gifh" style={{ color: '#00041f' }}>{props.title}</h1>
            <p className="mt-3" style={{ color: 'grey' }}>{props.subt}</p>
          </div>
          <div class="giff col-5 shadow  mb-5 ml-5  bg-white rounded" style={{marginRight:"30px"}}>
              <img src={props.gif} style={{ height: "300px", width: "100%" }}/>
          </div>
      </div>
    );
};

export default Prodgif