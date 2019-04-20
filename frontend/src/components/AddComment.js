import React, { Component } from "react";

import "./SongsForm.css"
import axios from 'axios';
import "./SongsForm.css"
class AddComment extends Component{

  constructor(props) {
        super(props);

          const { match: { params } } = this.props;
        this.state = {

            comment: "",
            song: params.id,
            user:"",

        };
      }
      componentDidMount(){

        console.log("mounted");
      }
    handlecomment = e => {
      this.setState({
        comment:e.target.value
      })
  };

  handleuser = e => {
    this.setState({
      user:e.target.value
    })
};  handleSubmit = () => {
        // // eslint-disable-next-line
        // console.log(item);
        const fd=new FormData();
        fd.append('user', this.state.user);
        fd.append('comment', this.state.comment);
        fd.append('song',this.state.song);
axios
  .post("http://localhost:8000/api/comments/", fd, {headers:{'Content-Type':'multipart/form-data;'}})
  //.then(res => this.refreshList());
  . then ((res) => {
    console.log (res)
}). catch ((err) => {
    console.log (err)
})
this._input.focus();
  this._input.value = "";
    this._input1.value = "";
    //  window.location.reload();
        }

  render(){
    var commentbox = {
      width:'40%',
      height: '100px',
    }
    var buttonstyle = {
      backgroundColor: '#343a40',
      color: 'white',
    }

    var self = this;
    return (
      <div className="mycontainer">
              <h2 className='heading'> Add Comment </h2>
              <form method="post" encType="multipart/form-data">
              <span>Please enter all the fields correctly.</span>
              <div >
                <label for="user">Username:</label>
                <input
                  type="textarea"
                  name="user"
                  value={this.state.user}
                  onChange={this.handleuser}
                  placeholder="Enter Username"
                  ref={
               function(el) {
                 self._input1 = el;
               }
             }
                />
              </div>
                <div >
                  <label for="comment">Comment:</label>
                  <input style={ commentbox }
                    type="text"
                    name="comment"
                    value={this.state.comment}
                    onChange={this.handlecomment}
                    placeholder="Add Comment"
                    ref={
                 function(el) {
                   self._input = el;
                 }
               }
                  />
                </div>


              </form>
              <button style={ buttonstyle } onClick={() => this.handleSubmit()}>
                Save
              </button>
          </div>
        );
  }
}

export default AddComment;
