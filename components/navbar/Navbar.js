import React from 'react'
import myImage from '../../public/logo4.svg'
import Link from 'next/link'
import inbox from '../../public/inbox-solid.svg'
import calender from '../../public/calender.svg'
import fav from '../../public/favIcon.svg'







class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment  >
            <div className = "navbar">
                <div >
                    <img src={myImage} alt="logo" className="image" />
                </div>

                <div className="nav-right">
                     <Link href="/">
                        <div className="inbox">
                            <img src={inbox} alt="logo" className="image1" />
                        </div>
                    </Link> 
                    
                    <Link href="/today">
                        <div className="inbox">
                            <img src={calender} alt="logo" className="image1" />
                        </div>
                    </Link> 
                    <Link href="/favourite">
                        <div className="inbox">
                            <img src={fav} alt="logo" className="image1" />
                        </div>
                    </Link> 
                </div>
                <style jsx>{`

                    .html{
                        margin:0px;
                        padding:0px;
                    }
                    .navbar{
                        width:100%;
                        height:57px;
                        background-color: #f6ad55;
                        
                        display: flex;
                        flex-direction: row;
                        justify-content: start;
                        font: bold:
                    }
                    .image{
                        width: 90px;
                        height:57px;
                        object-fit: contain;
                        display: flex;
                        align-items:center;
                        justify-content: ;
                        background-color: #f6ad55;

                    }
                    .inbox{
                        width:30px;
                        height:30px;
                        cursor: pointer;
                        padding:15px;
                      }
                      .image1{
                        width:100%;
                        height:100%;
                        object-fit: contain;
                      }
                      .nav-right{
                        width:100%;
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-end;
                        padding-right:60px;

                      }
                `}</style>
            </div>
            </React.Fragment>
        )
    }
    
}
export default Navbar;