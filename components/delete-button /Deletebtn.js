import React from 'react';
import pl from '/home/numan/todoist-frontend/public/minus.svg'
import favIcon2 from "/home/numan/todoist-frontend/public/favIcon2.svg"



class Deletebtn extends React.Component{
    
    render(){
        return(
            <React.Fragment>
                <div className="eachTask"> 
                    {this.props.page === `addtask` && (
                        <button className="buttonaddtask" data-index ={`${this.props.EachTask._id}`} onClick={this.props.handleDelete} >
                            <img src={pl} alt="logo" className="image1" />
                        </button>
                    )}
                    
                    <div className="note">
                    {this.props.EachTask.task}
                    </div>
                    <div  className="date">{this.props.EachTask.dateTime}</div>

                    <button className="buttonaddtask1" data-index ={`${this.props.EachTask._id}`} onClick= {this.props.handlefav} >
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
              .note{
                font-size:15px;
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
            .date{
                font-size: x-small;
            }
        `}</style>
            </React.Fragment>
        )
    }
}
export default Deletebtn;