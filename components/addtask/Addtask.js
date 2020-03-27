import React from 'react';
import Deletebtn from '../delete-button /Deletebtn';
import axios from 'axios';

class Addtask extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      task: "",
      tasks: [],
      
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    event.preventDefault()
    const data = {
      task : this.state.task
    }
    axios({
      method: 'post',
      url: 'http://localhost:4000/tasks',
      data: data,
      headers: {'content-type': 'application/json'}
    })
    .then(res => {
      console.log(res.data)
      this.getFunction()
      this.setState({
        task : ""
      })
    })
    .catch(err => {
      console.log(err)
    })
  } 
  
  handleDelete = (event) => {
    const index = event.currentTarget.dataset.index
    console.log(index)
    axios({
      method: 'delete',
      url: `http://localhost:4000/tasks/${index}`,
    })
    .then(res => {
      console.log(res.data)
      this.getFunction()
    })
    .catch(err => {
      console.log(err)
    })
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
        alert(`added fav task : ${index}`)
      })
      .catch(err => {
        console.log(err)
      })

    }

    getFunction = () => {
      axios({
        method: 'get',
        url: 'http://localhost:4000/tasks',
      })
      .then(res => {
        console.log(res.data)
        this.setState({
          tasks : res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
    }

    componentDidMount() {
      this.getFunction()
    }


render(){

  const alltasks = this.state.tasks.map((task, i) => <Deletebtn handlefav={this.handlefav} index={i} page={`addtask`}  handleDelete={this.handleDelete} key={i} EachTask={task} />)
    return (
      <React.Fragment>
        <div className="taskbox">
            <h2>Tasks</h2>
            <ul> 
            <h4>{alltasks}</h4>
            </ul>
          <form className=" addtask" onSubmit={this.handleSubmit} >
              <input
                required
                id="addtask"
                name="task"
                placeholder="Add task"
                autoFocus
                autoComplete="off"
                className=" addtask"
                value={this.state.task} 
                onChange={this.handleChange}
              />
             
          </form>
          <button
            type="submit"
            className="buttonaddtask"
            onClick={this.handleSubmit}
            disabled={!this.state.task}>
            Add task
          </button>     
      </div>
          
<style jsx>{`
  .html{
    margin:0px;
    padding:0px;
  }
  .taskbox{
    position: absolute;
    left: 300px;
    top: 130px;
  }
  .ul{
    margin:0;
  }
  .addtask{
    width: 700px;
    height: 30px;
    font-size:20px;
    padding-down:10px;
    border-radius: 0.375rem;
    border-color: #2975da1a;
  }
  .buttonaddtask{
   background-color: blue;
   border: none;
   color: white;
   padding: 8px 15px;
   text-align: center;
   text-decoration: none;
   display: inline-block;
   font-size: 16px;
   margin:10px 2px;
   border-radius:0.5em ;
   } 

`}</style>
    </React.Fragment>
)}
}
export default Addtask;