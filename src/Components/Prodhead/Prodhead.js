import React from "react";
import './Prod.css';

const Prodhead =(props)=> {
  return (
      <div class="row">
        <div class="prodh col-12 text-center pt-5 pb-5" style={{ height: "400px", width: "100px", backgroundColor: "#24243e", color: "white" }}>
          <h1 className="mt-5">{props.head}</h1>
          <p className="mt-4" style={{fontSize: "20px"}}>{props.subhead}</p>
          <div className="text-center">

          <a href="https://app.cxdeployer.com" target="_blank"  >
            <button className="headbtn btn-outline" style={{border:"none", borderRadius:"999px",padding:"30px",color:"white",backgroundColor:"orange",fontWeight:"bold",fontSize:"25px",marginTop:"50px",textDecoration:"none"}}>
              {props.button}
          </button>
      </a>
          </div>
        </div>
      </div>
    );
};

export default Prodhead
