import React from 'react';
import pl from '/home/numan/next-js-tailwind/public/minus.svg'
import favIcon2 from "/home/numan/next-js-tailwind/public/favIcon2.svg"



class Deletebtn extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="eachTask"> 
                    <button className="buttonaddtask" data-index ={this.props.index} onClick={this.props.handleDelete} >
                        <img src={pl} alt="logo" className="image1" />
                    </button>
                    <div className="note">
                    {this.props.EachTask}
                    </div>

                    <button className="buttonaddtask1" data-index={this.props.index} onClick= {this.props.handlefav} >
                        <img src={favIcon2} alt="logo" className="image1" />
                    </button>
                    <div >
                    {this.props.task}
                
                    </div>
                </div>



        <style jsx>{`
        .buttonaddtask{
                background-color: blue;
                border: none;
                color: white;
                padding: 5px 10px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                border-radius:0.5em;
                } 
            .buttonaddtask:hover {
                background-color: RoyalBlue;
              } 
              .buttonaddtask1{
                background-color: blue;
                border: none;
                color: white;
                padding: 5px 10px;
                text-align: center;
                text-decoration: none;
                display: inline-block;
                font-size: 16px;
                border-radius:0.5em;
                margin-left:20px;
                } 
            .buttonaddtask1: {
                background-color: #f6ad55;
              } 
              .image1{

              }
              .note{
                font-size:20px;
                padding-left:10px;
                width:550px;
              }

            .image1{
                width:15px;
            }
            .eachTask{
                display: flex;
                padding:10px 0;
                
                border-bottom: 1px solid #f0f0f0;
                line-height: 21px;

            }
        `}</style>
            </React.Fragment>
        )
    }
}
export default Deletebtn;