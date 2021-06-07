import React from "react";

const Prodfoot =(props)=> {
  return (
      <div  className="col-12 text-center " >
        <a href="https://app.cxdeployer.com" target="_blank">
        <button  className="headbtnf" style={{border:"none", borderRadius:"999px",padding:"30px",color:"white",backgroundColor:"orange",fontWeight:"bold",fontSize:"25px",textDecoration:"none"}}>
          {props.button}
        </button></a>
      </div>
    );
};

export default Prodfoot