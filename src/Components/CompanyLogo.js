import React from "react";
import Picture1 from "../assets/companylogo/Picture1.png"
import Picture2 from "../assets/companylogo/Picture2.png"
import Picture3 from "../assets/companylogo/Picture3.png"
import Picture4 from "../assets/companylogo/Picture4.svg"
import Picture5 from "../assets/companylogo/Picture5.png"
import Picture6 from "../assets/companylogo/Picture6.png"
import Picture7 from "../assets/companylogo/Picture7.png"
import Picture8 from "../assets/companylogo/Picture8.png"
import Picture9 from "../assets/companylogo/Picture9.png"
import Picture10 from "../assets/companylogo/Picture10.png"
import Picture11 from "../assets/companylogo/Picture11.png"
import "./CompanyLogo.css";

const CompanyLogo =()=> {
  return (
      <div className="col-12" style={{backgroundColor:"#44445E", width:"100%",height:"auto"}}>
      <div style={{textColor:"white"}}>
        <h2 className="text-center pt-5" style={{color:"white"}}>
        Professionals from following companies have signed-up</h2>
      </div>
        <div className="comlog row">
            <img
                src={Picture1} style={{ height: "40px", width: "100px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture2} style={{ height: "65px", width: "75px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture3} style={{ height: "50px", width: "125px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture4} style={{ height: "105px", width: "170px",marginTop:"40px", marginBottom:"80px"}}
            />
        </div>
        <div className="comlog row">
            <img
                src={Picture5} style={{ height: "50px", width: "220px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture6} style={{ height: "60px", width: "270px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture7} style={{ height: "60px", width: "320px",marginTop:"40px", marginBottom:"80px"}}
            />
        </div>
        <div className="comlog row" >
            <img
                src={Picture8} style={{ height: "40px", width: "90px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture9} style={{ height: "50px", width: "260px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture10} style={{ height: "55px", width: "75px",marginTop:"40px", marginBottom:"80px"}}
            />
            <img
                src={Picture11} style={{ height: "85px", width: "270px",marginTop:"40px", marginBottom:"80px"}}
            />
        </div>
      </div>
    );
};

export default CompanyLogo