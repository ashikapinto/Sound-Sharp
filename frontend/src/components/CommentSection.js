import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter, Route , Link} from "react-router-dom";
class CommentSection extends Component{
  constructor(props){
    super(props);
    this.state = {
      commentList : []
    }
  }
  refreshList = () => {
        axios
          .get("http://localhost:8000/api/comments/")
          .then(res => this.setState({ commentList: res.data }))
          .catch(err => console.log(err));
      };
      componentDidMount(){
        this.refreshList();
      }
      handleDelete = id => {
        console.log(id);

        axios
          .delete('http://localhost:8000/api/comments/'+id)
          .then(res => this.refreshList());
          this.refreshList();

      };
      renderComments  = () => {

        return this.state.commentList.map(item => (
                this.renderCommentForSong(item)
        ));
      }

      renderCommentForSong = (item) => {
        var Style = {
    padding: 20,
     borderRadius: 25,
          margin: 10,
          borderStyle: "groove",
    width: 400,
    backgroundColor: "white",
    display: "inline-block",
      };
      var tit={
        color: "maroon",

      }
      var im={
        borderRadius:5,
        backgroundColor: '#343a40',
        color: 'white',
      }
      var hrstyle = {
        height:'5px',
      }
        const { match: { params } } = this.props;
        if(item.song == params.id){
          console.log(item)
          return (
            <div>
            <div style={ Style }>

              <h2 style={ tit }>{ item.user }</h2>
              <hr style={ hrstyle }/>
              <div>{ item.comment }</div>

              <div>

                <button style={ im } onClick={() => this.handleDelete(item.id)}>Delete</button>


              </div>
            </div>
            <br/>
            </div>
          )
        }
      }

      render(){


        const { match: { params } } = this.props;
        return (
          <div>
          <BrowserRouter>

          <p></p>
        { this.renderComments() }
        </BrowserRouter>
        </div>
        )
      }

}
export default CommentSection;
