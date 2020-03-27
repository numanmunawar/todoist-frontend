import React from 'react'
import Baselayout from '../components/layout/Baselayout'
import Addtask from '../components/addtask/Addtask'
import calender from "../public/calender.svg"




class today extends React.Component{
    render() {
        return (
            <React.Fragment>
            <Baselayout />
            <div className="inbox-page">
            <div className="inbox">
                <img src={calender} alt="logo" className="image1" />
            </div>
                <h1>Today</h1>
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
export default today