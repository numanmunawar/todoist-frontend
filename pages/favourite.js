import React from 'react'
import Baselayout from '../components/layout/Baselayout'
import Addtask from '../components/addtask/Addtask'
import favIcon from "/home/numan/next-js-tailwind/public/favIcon.svg"
import Deletebtn from "/home/numan/next-js-tailwind/components/delete-button /Deletebtn.js"






class fav extends React.Component{
    
    render() {
   
        return (
        <React.Fragment>
            <Baselayout />
            <div className="inbox-page">

                <div className="inbox">
                <img src={favIcon} alt="logo" className="image1" />
                </div>
                <h1>Favourites</h1>
            </div>


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
          
          
        `}</style>
        </React.Fragment>
        )
    }
}
export default fav