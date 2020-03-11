import React from 'react';
import Deletebtn from '../delete-button /Deletebtn';

class Addtask extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      tasks: [],
      favTasks : []
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = () => {
    if (this.state.task === '') {return}
    let textarray = this.state.tasks;
    textarray.push(this.state.task);
    this.setState({ task: ''});
  } 

  handleKeyPress = (event) => {
    if(event.key === "Enter"){
      let textarray = this.state.tasks;
    textarray.push(this.state.task);
    this.setState({ task: ''});
  }
  }
  handleDelete = (event) => {
    const index = event.target.dataset.index
    this.setState(state => {
      console.log(`got index ${index}`)
        var list = [...state.tasks]
        list.splice(index,1)
        return {
            tasks:list
        }
    })}


    handlefav = (event) => {
      const index = event.currentTarget.dataset.index
      alert( this.state.tasks[index] )
      this.setState(state => {
        var list = [...state.favTasks]
        list.push(this.state.tasks[index])
        return {
          favTasks : list
        }
      })

    }


render(){

  const alltasks = this.state.tasks.map((task, i) => <Deletebtn handlefav={this.handlefav} index={i} handleDelete={this.handleDelete} key={i} EachTask={task} />)
    return (
      <React.Fragment>
        <div className="taskbox">
            <h2>Tasks</h2>
            <ul> 
            <h4>{alltasks}</h4>
            </ul>
          <form className=" addtask" onSubmit={this.addTask} >
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
                onKeyPress={this.handleKeyPress.bind(this)}
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