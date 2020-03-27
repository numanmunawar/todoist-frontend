import React from 'react'
import Baselayout from '../components/layout/Baselayout'
import Addtask from '../components/addtask/Addtask'
import favIcon from "/home/numan/next-js-tailwind/public/favIcon.svg"
import Deletebtn from "/home/numan/next-js-tailwind/components/delete-button /Deletebtn.js"
import axios from 'axios';

class fav extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
          favTasks: [],
        };
    }


    handlefav = (event) => {
        const index =event.currentTarget.dataset.index
        console.log(index)
        axios({
          method: 'put',
          url: `http://localhost:4000/tasks/${index}`,
        })
        .then(res => {
          console.log(res.data)
          alert(`removed fav task : ${index}`)
          this.getFunction()
        })
        .catch(err => {
          console.log(err)
        })
  
      }
    getFunction = () => {
        axios({
          method: 'get',
          url: 'http://localhost:4000/favTasks',
        })
        .then(res => {
          console.log(res.data)
          this.setState({
            favTasks : res.data
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
    componentDidMount() {
        this.getFunction()
      }
      
    
    
    render() {
    const alltasks = this.state.favTasks.map((task, i) => <Deletebtn handlefav={this.handlefav} page={`fav`} index={i}  key={i} EachTask={task} />) 
    return (
        <React.Fragment>
            <Baselayout />
            <div className="inbox-page">
                <div className="inbox">
                <img src={favIcon} alt="logo" className="image1" />
                </div>
                    <h1>Favourites</h1>
                <div className="taskbox">
                    <h2>Tasks</h2>
                    <ul> 
                    <h4>{alltasks}</h4>
                    </ul>
                </div>
                
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
          .taskbox{
            position: absolute;
            left: 300px;
            top: 130px;
          }
          
          
        `}</style>
        </React.Fragment>
        )
    }
}
export default fav;