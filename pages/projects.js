import Baselayout from "../components/layout/Baselayout";
import React from 'react'
import Addtask from "../components/addtask/Addtask";
import task from "/home/numan/next-js-tailwind/public/task.svg"




class project extends React.Component{
    render() {
        return (
        <React.Fragment>
            <Baselayout/> 
            <div className="inbox-page">

              <div className="inbox">
                <img src={task} alt="logo" className="image1" />
              </div>
              <h1>Projects</h1>
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
          
        `}</style>
        </React.Fragment>
    
            
        )
    }
}
export default project