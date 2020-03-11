import React from 'react'
import Link from 'next/link'
import myImage from '../../public/inbox-solid.svg'
import calender from '../../public/calender.svg'
import fav from '../../public/favIcon.svg'
import task from '../../public/task.svg'







class Header extends React.Component{
    render(){

        const title = this.props.title
        return(
            <React.Fragment>
                <div  className="sidebar">
                    <div className=" sidebar-box">
                        <div className="obox">
                            <div className="inbox">
                            <img src={myImage} alt="logo" className="image" />
                            </div>
                            <Link href="/">
                            <button className="button">inbox</button>
                            </Link> 
                        </div>

                        <div className="obox">
                            <div className="inbox">
                            <img src={calender} alt="logo" className="image" />
                            </div>
                            <Link href="/today">
                                <button className="button">today</button>
                            </Link>
                        </div> 

                        <div className="obox">
                         < div className="inbox">
                            <img src={fav} alt="logo" className="image" />
                            </div>

                            <Link href="/favourite">
                                <button className="button">  favourites</button>
                            </Link>
                        </div>


                        <div className="obox">
                            <div className="inbox">
                            <img src={task} alt="logo" className="image" />
                            </div>

                            <Link href="/projects">
                                <button className="button"> projects </button>
                            </Link>
                        </div>
                    </div>
                    


                </div>
                <style jsx>{`
                       .sidebar{
                        position: absolute;
                        width: 190px;
                        height: 100%;
                        left: 1px;
                        top: 65px;
                        background: rgba(196, 196, 196, 0.50);
                       }

                       .button {
                        background-color: #f4511e;
                        border: none;
                        color: white;
                        text-align: center;
                        font-size: 16px;
                        margin: 4px 2px;
                        opacity:   0.8;
                        transition: 0.3s;
                        display: inline-block;
                        text-decoration: none;
                        cursor: pointer;
                        border-radius: 0.375rem;
                        height: 30px;
                        width:100px
                        
                      }
                      
                      .button:hover {opacity: 1}

                      .inbox{
                        width:30px;
                        height:30px;
                        padding:15px
                      }
                      .image{
                        width:100%;
                        height:100%;
                        object-fit: contain;
                      }
                      .obox{
                        display :flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        align-items:center;
                        right: 0;
                        left: 0;
                        padding-top: 20px;
                        padding-left:40px;
                      }

                      }
                      .sidebar-box{
                        display:flex;
                        flex-direction: column;
                        align-items:center;
                        padding-right:60px;
                     }

        
                    `}

                    </style>
                
            </React.Fragment>


         )
    }
}
 export default Header;