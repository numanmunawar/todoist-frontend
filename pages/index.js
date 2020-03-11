import React from "react"
import Baselayout from "../components/layout/Baselayout";
import Addtask from "../components/addtask/Addtask";
import myImage from "/home/numan/next-js-tailwind/public/inbox-solid.svg";



class index extends React.Component{
  

  render(){

    return (
      <React.Fragment>
        {/* <head>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </head> */}
        <Baselayout/>
        <div className="inbox-page">
          {/* <div className="obox"> */}
            <div className="inbox">
            <img src={myImage} alt="logo" className="image" />
          </div>
        {/* </div> */}
                            
          <h1>Inbox</h1>
        </div>
        <Addtask/>


    <style jsx>{`
        .inbox-page{
          padding-left:230px;
          font-family: Montserrat;
          font-style: normal;
          font-weight: bold;
          font-size: 15px;
          line-height: 49px;
          display:flex;
          flex-direction:row:
          justify-content:flex-start;
          
          color: #000000;
        }

          .inbox{
            width:30px;
            height:30px;
            padding-top:29px;
            padding-right:10px;
          
          }
          .obox{
            
          }
      `}</style>
      </React.Fragment>

    )
  }
}

export default index;
