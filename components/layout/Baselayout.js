import React from 'react'
import Header from '../header/Header';
import Navbar from '../navbar/Navbar';



const baselayout = (props) => {
    return(

    <React.Fragment>
        <Header/>
        <Navbar/>
        


        <style jsx>{`
        .body{
            margin:0px;
            padding:0px;
        }

        `}</style>
    </React.Fragment>
    )
}
export default baselayout